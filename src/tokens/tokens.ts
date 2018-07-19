import { Dharma } from "../dharma";

import { BigNumber } from "../../utils/bignumber";

import { EthereumAddress, TokenAmount } from "../types";

import { TokenAttributes } from "../apis/token_api";

export interface TokenData {
    symbol: string;
    balance: number;
    allowance: number;
    hasUnlimitedAllowance: boolean;
}

const UNLIMITED_ALLOWANCE = new BigNumber(2).pow(256).sub(1);

export class Tokens {
    private readonly owner: EthereumAddress;

    public constructor(private dharma: Dharma, owner: string) {
        this.owner = new EthereumAddress(owner);

        this.getDataPromise = this.getDataPromise.bind(this);
    }

    public async get(): Promise<TokenData[]> {
        const tokens = await this.dharma.token.getSupportedTokens();

        return Promise.all(tokens.map(this.getDataPromise));
    }

    public async getTokenDataForSymbol(symbol: string): Promise<TokenData> {
        const attributes = await this.dharma.token.getTokenAttributesBySymbol(symbol);

        return this.getDataPromise(attributes);
    }

    private getDataPromise(tokenAttributes: TokenAttributes): Promise<TokenData> {
        return new Promise((resolve) => {
            const { address, symbol } = tokenAttributes;

            const balancePromise = this.dharma.token.getBalanceAsync(
                address,
                this.owner.toString(),
            );

            const allowancePromise = this.dharma.token.getProxyAllowanceAsync(
                address,
                this.owner.toString(),
            );

            Promise.all([balancePromise, allowancePromise]).then((values) => {
                const [rawBalance, rawAllowance] = values;

                const balanceAmount = TokenAmount.fromRaw(rawBalance, symbol);

                const allowanceAmount = TokenAmount.fromRaw(rawAllowance, symbol);

                const hasUnlimitedAllowance = allowanceAmount.rawAmount.greaterThan(
                    UNLIMITED_ALLOWANCE,
                );

                resolve({
                    symbol,
                    balance: balanceAmount.decimalAmount,
                    allowance: allowanceAmount.decimalAmount,
                    hasUnlimitedAllowance,
                });
            });
        });
    }
}

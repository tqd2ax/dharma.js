import { Dharma } from "../types/dharma";
export interface TokenData {
    symbol: string;
    balance: number;
    allowance: number;
    hasUnlimitedAllowance: boolean;
    name: string;
    numDecimals: number;
    address: string;
}
/**
 * Eventually returns token data for all tokens listed in the Dharma Token Registry.
 *
 * The balances and allowances are returned as specified by the owner param.
 *
 * @example
 * await Token.all(dharma, "0x...");
 * => {Promise<TokenData[]>}
 *
 * @param  dharma an instance of Dharma.js
 * @param  owner  the address for whom token balances and allowances will be retrieved
 * @returns {Promise<TokenData[]>}
 */
export declare function all(dharma: Dharma, owner: string): Promise<TokenData[]>;
/**
 * Eventually returns token data for the symbol specified.
 *
 * Balances and allowances are returned as specified by the owner param.
 *
 * @example
 * await Token.getDataForSymbol(dharma, "0x...", "ZRX");
 * => {Promise<TokenData>}
 *
 * @param  dharma an instance of Dharma.js
 * @param  symbol the symbol of the token whose data is being requested
 * @param  owner  the address for whom token balances and allowances will be retrieved
 * @returns {Promise<TokenData>}
 */
export declare function getDataForSymbol(dharma: Dharma, symbol: string, owner: string): Promise<TokenData>;
/**
 * If necessary, eventually sets the proxy's allowance for the specified token and user address
 * pair to unlimited. If an update occurs, the method returns a transaction hash. Otherwise, this is
 * a no op.
 *
 * @example
 * await Token.makeAllowanceUnlimitedIfNecessary(dharma, "0x...", "REP");
 * => "0x..."
 *
 * @returns {Promise<string | void>}
 */
export declare function makeAllowanceUnlimitedIfNecessary(dharma: Dharma, symbol: string, owner: string): Promise<string | void>;
/**
 * Eventually sets the creditor proxy's allowance for the specified token and user address
 * pair to unlimited.
 *
 * @example
 * await Token.setCreditorProxyAllowanceToUnlimited(dharma, "0x...", "REP");
 * => "0x..."
 *
 * @returns {Promise<string>}
 */
export declare function setCreditorProxyAllowanceToUnlimited(dharma: Dharma, symbol: string, owner: string): Promise<string>;
/**
 * Eventually determnines whether the user specified has allotted an unlimited allowance to the
 * creditor proxy.
 *
 * @example
 * await Token.hasUnlimitedCreditorProxyAllowance(dharma, "0x...", "REP");
 * => true
 *
 * @returns {Promise<boolean>}
 */
export declare function hasUnlimitedCreditorProxyAllowance(dharma: Dharma, symbol: string, owner: string): Promise<boolean>;
/**
 * Eventually revokes the creditor proxy's allowance for the specified token and user address pair.
 *
 * * @example
 * await Token.revokeCreditorProxyAllowance(dharma, "0x...", "REP");
 * => "0x..."
 *
 * @returns {Promise<string>}
 */
export declare function revokeCreditorProxyAllowance(dharma: Dharma, symbol: string, owner: string): Promise<string>;
/**
 * Eventually revokes the proxy's allowance for the specified token and user address pair.
 *
 * * @example
 * await Token.revokeAllowance(dharma, "0x...", "REP");
 * => "0x..."
 *
 * @returns {Promise<string>}
 */
export declare function revokeAllowance(dharma: Dharma, symbol: string, owner: string): Promise<string>;

import * as Web3 from "web3";
import { BigNumber } from "../../../utils/bignumber";
import { TxData } from "../../types";
import { BaseContract } from "./base_contract_wrapper";
export declare class ERC721CollateralizedSimpleInterestTermsContractContract extends BaseContract {
    getValueRepaidToDate: {
        callAsync(agreementId: string, defaultBlock?: any): Promise<BigNumber>;
    };
    DAY_LENGTH_IN_SECONDS: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    MONTH_LENGTH_IN_SECONDS: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    getTermEndTimestamp: {
        callAsync(_agreementId: string, defaultBlock?: any): Promise<BigNumber>;
    };
    WEEK_LENGTH_IN_SECONDS: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    registerRepayment: {
        sendTransactionAsync(agreementId: string, payer: string, beneficiary: string, unitsOfRepayment: BigNumber, tokenAddress: string, txData?: TxData): Promise<string>;
        estimateGasAsync(agreementId: string, payer: string, beneficiary: string, unitsOfRepayment: BigNumber, tokenAddress: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(agreementId: string, payer: string, beneficiary: string, unitsOfRepayment: BigNumber, tokenAddress: string, txData?: TxData): Promise<string>;
    };
    HOUR_LENGTH_IN_SECONDS: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    erc721Collateralizer: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    NUM_AMORTIZATION_UNIT_TYPES: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    INTEREST_RATE_SCALING_FACTOR_PERCENT: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    registerTermStart: {
        sendTransactionAsync(agreementId: string, debtor: string, txData?: TxData): Promise<string>;
        estimateGasAsync(agreementId: string, debtor: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(agreementId: string, debtor: string, txData?: TxData): Promise<string>;
    };
    getExpectedRepaymentValue: {
        callAsync(agreementId: string, timestamp: BigNumber, defaultBlock?: any): Promise<BigNumber>;
    };
    contractRegistry: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    INTEREST_RATE_SCALING_FACTOR_MULTIPLIER: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    unpackParametersFromBytes: {
        callAsync(parameters: string, defaultBlock?: any): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    };
    YEAR_LENGTH_IN_SECONDS: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    valueRepaid: {
        callAsync(index_0: string, defaultBlock?: any): Promise<BigNumber>;
    };
    deploy(...args: any[]): Promise<any>;
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>);
    static deployed(web3: Web3, defaults: Partial<TxData>): Promise<ERC721CollateralizedSimpleInterestTermsContractContract>;
    static at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<ERC721CollateralizedSimpleInterestTermsContractContract>;
}

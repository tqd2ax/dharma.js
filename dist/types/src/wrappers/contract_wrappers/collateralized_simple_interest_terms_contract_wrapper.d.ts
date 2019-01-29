import * as Web3 from "web3";
import { BigNumber } from "../../../utils/bignumber";
import { TxData } from "../../types";
import { BaseContract } from "./base_contract_wrapper";
export declare class CollateralizedSimpleInterestTermsContractContract extends BaseContract {
    debtKernelAddress: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    getValueRepaidToDate: {
        callAsync(agreementId: string, defaultBlock?: any): Promise<BigNumber>;
    };
    DAY_LENGTH_IN_SECONDS: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    debtKernel: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    MONTH_LENGTH_IN_SECONDS: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    getTermEndTimestamp: {
        callAsync(_agreementId: string, defaultBlock?: any): Promise<BigNumber>;
    };
    debtRegistry: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    WEEK_LENGTH_IN_SECONDS: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    returnCollateral: {
        sendTransactionAsync(agreementId: string, txData?: TxData): Promise<string>;
        estimateGasAsync(agreementId: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(agreementId: string, txData?: TxData): string;
    };
    timestampAdjustedForGracePeriod: {
        callAsync(gracePeriodInDays: BigNumber, defaultBlock?: any): Promise<BigNumber>;
    };
    registerRepayment: {
        sendTransactionAsync(agreementId: string, payer: string, beneficiary: string, unitsOfRepayment: BigNumber, tokenAddress: string, txData?: TxData): Promise<string>;
        estimateGasAsync(agreementId: string, payer: string, beneficiary: string, unitsOfRepayment: BigNumber, tokenAddress: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(agreementId: string, payer: string, beneficiary: string, unitsOfRepayment: BigNumber, tokenAddress: string, txData?: TxData): string;
    };
    SECONDS_IN_DAY: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    HOUR_LENGTH_IN_SECONDS: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    repaymentRouter: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    INTEREST_RATE_SCALING_FACTOR: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    NUM_AMORTIZATION_UNIT_TYPES: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    registerTermStart: {
        sendTransactionAsync(agreementId: string, debtor: string, txData?: TxData): Promise<string>;
        estimateGasAsync(agreementId: string, debtor: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(agreementId: string, debtor: string, txData?: TxData): string;
    };
    getExpectedRepaymentValue: {
        callAsync(agreementId: string, timestamp: BigNumber, defaultBlock?: any): Promise<BigNumber>;
    };
    tokenRegistry: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    unpackCollateralParametersFromBytes: {
        callAsync(parameters: string, defaultBlock?: any): Promise<[BigNumber, BigNumber, BigNumber]>;
    };
    agreementToCollateralizer: {
        callAsync(index: string, defaultBlock?: any): Promise<string>;
    };
    unpackParametersFromBytes: {
        callAsync(parameters: string, defaultBlock?: any): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    };
    seizeCollateral: {
        sendTransactionAsync(agreementId: string, txData?: TxData): Promise<string>;
        estimateGasAsync(agreementId: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(agreementId: string, txData?: TxData): string;
    };
    YEAR_LENGTH_IN_SECONDS: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    valueRepaid: {
        callAsync(index: string, defaultBlock?: any): Promise<BigNumber>;
    };
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>);
    static deployed(web3: Web3, defaults: Partial<TxData>): Promise<CollateralizedSimpleInterestTermsContractContract>;
    static at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<CollateralizedSimpleInterestTermsContractContract>;
}

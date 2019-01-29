import * as Web3 from "web3";
import { BigNumber } from "../../../utils/bignumber";
import { TxData } from "../../types";
import { BaseContract } from "./base_contract_wrapper";
export declare class CreditorProxyContract extends BaseContract {
    cancelDebtOffer: {
        sendTransactionAsync(commitmentAddresses: string[], commitmentValues: BigNumber[], termsContractParameters: string[], txData?: TxData): Promise<string>;
        estimateGasAsync(commitmentAddresses: string[], commitmentValues: BigNumber[], termsContractParameters: string[], txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(commitmentAddresses: string[], commitmentValues: BigNumber[], termsContractParameters: string[], txData?: TxData): Promise<string>;
    };
    unpause: {
        sendTransactionAsync(txData?: TxData): Promise<string>;
        estimateGasAsync(txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(txData?: TxData): Promise<string>;
    };
    fillDebtOffer: {
        sendTransactionAsync(creditor: string, orderAddresses: string[], orderValues: BigNumber[], orderBytes32: string[], signaturesV: (number | BigNumber)[], signaturesR: string[], signaturesS: string[], txData?: TxData): Promise<string>;
        estimateGasAsync(creditor: string, orderAddresses: string[], orderValues: BigNumber[], orderBytes32: string[], signaturesV: (number | BigNumber)[], signaturesR: string[], signaturesS: string[], txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(creditor: string, orderAddresses: string[], orderValues: BigNumber[], orderBytes32: string[], signaturesV: (number | BigNumber)[], signaturesR: string[], signaturesS: string[], txData?: TxData): Promise<string>;
    };
    paused: {
        callAsync(defaultBlock?: any): Promise<boolean>;
    };
    pause: {
        sendTransactionAsync(txData?: TxData): Promise<string>;
        estimateGasAsync(txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(txData?: TxData): Promise<string>;
    };
    owner: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    debtOfferCancelled: {
        callAsync(index_0: string, defaultBlock?: any): Promise<boolean>;
    };
    contractRegistry: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    debtOfferFilled: {
        callAsync(index_0: string, defaultBlock?: any): Promise<boolean>;
    };
    NULL_ISSUANCE_HASH: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    EXTERNAL_QUERY_GAS_LIMIT: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: TxData): Promise<string>;
        estimateGasAsync(newOwner: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(newOwner: string, txData?: TxData): Promise<string>;
    };
    deploy(...args: any[]): Promise<any>;
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>);
    static deployed(web3: Web3, defaults: Partial<TxData>): Promise<CreditorProxyContract>;
    static at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<CreditorProxyContract>;
}

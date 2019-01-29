import * as Web3 from "web3";
import { BigNumber } from "../../../utils/bignumber";
import { TxData } from "../../types";
import { BaseContract } from "./base_contract_wrapper";
export declare class ERC721CollateralizerContract extends BaseContract {
    CONTEXT: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    debtRegistry: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    retrieveCollateralParameters: {
        callAsync(agreementId: string, defaultBlock?: any): Promise<[string, BigNumber, string]>;
    };
    unpause: {
        sendTransactionAsync(txData?: TxData): Promise<string>;
        estimateGasAsync(txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(txData?: TxData): Promise<string>;
    };
    returnCollateral: {
        sendTransactionAsync(agreementId: string, txData?: TxData): Promise<string>;
        estimateGasAsync(agreementId: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(agreementId: string, txData?: TxData): Promise<string>;
    };
    paused: {
        callAsync(defaultBlock?: any): Promise<boolean>;
    };
    SECONDS_IN_DAY: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    collateralize: {
        sendTransactionAsync(agreementId: string, debtor: string, txData?: TxData): Promise<string>;
        estimateGasAsync(agreementId: string, debtor: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(agreementId: string, debtor: string, txData?: TxData): Promise<string>;
    };
    agreementToDebtor: {
        callAsync(index_0: string, defaultBlock?: any): Promise<string>;
    };
    cryptoKittiesContract: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    pause: {
        sendTransactionAsync(txData?: TxData): Promise<string>;
        estimateGasAsync(txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(txData?: TxData): Promise<string>;
    };
    owner: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    revokeCollateralizeAuthorization: {
        sendTransactionAsync(agent: string, txData?: TxData): Promise<string>;
        estimateGasAsync(agent: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(agent: string, txData?: TxData): Promise<string>;
    };
    tokenRegistry: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    addAuthorizedCollateralizeAgent: {
        sendTransactionAsync(agent: string, txData?: TxData): Promise<string>;
        estimateGasAsync(agent: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(agent: string, txData?: TxData): Promise<string>;
    };
    unpackCollateralParametersFromBytes: {
        callAsync(parameters: string, defaultBlock?: any): Promise<[boolean, BigNumber, BigNumber]>;
    };
    seizeCollateral: {
        sendTransactionAsync(agreementId: string, txData?: TxData): Promise<string>;
        estimateGasAsync(agreementId: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(agreementId: string, txData?: TxData): Promise<string>;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: TxData): Promise<string>;
        estimateGasAsync(newOwner: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(newOwner: string, txData?: TxData): Promise<string>;
    };
    getAuthorizedCollateralizeAgents: {
        callAsync(defaultBlock?: any): Promise<string[]>;
    };
    deploy(...args: any[]): Promise<any>;
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>);
    static deployed(web3: Web3, defaults: Partial<TxData>): Promise<ERC721CollateralizerContract>;
    static at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<ERC721CollateralizerContract>;
}

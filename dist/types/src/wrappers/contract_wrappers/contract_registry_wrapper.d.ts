import * as Web3 from "web3";
import { BigNumber } from "../../../utils/bignumber";
import { TxData } from "../../types";
import { BaseContract } from "./base_contract_wrapper";
export declare class ContractRegistryContract extends BaseContract {
    static deployed(web3: Web3, defaults: Partial<TxData>): Promise<ContractRegistryContract>;
    static at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<ContractRegistryContract>;
    debtKernel: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    tokenTransferProxy: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    debtRegistry: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    repaymentRouter: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    collateralizer: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    owner: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    tokenRegistry: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    updateAddress: {
        sendTransactionAsync(contractType: number | BigNumber, newAddress: string, txData?: TxData): Promise<string>;
        estimateGasAsync(contractType: number | BigNumber, newAddress: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(contractType: number | BigNumber, newAddress: string, txData?: TxData): Promise<string>;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: TxData): Promise<string>;
        estimateGasAsync(newOwner: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(newOwner: string, txData?: TxData): Promise<string>;
    };
    debtToken: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>);
}

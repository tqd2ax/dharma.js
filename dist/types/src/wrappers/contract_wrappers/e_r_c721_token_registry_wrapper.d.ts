import * as Web3 from "web3";
import { BigNumber } from "../../../utils/bignumber";
import { TxData } from "../../types";
import { BaseContract } from "./base_contract_wrapper";
export declare class ERC721TokenRegistryContract extends BaseContract {
    getTokenAttributesByIndex: {
        callAsync(_index: BigNumber, defaultBlock?: any): Promise<[string, string, string]>;
    };
    getTokenIndexBySymbol: {
        callAsync(_symbol: string, defaultBlock?: any): Promise<BigNumber>;
    };
    getTokenAddressBySymbol: {
        callAsync(_symbol: string, defaultBlock?: any): Promise<string>;
    };
    symbolHashToTokenAttributes: {
        callAsync(index_0: string, defaultBlock?: any): Promise<[string, BigNumber, string]>;
    };
    getTokenAddressByIndex: {
        callAsync(_index: BigNumber, defaultBlock?: any): Promise<string>;
    };
    getTokenSymbolByIndex: {
        callAsync(_index: BigNumber, defaultBlock?: any): Promise<string>;
    };
    getTokenAttributesBySymbol: {
        callAsync(_symbol: string, defaultBlock?: any): Promise<[string, BigNumber, string]>;
    };
    owner: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    tokenSymbolList: {
        callAsync(index_0: BigNumber, defaultBlock?: any): Promise<string>;
    };
    getTokenNameBySymbol: {
        callAsync(_symbol: string, defaultBlock?: any): Promise<string>;
    };
    setTokenAttributes: {
        sendTransactionAsync(_symbol: string, _tokenAddress: string, _tokenName: string, txData?: TxData): Promise<string>;
        estimateGasAsync(_symbol: string, _tokenAddress: string, _tokenName: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(_symbol: string, _tokenAddress: string, _tokenName: string, txData?: TxData): Promise<string>;
    };
    tokenSymbolListLength: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: TxData): Promise<string>;
        estimateGasAsync(newOwner: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(newOwner: string, txData?: TxData): Promise<string>;
    };
    getTokenNameByIndex: {
        callAsync(_index: BigNumber, defaultBlock?: any): Promise<string>;
    };
    deploy(...args: any[]): Promise<any>;
    static deployed(web3: Web3, defaults: Partial<TxData>): Promise<ERC721TokenRegistryContract>;
    static at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<ERC721TokenRegistryContract>;
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>);
}

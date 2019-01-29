import * as Web3 from "web3";
import { BigNumber } from "../../../utils/bignumber";
import { TxData } from "../../types";
import { BaseContract } from "./base_contract_wrapper";
export declare class TokenRegistryContract extends BaseContract {
    symbolHashToTokenIndex: {
        callAsync(index_0: string, defaultBlock?: any): Promise<BigNumber>;
    };
    setTokenAddress: {
        sendTransactionAsync(symbol: string, token: string, txData?: TxData): Promise<string>;
        estimateGasAsync(symbol: string, token: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(symbol: string, token: string, txData?: TxData): string;
    };
    getTokenIndexBySymbol: {
        callAsync(symbol: string, defaultBlock?: any): Promise<BigNumber>;
    };
    getTokenAddressBySymbol: {
        callAsync(symbol: string, defaultBlock?: any): Promise<string>;
    };
    getTokenAddressByIndex: {
        callAsync(index: BigNumber, defaultBlock?: any): Promise<string>;
    };
    getTokenSymbolByIndex: {
        callAsync(index: BigNumber, defaultBlock?: any): Promise<string>;
    };
    owner: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    tokenSymbolList: {
        callAsync(index_0: BigNumber, defaultBlock?: any): Promise<string>;
    };
    tokenSymbolListLength: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    symbolHashToTokenAddress: {
        callAsync(index_0: string, defaultBlock?: any): Promise<string>;
    };
    getTokenAttributesByIndex: {
        callAsync(index: BigNumber, defaultBlock?: any): Promise<any[]>;
    };
    getTokenAttributesBySymbol: {
        callAsync(symbol: string, defaultBlock?: any): Promise<any[]>;
    };
    getTokenNameBySymbol: {
        callAsync(symbol: string, defaultBlock?: any): Promise<string>;
    };
    getTokenNameByIndex: {
        callAsync(index: BigNumber, defaultBlock?: any): Promise<string>;
    };
    getNumDecimalsFromSymbol: {
        callAsync(tokenSymbol: string): Promise<BigNumber>;
    };
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>);
    static deployed(web3: Web3, defaults: Partial<TxData>): Promise<TokenRegistryContract>;
    static at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<TokenRegistryContract>;
}

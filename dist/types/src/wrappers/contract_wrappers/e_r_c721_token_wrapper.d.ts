import { TxData } from "../../types";
import { BigNumber } from "../../../utils/bignumber";
import * as Web3 from "web3";
import { BaseContract } from "./base_contract_wrapper";
export declare class ERC721TokenContract extends BaseContract {
    name: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    getApproved: {
        callAsync(_tokenId: BigNumber, defaultBlock?: any): Promise<string>;
    };
    approve: {
        sendTransactionAsync(_to: string, _tokenId: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(_to: string, _tokenId: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(_to: string, _tokenId: BigNumber, txData?: TxData): Promise<string>;
    };
    totalSupply: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    transferFrom: {
        sendTransactionAsync(_from: string, _to: string, _tokenId: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(_from: string, _to: string, _tokenId: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _tokenId: BigNumber, txData?: TxData): Promise<string>;
    };
    tokenOfOwnerByIndex: {
        callAsync(_owner: string, _index: BigNumber, defaultBlock?: any): Promise<BigNumber>;
    };
    exists: {
        callAsync(_tokenId: BigNumber, defaultBlock?: any): Promise<boolean>;
    };
    tokenByIndex: {
        callAsync(_index: BigNumber, defaultBlock?: any): Promise<BigNumber>;
    };
    ownerOf: {
        callAsync(_tokenId: BigNumber, defaultBlock?: any): Promise<string>;
    };
    balanceOf: {
        callAsync(_owner: string, defaultBlock?: any): Promise<BigNumber>;
    };
    symbol: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    setApprovalForAll: {
        sendTransactionAsync(_to: string, _approved: boolean, txData?: TxData): Promise<string>;
        estimateGasAsync(_to: string, _approved: boolean, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(_to: string, _approved: boolean, txData?: TxData): Promise<string>;
    };
    safeTransferFrom: {
        sendTransactionAsync(_from: string, _to: string, _tokenId: BigNumber, _data: string, txData?: TxData): Promise<string>;
        estimateGasAsync(_from: string, _to: string, _tokenId: BigNumber, _data: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _tokenId: BigNumber, _data: string, txData?: TxData): Promise<string>;
    };
    tokenURI: {
        callAsync(_tokenId: BigNumber, defaultBlock?: any): Promise<string>;
    };
    isApprovedForAll: {
        callAsync(_owner: string, _operator: string, defaultBlock?: any): Promise<boolean>;
    };
    static deployed(web3: Web3, defaults?: Partial<TxData>): Promise<ERC721TokenContract>;
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>);
    static at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<ERC721TokenContract>;
}

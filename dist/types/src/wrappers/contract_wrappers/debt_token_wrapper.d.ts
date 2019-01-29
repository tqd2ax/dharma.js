/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
import { TxData } from "../../types";
import { BigNumber } from "../../../utils/bignumber";
import * as Web3 from "web3";
import { BaseContract } from "./base_contract_wrapper";
export declare class DebtTokenContract extends BaseContract {
    supportsInterface: {
        callAsync(interfaceID: string, defaultBlock?: any): Promise<boolean>;
    };
    getAuthorizedMintAgents: {
        callAsync(defaultBlock?: any): Promise<string[]>;
    };
    name: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    getApproved: {
        callAsync(_tokenId: BigNumber, defaultBlock?: any): Promise<string>;
    };
    approve: {
        sendTransactionAsync(_to: string, _tokenId: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(_to: string, _tokenId: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(_to: string, _tokenId: BigNumber, txData?: TxData): string;
    };
    totalSupply: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    transferFrom: {
        sendTransactionAsync(_from: string, _to: string, _tokenId: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(_from: string, _to: string, _tokenId: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _tokenId: BigNumber, txData?: TxData): string;
    };
    tokenOfOwnerByIndex: {
        callAsync(_owner: string, _index: BigNumber, defaultBlock?: any): Promise<BigNumber>;
    };
    unpause: {
        sendTransactionAsync(txData?: TxData): Promise<string>;
        estimateGasAsync(txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(txData?: TxData): string;
    };
    exists: {
        callAsync(_tokenId: BigNumber, defaultBlock?: any): Promise<boolean>;
    };
    tokenByIndex: {
        callAsync(_index: BigNumber, defaultBlock?: any): Promise<BigNumber>;
    };
    paused: {
        callAsync(defaultBlock?: any): Promise<boolean>;
    };
    ownerOf: {
        callAsync(_tokenId: BigNumber, defaultBlock?: any): Promise<string>;
    };
    balanceOf: {
        callAsync(_owner: string, defaultBlock?: any): Promise<BigNumber>;
    };
    registry: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    revokeMintAgentAuthorization: {
        sendTransactionAsync(_agent: string, txData?: TxData): Promise<string>;
        estimateGasAsync(_agent: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(_agent: string, txData?: TxData): string;
    };
    pause: {
        sendTransactionAsync(txData?: TxData): Promise<string>;
        estimateGasAsync(txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(txData?: TxData): string;
    };
    owner: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    symbol: {
        callAsync(defaultBlock?: any): Promise<string>;
    };
    create: {
        sendTransactionAsync(_version: string, _beneficiary: string, _debtor: string, _underwriter: string, _underwriterRiskRating: BigNumber, _termsContract: string, _termsContractParameters: string, _salt: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(_version: string, _beneficiary: string, _debtor: string, _underwriter: string, _underwriterRiskRating: BigNumber, _termsContract: string, _termsContractParameters: string, _salt: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(_version: string, _beneficiary: string, _debtor: string, _underwriter: string, _underwriterRiskRating: BigNumber, _termsContract: string, _termsContractParameters: string, _salt: BigNumber, txData?: TxData): string;
    };
    addAuthorizedMintAgent: {
        sendTransactionAsync(_agent: string, txData?: TxData): Promise<string>;
        estimateGasAsync(_agent: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(_agent: string, txData?: TxData): string;
    };
    setApprovalForAll: {
        sendTransactionAsync(_to: string, _approved: boolean, txData?: TxData): Promise<string>;
        estimateGasAsync(_to: string, _approved: boolean, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(_to: string, _approved: boolean, txData?: TxData): string;
    };
    transfer: {
        sendTransactionAsync(_to: string, _tokenId: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(_to: string, _tokenId: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(_to: string, _tokenId: BigNumber, txData?: TxData): string;
    };
    safeTransferFrom: {
        sendTransactionAsync(_from: string, _to: string, _tokenId: BigNumber, _data?: string, txData?: TxData): Promise<string>;
        estimateGasAsync(_from: string, _to: string, _tokenId: BigNumber, _data: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _tokenId: BigNumber, _data: string, txData?: TxData): string;
    };
    tokenURI: {
        callAsync(_tokenId: BigNumber, defaultBlock?: any): Promise<string>;
    };
    isApprovedForAll: {
        callAsync(_owner: string, _operator: string, defaultBlock?: any): Promise<boolean>;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: TxData): Promise<string>;
        estimateGasAsync(newOwner: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(newOwner: string, txData?: TxData): string;
    };
    private web3;
    constructor(web3: Web3, web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>);
    static deployed(web3: Web3, defaults: Partial<TxData>): Promise<DebtTokenContract>;
    static at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<DebtTokenContract>;
}

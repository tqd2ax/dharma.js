import * as Web3 from "web3";
import { BigNumber } from "../../utils/bignumber";
import { AddressBook } from "../types";
import { CollateralizedSimpleInterestTermsContractContract, CollateralizerContract, ContractRegistryContract, CreditorProxyContract, DebtKernelContract, DebtRegistryContract, DebtTokenContract, ERC20Contract, ERC721CollateralizedSimpleInterestTermsContractContract, ERC721CollateralizerContract, ERC721TokenContract, ERC721TokenRegistryContract, MintableERC721TokenContract, RepaymentRouterContract, SimpleInterestTermsContractContract, TermsContract, TokenRegistryContract, TokenTransferProxyContract } from "../wrappers";
export interface DharmaContracts {
    debtKernel: DebtKernelContract;
    debtRegistry: DebtRegistryContract;
    debtToken: DebtTokenContract;
    repaymentRouter: RepaymentRouterContract;
    tokenTransferProxy: TokenTransferProxyContract;
    collateralizer: CollateralizerContract;
    erc721Collateralizer?: ERC721CollateralizerContract;
}
export declare const ContractsError: {
    CANNOT_FIND_TOKEN_WITH_SYMBOL: (symbol: string) => any;
    CANNOT_FIND_TOKEN_WITH_INDEX: (index: number) => any;
    TERMS_CONTRACT_NOT_FOUND: (termsContractAddress: string) => any;
};
export declare class ContractsAPI {
    private readonly web3;
    private addressBook;
    private readonly cache;
    constructor(web3: Web3, addressBook?: AddressBook);
    loadDharmaContractsAsync(transactionOptions?: object): Promise<DharmaContracts>;
    loadDebtKernelAsync(transactionOptions?: object): Promise<DebtKernelContract>;
    loadERC721CollateralizerAsync(transactionOptions?: object): Promise<ERC721CollateralizerContract>;
    loadCollateralizerAsync(transactionOptions?: object): Promise<CollateralizerContract>;
    loadDebtRegistryAsync(transactionOptions?: object): Promise<DebtRegistryContract>;
    loadContractRegistryAsync(transactionOptions?: object): Promise<ContractRegistryContract>;
    loadDebtTokenAsync(transactionOptions?: object): Promise<DebtTokenContract>;
    loadRepaymentRouterAsync(transactionOptions?: object): Promise<RepaymentRouterContract>;
    loadRepaymentRouterAtAsync(address: string, transactionOptions?: object): Promise<RepaymentRouterContract>;
    loadTokenTransferProxyAsync(transactionOptions?: object): Promise<TokenTransferProxyContract>;
    /**
     * Loads the Mintable ERC721 Token Contract that is deployed for testing purposes.
     *
     * @returns {Promise<MintableERC721TokenContract>}
     */
    loadMintableERC721ContractAsync(transactionOptions?: object): Promise<MintableERC721TokenContract>;
    loadERC721ContractAsync(contractAddress: string, transactionOptions?: object): Promise<ERC721TokenContract>;
    loadERC20TokenAsync(tokenAddress: string, transactionOptions?: object): Promise<ERC20Contract>;
    loadTermsContractAsync(termsContractAddress: string, transactionOptions?: object): Promise<TermsContract>;
    /**
     * Given a terms contract address, returns the name of that contract.
     *
     * @example
     *  getTermsContractType("0x069cb8891d9dbf02d89079a77169e0dc8bacda65")
     *  => "SimpleInterestLoan"
     *
     * @param {string} contractAddress
     * @returns {string}
     */
    getTermsContractType(contractAddress: string): Promise<string>;
    loadSimpleInterestTermsContract(transactionOptions?: object): Promise<SimpleInterestTermsContractContract>;
    loadCollateralizedSimpleInterestTermsContract(transactionOptions?: object): Promise<CollateralizedSimpleInterestTermsContractContract>;
    loadERC721CollateralizedSimpleInterestTermsContract(transactionOptions?: object): Promise<ERC721CollateralizedSimpleInterestTermsContractContract>;
    loadERC721TokenRegistryContract(transactionOptions?: object): Promise<ERC721TokenRegistryContract>;
    loadCreditorProxyContract(transactionOptions?: object): Promise<CreditorProxyContract>;
    loadTokenRegistry(transactionOptions?: object): Promise<TokenRegistryContract>;
    getTokenAddressBySymbolAsync(symbol: string): Promise<string>;
    /**
     * Given the symbol for an ERC721 contract, returns the index of that contract in the
     * ERC721 token registry.
     *
     * @param {string} symbol
     * @returns {Promise<string>}
     */
    getERC721IndexBySymbolAsync(symbol: string): Promise<BigNumber>;
    getERC721SymbolByIndexAsync(index: BigNumber): Promise<string>;
    getERC721AddressBySymbolAsync(symbol: string): Promise<string>;
    /**
     * Given the index of a token in the Token Registry, returns the address of that
     * token's contract.
     *
     * @param {number} index
     * @returns {Promise<string>}
     */
    getTokenAddressByIndexAsync(index: BigNumber): Promise<string>;
    getTokenIndexBySymbolAsync(symbol: string): Promise<BigNumber>;
    getTokenSymbolByIndexAsync(index: BigNumber): Promise<string>;
    loadTokenBySymbolAsync(symbol: string, transactionOptions?: object): Promise<ERC20Contract>;
    loadERC721BySymbolAsync(symbol: string, transactionOptions?: object): Promise<ERC721TokenContract>;
    /**
     * Given the index of a token in the token registry, loads an instance of that
     * token and returns it.
     *
     * @param {number} index
     * @param {object} transactionOptions
     * @returns {Promise<ERC20Contract>}
     */
    loadTokenByIndexAsync(index: BigNumber, transactionOptions?: object): Promise<ERC20Contract>;
    doesTokenCorrespondToSymbol(tokenAddress: string, symbol: string): Promise<boolean>;
    private getERC20TokenCacheKey;
    private getERC721ContractCacheKey;
    private getTermsContractCacheKey;
    private getRepaymentRouterCacheKey;
}

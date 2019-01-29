import * as Web3 from "web3";
import { ContractsAPI } from "../../apis";
import { ERC721CollateralizedTermsContractParameters } from "./loan_adapter";
export declare class ERC721CollateralizedLoanTerms {
    private contractsAPI;
    private assert;
    constructor(web3: Web3, contractsAPI: ContractsAPI);
    packParameters(params: ERC721CollateralizedTermsContractParameters): string;
    unpackParameters(packedParams: string): ERC721CollateralizedTermsContractParameters;
    assertValidParams(params: ERC721CollateralizedTermsContractParameters): void;
    private assertERC721ContractIndexWithinBounds;
    private assertTokenExists;
    private assertValidIsEnumerable;
    private assertValidTokenReference;
}

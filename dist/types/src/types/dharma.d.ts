import * as Web3 from "web3";
import { AdaptersAPI, BlockchainAPI, ContractsAPI, LogsAPI, OrderAPI, ServicingAPI, SignerAPI, TokenAPI } from "../apis/index";
import * as DharmaTypes from "./index";
declare class Dharma {
    static Types: typeof DharmaTypes;
    sign: SignerAPI;
    order: OrderAPI;
    contracts: ContractsAPI;
    adapters: AdaptersAPI;
    servicing: ServicingAPI;
    token: TokenAPI;
    blockchain: BlockchainAPI;
    logs: LogsAPI;
    readonly web3: Web3;
    constructor(web3Provider: Web3.Provider, addressBook?: DharmaTypes.AddressBook);
}
export { Dharma };

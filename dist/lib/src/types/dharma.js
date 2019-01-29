"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Web3 = require("web3");
var index_1 = require("../apis/index");
var DharmaTypes = require("./index");
var Dharma = /** @class */ (function () {
    function Dharma(web3Provider, addressBook) {
        if (addressBook === void 0) { addressBook = {}; }
        this.web3 = new Web3(web3Provider);
        this.contracts = new index_1.ContractsAPI(this.web3, addressBook);
        this.servicing = new index_1.ServicingAPI(this.web3, this.contracts);
        this.sign = new index_1.SignerAPI(this.web3, this.contracts);
        this.adapters = new index_1.AdaptersAPI(this.web3, this.contracts);
        this.order = new index_1.OrderAPI(this.web3, this.contracts, this.adapters);
        this.token = new index_1.TokenAPI(this.web3, this.contracts);
        this.blockchain = new index_1.BlockchainAPI(this.web3, this.contracts);
        this.logs = new index_1.LogsAPI(this.web3, this.contracts);
    }
    Dharma.Types = DharmaTypes;
    return Dharma;
}());
exports.Dharma = Dharma;
//# sourceMappingURL=dharma.js.map
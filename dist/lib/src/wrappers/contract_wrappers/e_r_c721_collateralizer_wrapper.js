"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-unused-variable
var contracts_1 = require("@dharmaprotocol/contracts");
var promisify = require("tiny-promisify");
var class_utils_1 = require("../../../utils/class_utils");
var web3_utils_1 = require("../../../utils/web3_utils");
var base_contract_wrapper_1 = require("./base_contract_wrapper");
var ERC721CollateralizerContract = /** @class */ (function (_super) {
    __extends(ERC721CollateralizerContract, _super);
    function ERC721CollateralizerContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.CONTEXT = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.CONTEXT.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.debtRegistry = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.debtRegistry.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.retrieveCollateralParameters = {
            callAsync: function (agreementId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.retrieveCollateralParameters.call, self.web3ContractInstance)(agreementId)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.unpause = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.unpause.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.unpause, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.unpause.estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, abiEncodedTransactionData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.unpause.getData, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                abiEncodedTransactionData = _a.sent();
                                return [2 /*return*/, abiEncodedTransactionData];
                        }
                    });
                });
            },
        };
        _this.returnCollateral = {
            sendTransactionAsync: function (agreementId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.returnCollateral.estimateGasAsync.bind(self, agreementId))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.returnCollateral, self.web3ContractInstance)(agreementId, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (agreementId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.returnCollateral.estimateGas, self.web3ContractInstance)(agreementId, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (agreementId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, abiEncodedTransactionData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.returnCollateral.getData, self.web3ContractInstance)(agreementId, txDataWithDefaults)];
                            case 2:
                                abiEncodedTransactionData = _a.sent();
                                return [2 /*return*/, abiEncodedTransactionData];
                        }
                    });
                });
            },
        };
        _this.paused = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.paused.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.SECONDS_IN_DAY = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.SECONDS_IN_DAY.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.collateralize = {
            sendTransactionAsync: function (agreementId, debtor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.collateralize.estimateGasAsync.bind(self, agreementId, debtor))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.collateralize, self.web3ContractInstance)(agreementId, debtor, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (agreementId, debtor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.collateralize.estimateGas, self.web3ContractInstance)(agreementId, debtor, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (agreementId, debtor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, abiEncodedTransactionData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.collateralize.getData, self.web3ContractInstance)(agreementId, debtor, txDataWithDefaults)];
                            case 2:
                                abiEncodedTransactionData = _a.sent();
                                return [2 /*return*/, abiEncodedTransactionData];
                        }
                    });
                });
            },
        };
        _this.agreementToDebtor = {
            callAsync: function (index_0, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.agreementToDebtor.call, self.web3ContractInstance)(index_0)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.cryptoKittiesContract = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.cryptoKittiesContract.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.pause = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.pause.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.pause, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.pause.estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, abiEncodedTransactionData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.pause.getData, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                abiEncodedTransactionData = _a.sent();
                                return [2 /*return*/, abiEncodedTransactionData];
                        }
                    });
                });
            },
        };
        _this.owner = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.owner.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.revokeCollateralizeAuthorization = {
            sendTransactionAsync: function (agent, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.revokeCollateralizeAuthorization.estimateGasAsync.bind(self, agent))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.revokeCollateralizeAuthorization, self.web3ContractInstance)(agent, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (agent, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.revokeCollateralizeAuthorization.estimateGas, self.web3ContractInstance)(agent, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (agent, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, abiEncodedTransactionData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.revokeCollateralizeAuthorization.getData, self.web3ContractInstance)(agent, txDataWithDefaults)];
                            case 2:
                                abiEncodedTransactionData = _a.sent();
                                return [2 /*return*/, abiEncodedTransactionData];
                        }
                    });
                });
            },
        };
        _this.tokenRegistry = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.tokenRegistry.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.addAuthorizedCollateralizeAgent = {
            sendTransactionAsync: function (agent, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.addAuthorizedCollateralizeAgent.estimateGasAsync.bind(self, agent))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.addAuthorizedCollateralizeAgent, self.web3ContractInstance)(agent, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (agent, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.addAuthorizedCollateralizeAgent.estimateGas, self.web3ContractInstance)(agent, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (agent, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, abiEncodedTransactionData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.addAuthorizedCollateralizeAgent.getData, self.web3ContractInstance)(agent, txDataWithDefaults)];
                            case 2:
                                abiEncodedTransactionData = _a.sent();
                                return [2 /*return*/, abiEncodedTransactionData];
                        }
                    });
                });
            },
        };
        _this.unpackCollateralParametersFromBytes = {
            callAsync: function (parameters, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.unpackCollateralParametersFromBytes.call, self.web3ContractInstance)(parameters)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.seizeCollateral = {
            sendTransactionAsync: function (agreementId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.seizeCollateral.estimateGasAsync.bind(self, agreementId))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.seizeCollateral, self.web3ContractInstance)(agreementId, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (agreementId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.seizeCollateral.estimateGas, self.web3ContractInstance)(agreementId, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (agreementId, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, abiEncodedTransactionData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.seizeCollateral.getData, self.web3ContractInstance)(agreementId, txDataWithDefaults)];
                            case 2:
                                abiEncodedTransactionData = _a.sent();
                                return [2 /*return*/, abiEncodedTransactionData];
                        }
                    });
                });
            },
        };
        _this.transferOwnership = {
            sendTransactionAsync: function (newOwner, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.transferOwnership.estimateGasAsync.bind(self, newOwner))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.transferOwnership, self.web3ContractInstance)(newOwner, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newOwner, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.transferOwnership.estimateGas, self.web3ContractInstance)(newOwner, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newOwner, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, abiEncodedTransactionData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.transferOwnership.getData, self.web3ContractInstance)(newOwner, txDataWithDefaults)];
                            case 2:
                                abiEncodedTransactionData = _a.sent();
                                return [2 /*return*/, abiEncodedTransactionData];
                        }
                    });
                });
            },
        };
        _this.getAuthorizedCollateralizeAgents = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.getAuthorizedCollateralizeAgents.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        class_utils_1.classUtils.bindAll(_this, ["web3ContractInstance", "defaults"]);
        return _this;
    }
    ERC721CollateralizerContract.prototype.deploy = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var wrapper, rejected;
            return __generator(this, function (_a) {
                wrapper = this;
                rejected = false;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        wrapper.web3ContractInstance.new(wrapper.defaults, function (err, contract) {
                            if (err) {
                                reject(err);
                            }
                            else if (contract.address) {
                                wrapper.web3ContractInstance = wrapper.web3ContractInstance.at(contract.address);
                                wrapper.address = contract.address;
                                resolve();
                            }
                        });
                    })];
            });
        });
    };
    ERC721CollateralizerContract.deployed = function (web3, defaults) {
        return __awaiter(this, void 0, void 0, function () {
            var web3Utils, currentNetwork, abi, networks, contractAddress, contractExists, web3ContractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        web3Utils = new web3_utils_1.Web3Utils(web3);
                        return [4 /*yield*/, web3Utils.getNetworkIdAsync()];
                    case 1:
                        currentNetwork = _a.sent();
                        abi = contracts_1.ERC721Collateralizer.abi, networks = contracts_1.ERC721Collateralizer.networks;
                        if (!networks[currentNetwork]) return [3 /*break*/, 3];
                        contractAddress = networks[currentNetwork].address;
                        return [4 /*yield*/, web3Utils.doesContractExistAtAddressAsync(contractAddress)];
                    case 2:
                        contractExists = _a.sent();
                        if (contractExists) {
                            web3ContractInstance = web3.eth.contract(abi).at(contractAddress);
                            return [2 /*return*/, new ERC721CollateralizerContract(web3ContractInstance, defaults)];
                        }
                        else {
                            throw new Error(base_contract_wrapper_1.CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK("ERC721Collateralizer", currentNetwork));
                        }
                        return [3 /*break*/, 4];
                    case 3: throw new Error(base_contract_wrapper_1.CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK("ERC721Collateralizer", currentNetwork));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ERC721CollateralizerContract.at = function (address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function () {
            var web3Utils, abi, contractExists, currentNetwork, web3ContractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        web3Utils = new web3_utils_1.Web3Utils(web3);
                        abi = contracts_1.ERC721Collateralizer.abi;
                        return [4 /*yield*/, web3Utils.doesContractExistAtAddressAsync(address)];
                    case 1:
                        contractExists = _a.sent();
                        return [4 /*yield*/, web3Utils.getNetworkIdAsync()];
                    case 2:
                        currentNetwork = _a.sent();
                        if (contractExists) {
                            web3ContractInstance = web3.eth.contract(abi).at(address);
                            return [2 /*return*/, new ERC721CollateralizerContract(web3ContractInstance, defaults)];
                        }
                        else {
                            throw new Error(base_contract_wrapper_1.CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK("ERC721Collateralizer", currentNetwork));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return ERC721CollateralizerContract;
}(base_contract_wrapper_1.BaseContract)); // tslint:disable:max-file-line-count
exports.ERC721CollateralizerContract = ERC721CollateralizerContract;
//# sourceMappingURL=e_r_c721_collateralizer_wrapper.js.map
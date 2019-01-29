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
var promisify = require("tiny-promisify");
var base_contract_wrapper_1 = require("./base_contract_wrapper");
var contracts_1 = require("@dharmaprotocol/contracts");
var web3_utils_1 = require("../../../utils/web3_utils");
var class_utils_1 = require("../../../utils/class_utils");
var ERC721CollateralizedSimpleInterestTermsContractContract = /** @class */ (function (_super) {
    __extends(ERC721CollateralizedSimpleInterestTermsContractContract, _super);
    function ERC721CollateralizedSimpleInterestTermsContractContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.getValueRepaidToDate = {
            callAsync: function (agreementId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.getValueRepaidToDate.call, self.web3ContractInstance)(agreementId)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.DAY_LENGTH_IN_SECONDS = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.DAY_LENGTH_IN_SECONDS.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.MONTH_LENGTH_IN_SECONDS = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.MONTH_LENGTH_IN_SECONDS.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.getTermEndTimestamp = {
            callAsync: function (_agreementId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.getTermEndTimestamp.call, self.web3ContractInstance)(_agreementId)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.WEEK_LENGTH_IN_SECONDS = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.WEEK_LENGTH_IN_SECONDS.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.registerRepayment = {
            sendTransactionAsync: function (agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.registerRepayment.estimateGasAsync.bind(self, agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.registerRepayment, self.web3ContractInstance)(agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress, txData) {
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
                                return [4 /*yield*/, promisify(self.web3ContractInstance.registerRepayment.estimateGas, self.web3ContractInstance)(agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress, txData) {
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
                                return [4 /*yield*/, promisify(self.web3ContractInstance.registerRepayment.getData, self.web3ContractInstance)(agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress, txDataWithDefaults)];
                            case 2:
                                abiEncodedTransactionData = _a.sent();
                                return [2 /*return*/, abiEncodedTransactionData];
                        }
                    });
                });
            },
        };
        _this.HOUR_LENGTH_IN_SECONDS = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.HOUR_LENGTH_IN_SECONDS.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.erc721Collateralizer = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.erc721Collateralizer.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.NUM_AMORTIZATION_UNIT_TYPES = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.NUM_AMORTIZATION_UNIT_TYPES.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.INTEREST_RATE_SCALING_FACTOR_PERCENT = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.INTEREST_RATE_SCALING_FACTOR_PERCENT.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.registerTermStart = {
            sendTransactionAsync: function (agreementId, debtor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.registerTermStart.estimateGasAsync.bind(self, agreementId, debtor))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, promisify(self.web3ContractInstance.registerTermStart, self.web3ContractInstance)(agreementId, debtor, txDataWithDefaults)];
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
                                return [4 /*yield*/, promisify(self.web3ContractInstance.registerTermStart.estimateGas, self.web3ContractInstance)(agreementId, debtor, txDataWithDefaults)];
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
                                return [4 /*yield*/, promisify(self.web3ContractInstance.registerTermStart.getData, self.web3ContractInstance)(agreementId, debtor, txDataWithDefaults)];
                            case 2:
                                abiEncodedTransactionData = _a.sent();
                                return [2 /*return*/, abiEncodedTransactionData];
                        }
                    });
                });
            },
        };
        _this.getExpectedRepaymentValue = {
            callAsync: function (agreementId, timestamp, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.getExpectedRepaymentValue.call, self.web3ContractInstance)(agreementId, timestamp)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.contractRegistry = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.contractRegistry.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.INTEREST_RATE_SCALING_FACTOR_MULTIPLIER = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.INTEREST_RATE_SCALING_FACTOR_MULTIPLIER.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.unpackParametersFromBytes = {
            callAsync: function (parameters, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.unpackParametersFromBytes.call, self.web3ContractInstance)(parameters)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.YEAR_LENGTH_IN_SECONDS = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.YEAR_LENGTH_IN_SECONDS.call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.valueRepaid = {
            callAsync: function (index_0, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, promisify(self.web3ContractInstance.valueRepaid.call, self.web3ContractInstance)(index_0)];
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
    ERC721CollateralizedSimpleInterestTermsContractContract.prototype.deploy = function () {
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
    ERC721CollateralizedSimpleInterestTermsContractContract.deployed = function (web3, defaults) {
        return __awaiter(this, void 0, void 0, function () {
            var web3Utils, currentNetwork, abi, networks, contractAddress, contractExists, web3ContractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        web3Utils = new web3_utils_1.Web3Utils(web3);
                        return [4 /*yield*/, web3Utils.getNetworkIdAsync()];
                    case 1:
                        currentNetwork = _a.sent();
                        abi = contracts_1.ERC721CollateralizedSimpleInterestTermsContract.abi, networks = contracts_1.ERC721CollateralizedSimpleInterestTermsContract.networks;
                        if (!networks[currentNetwork]) return [3 /*break*/, 3];
                        contractAddress = networks[currentNetwork].address;
                        return [4 /*yield*/, web3Utils.doesContractExistAtAddressAsync(contractAddress)];
                    case 2:
                        contractExists = _a.sent();
                        if (contractExists) {
                            web3ContractInstance = web3.eth.contract(abi).at(contractAddress);
                            return [2 /*return*/, new ERC721CollateralizedSimpleInterestTermsContractContract(web3ContractInstance, defaults)];
                        }
                        else {
                            throw new Error(base_contract_wrapper_1.CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK("ERC721CollateralizedSimpleInterestTermsContract", currentNetwork));
                        }
                        return [3 /*break*/, 4];
                    case 3: throw new Error(base_contract_wrapper_1.CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK("ERC721CollateralizedSimpleInterestTermsContract", currentNetwork));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ERC721CollateralizedSimpleInterestTermsContractContract.at = function (address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function () {
            var web3Utils, abi, contractExists, currentNetwork, web3ContractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        web3Utils = new web3_utils_1.Web3Utils(web3);
                        abi = contracts_1.ERC721CollateralizedSimpleInterestTermsContract.abi;
                        return [4 /*yield*/, web3Utils.doesContractExistAtAddressAsync(address)];
                    case 1:
                        contractExists = _a.sent();
                        return [4 /*yield*/, web3Utils.getNetworkIdAsync()];
                    case 2:
                        currentNetwork = _a.sent();
                        if (contractExists) {
                            web3ContractInstance = web3.eth.contract(abi).at(address);
                            return [2 /*return*/, new ERC721CollateralizedSimpleInterestTermsContractContract(web3ContractInstance, defaults)];
                        }
                        else {
                            throw new Error(base_contract_wrapper_1.CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK("ERC721CollateralizedSimpleInterestTermsContract", currentNetwork));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return ERC721CollateralizedSimpleInterestTermsContractContract;
}(base_contract_wrapper_1.BaseContract)); // tslint:disable:max-file-line-count
exports.ERC721CollateralizedSimpleInterestTermsContractContract = ERC721CollateralizedSimpleInterestTermsContractContract;
//# sourceMappingURL=e_r_c721_collateralized_simple_interest_terms_contract_wrapper.js.map
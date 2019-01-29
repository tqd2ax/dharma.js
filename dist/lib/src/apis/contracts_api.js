"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
// external
var singleLineString = require("single-line-string");
// utils
var constants_1 = require("../../utils/constants");
// wrappers
var wrappers_1 = require("../wrappers");
exports.ContractsError = {
    CANNOT_FIND_TOKEN_WITH_SYMBOL: function (symbol) {
        return singleLineString(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Could not find token associated with symbol ", "."], ["Could not find token associated with symbol ", "."])), symbol);
    },
    CANNOT_FIND_TOKEN_WITH_INDEX: function (index) {
        return singleLineString(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Could not find token associated with index ", "."], ["Could not find token associated with index ", "."])), index);
    },
    TERMS_CONTRACT_NOT_FOUND: function (termsContractAddress) {
        return singleLineString(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Could not find a terms contract tracked by\n                         dharma.js at address ", "."], ["Could not find a terms contract tracked by\n                         dharma.js at address ", "."])), termsContractAddress);
    },
};
var ContractsAPI = /** @class */ (function () {
    function ContractsAPI(web3, addressBook) {
        if (addressBook === void 0) { addressBook = {}; }
        this.web3 = web3;
        this.addressBook = addressBook;
        this.cache = {};
    }
    ContractsAPI.prototype.loadDharmaContractsAsync = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var debtKernel, debtRegistry, debtToken, repaymentRouter, tokenTransferProxy, collateralizer, erc721Collateralizer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadDebtKernelAsync(transactionOptions)];
                    case 1:
                        debtKernel = _a.sent();
                        return [4 /*yield*/, this.loadDebtRegistryAsync(transactionOptions)];
                    case 2:
                        debtRegistry = _a.sent();
                        return [4 /*yield*/, this.loadDebtTokenAsync(transactionOptions)];
                    case 3:
                        debtToken = _a.sent();
                        return [4 /*yield*/, this.loadRepaymentRouterAsync(transactionOptions)];
                    case 4:
                        repaymentRouter = _a.sent();
                        return [4 /*yield*/, this.loadTokenTransferProxyAsync(transactionOptions)];
                    case 5:
                        tokenTransferProxy = _a.sent();
                        return [4 /*yield*/, this.loadCollateralizerAsync(transactionOptions)];
                    case 6:
                        collateralizer = _a.sent();
                        return [4 /*yield*/, this.loadERC721CollateralizerAsync(transactionOptions)];
                    case 7:
                        erc721Collateralizer = _a.sent();
                        return [2 /*return*/, {
                                debtKernel: debtKernel,
                                debtRegistry: debtRegistry,
                                debtToken: debtToken,
                                repaymentRouter: repaymentRouter,
                                tokenTransferProxy: tokenTransferProxy,
                                collateralizer: collateralizer,
                                erc721Collateralizer: erc721Collateralizer,
                            }];
                }
            });
        });
    };
    ContractsAPI.prototype.loadDebtKernelAsync = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var debtKernel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (constants_1.DEBT_KERNEL_CONTRACT_CACHE_KEY in this.cache) {
                            return [2 /*return*/, this.cache[constants_1.DEBT_KERNEL_CONTRACT_CACHE_KEY]];
                        }
                        if (!this.addressBook.kernelAddress) return [3 /*break*/, 2];
                        return [4 /*yield*/, wrappers_1.DebtKernelContract.at(this.addressBook.kernelAddress, this.web3, transactionOptions)];
                    case 1:
                        debtKernel = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, wrappers_1.DebtKernelContract.deployed(this.web3, transactionOptions)];
                    case 3:
                        debtKernel = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.cache[constants_1.DEBT_KERNEL_CONTRACT_CACHE_KEY] = debtKernel;
                        return [2 /*return*/, debtKernel];
                }
            });
        });
    };
    ContractsAPI.prototype.loadERC721CollateralizerAsync = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var erc721Collateralizer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (constants_1.ERC721_COLLATERALIZER_CONTRACT_CACHE_KEY in this.cache) {
                            return [2 /*return*/, this.cache[constants_1.ERC721_COLLATERALIZER_CONTRACT_CACHE_KEY]];
                        }
                        if (!this.addressBook.erc721CollateralizerAddress) return [3 /*break*/, 2];
                        return [4 /*yield*/, wrappers_1.ERC721CollateralizerContract.at(this.addressBook.erc721CollateralizerAddress, this.web3, transactionOptions)];
                    case 1:
                        erc721Collateralizer = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, wrappers_1.ERC721CollateralizerContract.deployed(this.web3, transactionOptions)];
                    case 3:
                        erc721Collateralizer = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.cache[constants_1.ERC721_COLLATERALIZER_CONTRACT_CACHE_KEY] = erc721Collateralizer;
                        return [2 /*return*/, erc721Collateralizer];
                }
            });
        });
    };
    ContractsAPI.prototype.loadCollateralizerAsync = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var collateralizer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (constants_1.COLLATERALIZER_CONTRACT_CACHE_KEY in this.cache) {
                            return [2 /*return*/, this.cache[constants_1.COLLATERALIZER_CONTRACT_CACHE_KEY]];
                        }
                        if (!this.addressBook.collateralizerAddress) return [3 /*break*/, 2];
                        return [4 /*yield*/, wrappers_1.CollateralizerContract.at(this.addressBook.collateralizerAddress, this.web3, transactionOptions)];
                    case 1:
                        collateralizer = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, wrappers_1.CollateralizerContract.deployed(this.web3, transactionOptions)];
                    case 3:
                        collateralizer = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.cache[constants_1.COLLATERALIZER_CONTRACT_CACHE_KEY] = collateralizer;
                        return [2 /*return*/, collateralizer];
                }
            });
        });
    };
    ContractsAPI.prototype.loadDebtRegistryAsync = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var debtRegistry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (constants_1.DEBT_REGISTRY_CONTRACT_CACHE_KEY in this.cache) {
                            return [2 /*return*/, this.cache[constants_1.DEBT_REGISTRY_CONTRACT_CACHE_KEY]];
                        }
                        if (!this.addressBook.debtRegistryAddress) return [3 /*break*/, 2];
                        return [4 /*yield*/, wrappers_1.DebtRegistryContract.at(this.addressBook.debtRegistryAddress, this.web3, transactionOptions)];
                    case 1:
                        debtRegistry = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, wrappers_1.DebtRegistryContract.deployed(this.web3, transactionOptions)];
                    case 3:
                        debtRegistry = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.cache[constants_1.DEBT_REGISTRY_CONTRACT_CACHE_KEY] = debtRegistry;
                        return [2 /*return*/, debtRegistry];
                }
            });
        });
    };
    ContractsAPI.prototype.loadContractRegistryAsync = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var contractRegistry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (constants_1.CONTRACT_REGISTRY_CONTRACT_CACHE_KEY in this.cache) {
                            return [2 /*return*/, this.cache[constants_1.CONTRACT_REGISTRY_CONTRACT_CACHE_KEY]];
                        }
                        if (!this.addressBook.debtRegistryAddress) return [3 /*break*/, 2];
                        return [4 /*yield*/, wrappers_1.ContractRegistryContract.at(this.addressBook.debtRegistryAddress, this.web3, transactionOptions)];
                    case 1:
                        contractRegistry = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, wrappers_1.ContractRegistryContract.deployed(this.web3, transactionOptions)];
                    case 3:
                        contractRegistry = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.cache[constants_1.CONTRACT_REGISTRY_CONTRACT_CACHE_KEY] = contractRegistry;
                        return [2 /*return*/, contractRegistry];
                }
            });
        });
    };
    ContractsAPI.prototype.loadDebtTokenAsync = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var debtToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (constants_1.DEBT_TOKEN_CONTRACT_CACHE_KEY in this.cache) {
                            return [2 /*return*/, this.cache[constants_1.DEBT_TOKEN_CONTRACT_CACHE_KEY]];
                        }
                        if (!this.addressBook.kernelAddress) return [3 /*break*/, 2];
                        return [4 /*yield*/, wrappers_1.DebtTokenContract.at(this.addressBook.debtTokenAddress, this.web3, transactionOptions)];
                    case 1:
                        debtToken = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, wrappers_1.DebtTokenContract.deployed(this.web3, transactionOptions)];
                    case 3:
                        debtToken = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.cache[constants_1.DEBT_TOKEN_CONTRACT_CACHE_KEY] = debtToken;
                        return [2 /*return*/, debtToken];
                }
            });
        });
    };
    ContractsAPI.prototype.loadRepaymentRouterAsync = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var repaymentRouter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (constants_1.REPAYMENT_ROUTER_CONTRACT_CACHE_KEY in this.cache) {
                            return [2 /*return*/, this.cache[constants_1.REPAYMENT_ROUTER_CONTRACT_CACHE_KEY]];
                        }
                        if (!this.addressBook.repaymentRouterAddress) return [3 /*break*/, 2];
                        return [4 /*yield*/, wrappers_1.RepaymentRouterContract.at(this.addressBook.repaymentRouterAddress, this.web3, transactionOptions)];
                    case 1:
                        repaymentRouter = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, wrappers_1.RepaymentRouterContract.deployed(this.web3, transactionOptions)];
                    case 3:
                        repaymentRouter = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.cache[constants_1.REPAYMENT_ROUTER_CONTRACT_CACHE_KEY] = repaymentRouter;
                        return [2 /*return*/, repaymentRouter];
                }
            });
        });
    };
    ContractsAPI.prototype.loadRepaymentRouterAtAsync = function (address, transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var cacheKey, repaymentRouter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = this.getRepaymentRouterCacheKey(address);
                        if (cacheKey in this.cache) {
                            return [2 /*return*/, this.cache[cacheKey]];
                        }
                        return [4 /*yield*/, wrappers_1.RepaymentRouterContract.at(address, this.web3, transactionOptions)];
                    case 1:
                        repaymentRouter = _a.sent();
                        this.cache[cacheKey] = repaymentRouter;
                        return [2 /*return*/, repaymentRouter];
                }
            });
        });
    };
    ContractsAPI.prototype.loadTokenTransferProxyAsync = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var tokenTransferProxy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (constants_1.TOKEN_TRANSFER_PROXY_CONTRACT_CACHE_KEY in this.cache) {
                            return [2 /*return*/, this.cache[constants_1.TOKEN_TRANSFER_PROXY_CONTRACT_CACHE_KEY]];
                        }
                        if (!this.addressBook.tokenTransferProxyAddress) return [3 /*break*/, 2];
                        return [4 /*yield*/, wrappers_1.TokenTransferProxyContract.at(this.addressBook.tokenTransferProxyAddress, this.web3, transactionOptions)];
                    case 1:
                        tokenTransferProxy = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, wrappers_1.TokenTransferProxyContract.deployed(this.web3, transactionOptions)];
                    case 3:
                        tokenTransferProxy = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.cache[constants_1.TOKEN_TRANSFER_PROXY_CONTRACT_CACHE_KEY] = tokenTransferProxy;
                        return [2 /*return*/, tokenTransferProxy];
                }
            });
        });
    };
    /**
     * Loads the Mintable ERC721 Token Contract that is deployed for testing purposes.
     *
     * @returns {Promise<MintableERC721TokenContract>}
     */
    ContractsAPI.prototype.loadMintableERC721ContractAsync = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var cacheKey, tokenContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = "MintableERC721TokenContract";
                        if (!(cacheKey in this.cache)) return [3 /*break*/, 1];
                        return [2 /*return*/, this.cache[cacheKey]];
                    case 1: return [4 /*yield*/, wrappers_1.MintableERC721TokenContract.deployed(this.web3, transactionOptions)];
                    case 2:
                        tokenContract = _a.sent();
                        this.cache[cacheKey] = tokenContract;
                        return [2 /*return*/, tokenContract];
                }
            });
        });
    };
    ContractsAPI.prototype.loadERC721ContractAsync = function (contractAddress, transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var cacheKey, tokenContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = this.getERC721ContractCacheKey(contractAddress);
                        if (!(cacheKey in this.cache)) return [3 /*break*/, 1];
                        return [2 /*return*/, this.cache[cacheKey]];
                    case 1: return [4 /*yield*/, wrappers_1.ERC721TokenContract.at(contractAddress, this.web3, transactionOptions)];
                    case 2:
                        tokenContract = _a.sent();
                        this.cache[cacheKey] = tokenContract;
                        return [2 /*return*/, tokenContract];
                }
            });
        });
    };
    ContractsAPI.prototype.loadERC20TokenAsync = function (tokenAddress, transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var cacheKey, tokenContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = this.getERC20TokenCacheKey(tokenAddress);
                        if (!(cacheKey in this.cache)) return [3 /*break*/, 1];
                        return [2 /*return*/, this.cache[cacheKey]];
                    case 1: return [4 /*yield*/, wrappers_1.ERC20Contract.at(tokenAddress, this.web3, transactionOptions)];
                    case 2:
                        tokenContract = _a.sent();
                        this.cache[cacheKey] = tokenContract;
                        return [2 /*return*/, tokenContract];
                }
            });
        });
    };
    ContractsAPI.prototype.loadTermsContractAsync = function (termsContractAddress, transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var cacheKey, termsContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = this.getTermsContractCacheKey(termsContractAddress);
                        if (!(cacheKey in this.cache)) return [3 /*break*/, 1];
                        return [2 /*return*/, this.cache[cacheKey]];
                    case 1: return [4 /*yield*/, wrappers_1.TermsContract.at(termsContractAddress, this.web3, transactionOptions)];
                    case 2:
                        termsContract = _a.sent();
                        this.cache[cacheKey] = termsContract;
                        return [2 /*return*/, termsContract];
                }
            });
        });
    };
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
    ContractsAPI.prototype.getTermsContractType = function (contractAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, simpleInterestTermsContract, collateralizedSimpleInterestTermsContract, addressToContractType, termsContractType;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadSimpleInterestTermsContract()];
                    case 1:
                        simpleInterestTermsContract = _b.sent();
                        return [4 /*yield*/, this.loadCollateralizedSimpleInterestTermsContract()];
                    case 2:
                        collateralizedSimpleInterestTermsContract = _b.sent();
                        addressToContractType = (_a = {},
                            _a[collateralizedSimpleInterestTermsContract.address] = constants_1.TERMS_CONTRACT_TYPES.COLLATERALIZED_SIMPLE_INTEREST_LOAN,
                            _a[simpleInterestTermsContract.address] = constants_1.TERMS_CONTRACT_TYPES.SIMPLE_INTEREST_LOAN,
                            _a);
                        termsContractType = addressToContractType[contractAddress];
                        if (!termsContractType) {
                            throw new Error(exports.ContractsError.TERMS_CONTRACT_NOT_FOUND(contractAddress));
                        }
                        return [2 /*return*/, termsContractType];
                }
            });
        });
    };
    ContractsAPI.prototype.loadSimpleInterestTermsContract = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var simpleInterestTermsContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (constants_1.SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY in this.cache) {
                            return [2 /*return*/, this.cache[constants_1.SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY]];
                        }
                        if (!this.addressBook.simpleInterestTermsContractAddress) return [3 /*break*/, 2];
                        return [4 /*yield*/, wrappers_1.SimpleInterestTermsContractContract.at(this.addressBook.simpleInterestTermsContractAddress, this.web3, transactionOptions)];
                    case 1:
                        simpleInterestTermsContract = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, wrappers_1.SimpleInterestTermsContractContract.deployed(this.web3, transactionOptions)];
                    case 3:
                        simpleInterestTermsContract = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.cache[constants_1.SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY] = simpleInterestTermsContract;
                        return [2 /*return*/, simpleInterestTermsContract];
                }
            });
        });
    };
    ContractsAPI.prototype.loadCollateralizedSimpleInterestTermsContract = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var collateralizedSimpleInterestTermsContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (constants_1.COLLATERALIZED_SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY in this.cache) {
                            return [2 /*return*/, this.cache[constants_1.COLLATERALIZED_SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY]];
                        }
                        if (!this.addressBook.collateralizedSimpleInterestTermsContractAddress) return [3 /*break*/, 2];
                        return [4 /*yield*/, wrappers_1.CollateralizedSimpleInterestTermsContractContract.at(this.addressBook.collateralizedSimpleInterestTermsContractAddress, this.web3, transactionOptions)];
                    case 1:
                        collateralizedSimpleInterestTermsContract = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, wrappers_1.CollateralizedSimpleInterestTermsContractContract.deployed(this.web3, transactionOptions)];
                    case 3:
                        collateralizedSimpleInterestTermsContract = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.cache[constants_1.COLLATERALIZED_SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY] = collateralizedSimpleInterestTermsContract;
                        return [2 /*return*/, collateralizedSimpleInterestTermsContract];
                }
            });
        });
    };
    ContractsAPI.prototype.loadERC721CollateralizedSimpleInterestTermsContract = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var termsContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (constants_1.ERC721_COLLATERALIZED_SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY in this.cache) {
                            return [2 /*return*/, this.cache[constants_1.ERC721_COLLATERALIZED_SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY]];
                        }
                        if (!this.addressBook.erc721CollateralizedSimpleInterestTermsContract) return [3 /*break*/, 2];
                        return [4 /*yield*/, wrappers_1.ERC721CollateralizedSimpleInterestTermsContractContract.at(this.addressBook.erc721CollateralizedSimpleInterestTermsContract, this.web3, transactionOptions)];
                    case 1:
                        termsContract = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, wrappers_1.ERC721CollateralizedSimpleInterestTermsContractContract.deployed(this.web3, transactionOptions)];
                    case 3:
                        termsContract = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.cache[constants_1.ERC721_COLLATERALIZED_SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY] = termsContract;
                        return [2 /*return*/, termsContract];
                }
            });
        });
    };
    ContractsAPI.prototype.loadERC721TokenRegistryContract = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var erc721TokenRegistryContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (constants_1.ERC721_TOKEN_REGISTRY_CONTRACT_CACHE_KEY in this.cache) {
                            return [2 /*return*/, this.cache[constants_1.ERC721_TOKEN_REGISTRY_CONTRACT_CACHE_KEY]];
                        }
                        if (!this.addressBook.erc721TokenRegistryContract) return [3 /*break*/, 2];
                        return [4 /*yield*/, wrappers_1.ERC721TokenRegistryContract.at(this.addressBook.erc721TokenRegistryContract, this.web3, transactionOptions)];
                    case 1:
                        erc721TokenRegistryContract = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, wrappers_1.ERC721TokenRegistryContract.deployed(this.web3, transactionOptions)];
                    case 3:
                        erc721TokenRegistryContract = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.cache[constants_1.ERC721_TOKEN_REGISTRY_CONTRACT_CACHE_KEY] = erc721TokenRegistryContract;
                        return [2 /*return*/, erc721TokenRegistryContract];
                }
            });
        });
    };
    ContractsAPI.prototype.loadCreditorProxyContract = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var creditorProxyContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (constants_1.CREDITOR_PROXY_CONTRACT_CACHE_KEY in this.cache) {
                            return [2 /*return*/, this.cache[constants_1.CREDITOR_PROXY_CONTRACT_CACHE_KEY]];
                        }
                        return [4 /*yield*/, wrappers_1.CreditorProxyContract.deployed(this.web3, transactionOptions)];
                    case 1:
                        creditorProxyContract = _a.sent();
                        this.cache[constants_1.CREDITOR_PROXY_CONTRACT_CACHE_KEY] = creditorProxyContract;
                        return [2 /*return*/, creditorProxyContract];
                }
            });
        });
    };
    ContractsAPI.prototype.loadTokenRegistry = function (transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var tokenRegistryContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (constants_1.TOKEN_REGISTRY_CONTRACT_CACHE_KEY in this.cache) {
                            return [2 /*return*/, this.cache[constants_1.TOKEN_REGISTRY_CONTRACT_CACHE_KEY]];
                        }
                        if (!this.addressBook.tokenRegistryAddress) return [3 /*break*/, 2];
                        return [4 /*yield*/, wrappers_1.TokenRegistryContract.at(this.addressBook.tokenRegistryAddress, this.web3, transactionOptions)];
                    case 1:
                        tokenRegistryContract = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, wrappers_1.TokenRegistryContract.deployed(this.web3, transactionOptions)];
                    case 3:
                        tokenRegistryContract = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.cache[constants_1.TOKEN_REGISTRY_CONTRACT_CACHE_KEY] = tokenRegistryContract;
                        return [2 /*return*/, tokenRegistryContract];
                }
            });
        });
    };
    ContractsAPI.prototype.getTokenAddressBySymbolAsync = function (symbol) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenRegistryContract, tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadTokenRegistry({})];
                    case 1:
                        tokenRegistryContract = _a.sent();
                        return [4 /*yield*/, tokenRegistryContract.getTokenAddressBySymbol.callAsync(symbol)];
                    case 2:
                        tokenAddress = _a.sent();
                        if (tokenAddress === constants_1.NULL_ADDRESS) {
                            throw new Error(exports.ContractsError.CANNOT_FIND_TOKEN_WITH_SYMBOL(symbol));
                        }
                        return [2 /*return*/, tokenAddress];
                }
            });
        });
    };
    /**
     * Given the symbol for an ERC721 contract, returns the index of that contract in the
     * ERC721 token registry.
     *
     * @param {string} symbol
     * @returns {Promise<string>}
     */
    ContractsAPI.prototype.getERC721IndexBySymbolAsync = function (symbol) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenRegistryContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadERC721TokenRegistryContract()];
                    case 1:
                        tokenRegistryContract = _a.sent();
                        // We first confirm token exists with the given symbol. This call
                        // will throw if the token is not tracked by the registry.
                        return [4 /*yield*/, this.getERC721AddressBySymbolAsync(symbol)];
                    case 2:
                        // We first confirm token exists with the given symbol. This call
                        // will throw if the token is not tracked by the registry.
                        _a.sent();
                        return [2 /*return*/, tokenRegistryContract.getTokenIndexBySymbol.callAsync(symbol)];
                }
            });
        });
    };
    ContractsAPI.prototype.getERC721SymbolByIndexAsync = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenRegistryContract, tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadERC721TokenRegistryContract({})];
                    case 1:
                        tokenRegistryContract = _a.sent();
                        return [4 /*yield*/, tokenRegistryContract.getTokenSymbolByIndex.callAsync(index)];
                    case 2:
                        tokenAddress = _a.sent();
                        if (tokenAddress === constants_1.NULL_ADDRESS) {
                            throw new Error(exports.ContractsError.CANNOT_FIND_TOKEN_WITH_INDEX(index.toNumber()));
                        }
                        return [2 /*return*/, tokenAddress];
                }
            });
        });
    };
    ContractsAPI.prototype.getERC721AddressBySymbolAsync = function (symbol) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenRegistryContract, tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadERC721TokenRegistryContract({})];
                    case 1:
                        tokenRegistryContract = _a.sent();
                        return [4 /*yield*/, tokenRegistryContract.getTokenAddressBySymbol.callAsync(symbol)];
                    case 2:
                        tokenAddress = _a.sent();
                        if (tokenAddress === constants_1.NULL_ADDRESS) {
                            throw new Error(exports.ContractsError.CANNOT_FIND_TOKEN_WITH_SYMBOL(symbol));
                        }
                        return [2 /*return*/, tokenAddress];
                }
            });
        });
    };
    /**
     * Given the index of a token in the Token Registry, returns the address of that
     * token's contract.
     *
     * @param {number} index
     * @returns {Promise<string>}
     */
    ContractsAPI.prototype.getTokenAddressByIndexAsync = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenRegistryContract, tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadTokenRegistry({})];
                    case 1:
                        tokenRegistryContract = _a.sent();
                        return [4 /*yield*/, tokenRegistryContract.getTokenAddressByIndex.callAsync(index)];
                    case 2:
                        tokenAddress = _a.sent();
                        if (tokenAddress === constants_1.NULL_ADDRESS) {
                            throw new Error(exports.ContractsError.CANNOT_FIND_TOKEN_WITH_INDEX(index.toNumber()));
                        }
                        return [2 /*return*/, tokenAddress];
                }
            });
        });
    };
    ContractsAPI.prototype.getTokenIndexBySymbolAsync = function (symbol) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenRegistryContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadTokenRegistry()];
                    case 1:
                        tokenRegistryContract = _a.sent();
                        // We first confirm token exists with the given symbol.  This call
                        // will throw if the token is not tracked by the registry.
                        return [4 /*yield*/, this.getTokenAddressBySymbolAsync(symbol)];
                    case 2:
                        // We first confirm token exists with the given symbol.  This call
                        // will throw if the token is not tracked by the registry.
                        _a.sent();
                        return [2 /*return*/, tokenRegistryContract.getTokenIndexBySymbol.callAsync(symbol)];
                }
            });
        });
    };
    // TODO(kayvon): this function is duplicated in the token API and belongs there.
    ContractsAPI.prototype.getTokenSymbolByIndexAsync = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenRegistryContract, symbol;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadTokenRegistry()];
                    case 1:
                        tokenRegistryContract = _a.sent();
                        return [4 /*yield*/, tokenRegistryContract.getTokenSymbolByIndex.callAsync(index)];
                    case 2:
                        symbol = _a.sent();
                        if (!symbol || symbol === "") {
                            throw new Error(exports.ContractsError.CANNOT_FIND_TOKEN_WITH_INDEX(index.toNumber()));
                        }
                        return [2 /*return*/, symbol];
                }
            });
        });
    };
    ContractsAPI.prototype.loadTokenBySymbolAsync = function (symbol, transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTokenAddressBySymbolAsync(symbol)];
                    case 1:
                        tokenAddress = _a.sent();
                        return [2 /*return*/, this.loadERC20TokenAsync(tokenAddress, transactionOptions)];
                }
            });
        });
    };
    ContractsAPI.prototype.loadERC721BySymbolAsync = function (symbol, transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var erc721Address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getERC721AddressBySymbolAsync(symbol)];
                    case 1:
                        erc721Address = _a.sent();
                        return [2 /*return*/, this.loadERC721ContractAsync(erc721Address, transactionOptions)];
                }
            });
        });
    };
    /**
     * Given the index of a token in the token registry, loads an instance of that
     * token and returns it.
     *
     * @param {number} index
     * @param {object} transactionOptions
     * @returns {Promise<ERC20Contract>}
     */
    ContractsAPI.prototype.loadTokenByIndexAsync = function (index, transactionOptions) {
        if (transactionOptions === void 0) { transactionOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTokenAddressByIndexAsync(index)];
                    case 1:
                        tokenAddress = _a.sent();
                        return [2 /*return*/, this.loadERC20TokenAsync(tokenAddress, transactionOptions)];
                }
            });
        });
    };
    ContractsAPI.prototype.doesTokenCorrespondToSymbol = function (tokenAddress, symbol) {
        return __awaiter(this, void 0, void 0, function () {
            var addressMappedToSymbol;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTokenAddressBySymbolAsync(symbol)];
                    case 1:
                        addressMappedToSymbol = _a.sent();
                        return [2 /*return*/, tokenAddress === addressMappedToSymbol];
                }
            });
        });
    };
    ContractsAPI.prototype.getERC20TokenCacheKey = function (tokenAddress) {
        return "ERC20_" + tokenAddress;
    };
    ContractsAPI.prototype.getERC721ContractCacheKey = function (contractAddress) {
        return "ERC721_" + contractAddress;
    };
    ContractsAPI.prototype.getTermsContractCacheKey = function (termsContractAddress) {
        return "TermsContract_" + termsContractAddress;
    };
    ContractsAPI.prototype.getRepaymentRouterCacheKey = function (tokenAddress) {
        return "RepaymentRouter_" + tokenAddress;
    };
    return ContractsAPI;
}());
exports.ContractsAPI = ContractsAPI;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=contracts_api.js.map
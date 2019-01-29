"use strict";
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
var bignumber_1 = require("../../../utils/bignumber");
// Utils
var invariants_1 = require("../../invariants");
var terms_contract_parameters_1 = require("../terms_contract_parameters");
// Constants
var loan_adapter_1 = require("./loan_adapter");
var MAX_TOKEN_REFERENCE = 999999999999999;
var ERC721CollateralizedLoanTerms = /** @class */ (function () {
    function ERC721CollateralizedLoanTerms(web3, contractsAPI) {
        this.contractsAPI = contractsAPI;
        this.assert = new invariants_1.Assertions(web3, contractsAPI);
    }
    ERC721CollateralizedLoanTerms.prototype.packParameters = function (params) {
        this.assertValidParams(params);
        var erc721ContractIndex = params.erc721ContractIndex, tokenReference = params.tokenReference, isEnumerable = params.isEnumerable;
        var erc721ContractIndexShifted = terms_contract_parameters_1.TermsContractParameters.bitShiftLeft(erc721ContractIndex, 60);
        var tokenReferenceShifted = terms_contract_parameters_1.TermsContractParameters.bitShiftLeft(tokenReference, 4);
        var isEnumerableShifted = terms_contract_parameters_1.TermsContractParameters.bitShiftLeft(isEnumerable, 0);
        var baseTenParameters = erc721ContractIndexShifted
            .plus(tokenReferenceShifted)
            .plus(isEnumerableShifted);
        return "0x" + baseTenParameters.toString(16).padStart(64, "0");
    };
    ERC721CollateralizedLoanTerms.prototype.unpackParameters = function (packedParams) {
        this.assert.schema.bytes32("packedParams", packedParams);
        var erc721ContractIndexHex = "0x" + packedParams.substr(39, 12);
        var tokenReferenceHex = "0x" + packedParams.substr(51, 14);
        var isEnumerableHex = "0x" + packedParams.substr(65, 1);
        return {
            erc721ContractIndex: new bignumber_1.BigNumber(erc721ContractIndexHex),
            tokenReference: new bignumber_1.BigNumber(tokenReferenceHex),
            isEnumerable: new bignumber_1.BigNumber(isEnumerableHex),
        };
    };
    ERC721CollateralizedLoanTerms.prototype.assertValidParams = function (params) {
        var erc721ContractIndex = params.erc721ContractIndex, tokenReference = params.tokenReference, isEnumerable = params.isEnumerable;
        this.assertERC721ContractIndexWithinBounds(erc721ContractIndex);
        this.assertValidIsEnumerable(isEnumerable);
        this.assertValidTokenReference(tokenReference);
    };
    ERC721CollateralizedLoanTerms.prototype.assertERC721ContractIndexWithinBounds = function (collateralTokenIndex) {
        // Collateral token index cannot be a decimal value.
        if (terms_contract_parameters_1.TermsContractParameters.isDecimalValue(collateralTokenIndex)) {
            throw new Error(loan_adapter_1.ERC721CollateralizerAdapterErrors.INVALID_DECIMAL_VALUE());
        }
        if (collateralTokenIndex.lt(0)) {
            throw new Error(loan_adapter_1.ERC721CollateralizerAdapterErrors.INVALID_CONTRACT_INDEX(collateralTokenIndex));
        }
    };
    // Looks up the given token contract using the contract index, and asserts that a token exists
    // with the given reference id for that contract.
    ERC721CollateralizedLoanTerms.prototype.assertTokenExists = function (erc721ContractIndex, tokenReference) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenRegistry, expectedTokenSymbol, tokenContract, tokenExists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contractsAPI.loadERC721TokenRegistryContract()];
                    case 1:
                        tokenRegistry = _a.sent();
                        return [4 /*yield*/, tokenRegistry.getTokenSymbolByIndex.callAsync(erc721ContractIndex)];
                    case 2:
                        expectedTokenSymbol = _a.sent();
                        return [4 /*yield*/, this.contractsAPI.loadERC721BySymbolAsync(expectedTokenSymbol)];
                    case 3:
                        tokenContract = _a.sent();
                        return [4 /*yield*/, tokenContract.exists.callAsync(tokenReference)];
                    case 4:
                        tokenExists = _a.sent();
                        if (!tokenExists) {
                            throw new Error(loan_adapter_1.ERC721CollateralizerAdapterErrors.TOKEN_REFERENCE_NOT_FOUND(tokenReference));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ERC721CollateralizedLoanTerms.prototype.assertValidIsEnumerable = function (isEnumerable) {
        var flagAsNumber = isEnumerable.toNumber();
        // There are only two possible values for a bit flag!
        if (flagAsNumber !== 0 && flagAsNumber !== 1) {
            throw new Error(loan_adapter_1.ERC721CollateralizerAdapterErrors.INVALID_IS_ENUMERABLE_FLAG());
        }
    };
    ERC721CollateralizedLoanTerms.prototype.assertValidTokenReference = function (tokenReference) {
        // Token reference cannot be a decimal value.
        if (terms_contract_parameters_1.TermsContractParameters.isDecimalValue(tokenReference)) {
            throw new Error(loan_adapter_1.ERC721CollateralizerAdapterErrors.INVALID_DECIMAL_VALUE());
        }
        // Token reference can't be negative.
        if (tokenReference.lt(0)) {
            throw new Error(loan_adapter_1.ERC721CollateralizerAdapterErrors.INVALID_TOKEN_REFERENCE());
        }
        // Token reference has a maximum value that cannot be exceeded due to how we pack params.
        if (tokenReference.gt(MAX_TOKEN_REFERENCE)) {
            throw new Error(loan_adapter_1.ERC721CollateralizerAdapterErrors.TOKEN_REFERENCE_EXCEEDS_MAXIMUM());
        }
    };
    return ERC721CollateralizedLoanTerms;
}());
exports.ERC721CollateralizedLoanTerms = ERC721CollateralizedLoanTerms;
//# sourceMappingURL=loan_terms.js.map
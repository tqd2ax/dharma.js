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
var debt_order_1 = require("../../loan/debt_order");
var types_1 = require("../../types");
var web3_utils_1 = require("../../../utils/web3_utils");
var constants_1 = require("../../../utils/constants");
var signature_utils_1 = require("../../../utils/signature_utils");
var LoanOffer = /** @class */ (function (_super) {
    __extends(LoanOffer, _super);
    function LoanOffer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoanOffer.createAndSignAsCreditor = function (dharma, params, creditor) {
        return __awaiter(this, void 0, void 0, function () {
            var offer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, LoanOffer.create(dharma, params)];
                    case 1:
                        offer = _a.sent();
                        return [4 /*yield*/, offer.signAsCreditor(creditor)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, offer];
                }
            });
        });
    };
    /**
     * Eventually signs the loan offer as the creditor.
     *
     * @throws Throws if the loan offer is already signed by a creditor.
     *
     * @example
     * loanOffer.signAsCreditor();
     * => Promise<void>
     *
     * @return {Promise<void>}
     */
    LoanOffer.prototype.signAsCreditor = function (creditorAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, loanOfferHash, isMetaMask, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.isSignedByCreditor()) {
                            throw new Error(debt_order_1.DEBT_ORDER_ERRORS.ALREADY_SIGNED_BY_CREDITOR);
                        }
                        _a = this.data;
                        return [4 /*yield*/, types_1.EthereumAddress.validAddressOrCurrentUser(this.dharma, creditorAddress)];
                    case 1:
                        _a.creditor = _c.sent();
                        loanOfferHash = this.getLoanOfferHash();
                        isMetaMask = !!this.dharma.web3.currentProvider.isMetaMask;
                        _b = this.data;
                        return [4 /*yield*/, this.dharma.sign.signPayloadWithAddress(loanOfferHash, this.data.creditor, isMetaMask)];
                    case 2:
                        _b.creditorSignature = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns whether the loan request has been signed by a creditor.
     *
     * @example
     * loanRequest.isSignedByCreditor();
     * => true
     *
     * @return {boolean}
     */
    LoanOffer.prototype.isSignedByCreditor = function () {
        if (this.data.creditorSignature === constants_1.NULL_ECDSA_SIGNATURE ||
            !signature_utils_1.SignatureUtils.isValidSignature(this.getLoanOfferHash(), this.data.creditorSignature, this.data.creditor)) {
            return false;
        }
        return true;
    };
    /**
     * Eventually accepts the loan offer as debtor, transferring the principal to the debtor and
     * the collateral to the creditor.
     *
     * @example
     * loanOffer.acceptAsDebtor();
     * => Promise<string>
     *
     * @returns {Promise<string>} the hash of the Ethereum transaction to fill the loan request
     */
    LoanOffer.prototype.acceptAsDebtor = function (debtorAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.data;
                        return [4 /*yield*/, types_1.EthereumAddress.validAddressOrCurrentUser(this.dharma, debtorAddress)];
                    case 1:
                        _a.debtor = _b.sent();
                        return [4 /*yield*/, this.signAsDebtor(this.data.debtor)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, this.dharma.order.acceptOffer(this.data, { from: this.data.debtor })];
                }
            });
        });
    };
    /**
     * Eventually accepts the loan offer as a proxy. Requires that the loan offer be signed by both the
     * creditor and debtor.
     *
     * @throws Throws if the loan offer is not signed by both the creditor and debtor.
     *
     * @example
     * loanOffer.acceptAsProxy();
     * => Promise<string>
     *
     * @return {Promise<string>}
     */
    LoanOffer.prototype.acceptAsProxy = function (proxyAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var proxySender;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.isSignedByCreditor() && this.isSignedByDebtor())) return [3 /*break*/, 2];
                        return [4 /*yield*/, types_1.EthereumAddress.validAddressOrCurrentUser(this.dharma, proxyAddress)];
                    case 1:
                        proxySender = _a.sent();
                        return [2 /*return*/, this.dharma.order.acceptOffer(this.data, { from: proxySender })];
                    case 2: throw new Error(debt_order_1.DEBT_ORDER_ERRORS.PROXY_FILL_DISALLOWED("loan offer"));
                }
            });
        });
    };
    /**
     * Eventually returns true if the current loan offer has been accepted on the blockchain.
     *
     * @example
     * await loanOffer.isAccepted();
     * => true
     *
     * @returns {Promise<boolean>}
     */
    LoanOffer.prototype.isAccepted = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dharma.order.checkOrderFilledAsync(this.data)];
            });
        });
    };
    LoanOffer.prototype.getLoanOfferHash = function () {
        return web3_utils_1.Web3Utils.soliditySHA3(this.data.creditor, this.data.kernelVersion, this.data.issuanceVersion, this.data.termsContract, this.data.principalToken, this.data.salt, this.data.principalAmount, this.data.creditorFee, this.data.expirationTimestampInSec, this.data.termsContractParameters);
    };
    return LoanOffer;
}(debt_order_1.DebtOrder));
exports.LoanOffer = LoanOffer;
//# sourceMappingURL=loan_offer.js.map
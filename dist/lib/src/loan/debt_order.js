"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
var singleLineString = require("single-line-string");
var bignumber_1 = require("../../utils/bignumber");
var constants_1 = require("../../utils/constants");
var wrappers_1 = require("../wrappers");
var signature_utils_1 = require("../../utils/signature_utils");
var types_1 = require("../types");
exports.DEBT_ORDER_ERRORS = {
    ALREADY_SIGNED_BY_DEBTOR: "A debtor has already signed this debt order.",
    ALREADY_SIGNED_BY_CREDITOR: "A creditor has already signed this debt order.",
    ALREADY_SIGNED_BY_UNDERWRITER: "An underwriter has already signed this debt order.",
    PROXY_FILL_DISALLOWED: function (className) {
        return singleLineString(templateObject_1 || (templateObject_1 = __makeTemplateObject(["A ", " must be signed by both the creditor and\n                         debtor before it can be filled by proxy."], ["A ", " must be signed by both the creditor and\n                         debtor before it can be filled by proxy."])), className);
    },
};
var DebtOrder = /** @class */ (function () {
    function DebtOrder(dharma, params, data) {
        this.dharma = dharma;
        this.params = params;
        this.data = data;
    }
    DebtOrder.generateSalt = function () {
        return bignumber_1.BigNumber.random(constants_1.SALT_DECIMALS).times(new bignumber_1.BigNumber(10).pow(constants_1.SALT_DECIMALS));
    };
    DebtOrder.create = function (dharma, params) {
        return __awaiter(this, void 0, void 0, function () {
            var principalAmount, principalToken, collateralAmount, collateralToken, relayerAddress, relayerFeeAmount, interestRate, termDuration, termUnit, expiresInDuration, expiresInUnit, creditorFeeAmount, underwriterFeeAmount, underwriterAddress, underwriterRiskRating, principal, collateral, interestRateTyped, termLength, expiresIn, currentBlocktime, _a, expirationTimestampInSec, loanRequestConstructorParams, loanOrder, data, debtKernel, repaymentRouter, salt, relayer, relayerFee, creditorFee, undewriter, underwriterFee, riskRating;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        principalAmount = params.principalAmount, principalToken = params.principalToken, collateralAmount = params.collateralAmount, collateralToken = params.collateralToken, relayerAddress = params.relayerAddress, relayerFeeAmount = params.relayerFeeAmount, interestRate = params.interestRate, termDuration = params.termDuration, termUnit = params.termUnit, expiresInDuration = params.expiresInDuration, expiresInUnit = params.expiresInUnit, creditorFeeAmount = params.creditorFeeAmount, underwriterFeeAmount = params.underwriterFeeAmount, underwriterAddress = params.underwriterAddress, underwriterRiskRating = params.underwriterRiskRating;
                        principal = new types_1.TokenAmount(principalAmount, principalToken);
                        collateral = new types_1.TokenAmount(collateralAmount, collateralToken);
                        interestRateTyped = new types_1.InterestRate(interestRate);
                        termLength = new types_1.TimeInterval(termDuration, termUnit);
                        expiresIn = new types_1.TimeInterval(expiresInDuration, expiresInUnit);
                        _a = bignumber_1.BigNumber.bind;
                        return [4 /*yield*/, dharma.blockchain.getCurrentBlockTime()];
                    case 1:
                        currentBlocktime = new (_a.apply(bignumber_1.BigNumber, [void 0, _b.sent()]))();
                        expirationTimestampInSec = expiresIn.fromTimestamp(currentBlocktime);
                        loanRequestConstructorParams = {
                            principal: principal,
                            collateral: collateral,
                            interestRate: interestRateTyped,
                            termLength: termLength,
                            expiresAt: expirationTimestampInSec.toNumber(),
                        };
                        loanOrder = {
                            principalAmount: principal.rawAmount,
                            principalTokenSymbol: principal.tokenSymbol,
                            interestRate: interestRateTyped.raw,
                            amortizationUnit: termLength.getAmortizationUnit(),
                            termLength: new bignumber_1.BigNumber(termLength.amount),
                            collateralTokenSymbol: collateral.tokenSymbol,
                            collateralAmount: collateral.rawAmount,
                            gracePeriodInDays: new bignumber_1.BigNumber(0),
                            expirationTimestampInSec: expirationTimestampInSec,
                        };
                        return [4 /*yield*/, dharma.adapters.collateralizedSimpleInterestLoan.toDebtOrder(loanOrder)];
                    case 2:
                        data = _b.sent();
                        return [4 /*yield*/, dharma.contracts.loadDebtKernelAsync()];
                    case 3:
                        debtKernel = _b.sent();
                        return [4 /*yield*/, dharma.contracts.loadRepaymentRouterAsync()];
                    case 4:
                        repaymentRouter = _b.sent();
                        salt = this.generateSalt();
                        if (relayerAddress && relayerAddress !== constants_1.NULL_ADDRESS) {
                            relayer = new types_1.EthereumAddress(relayerAddress);
                            relayerFee = new types_1.TokenAmount(relayerFeeAmount, principalToken);
                            loanRequestConstructorParams.relayer = relayer;
                            loanRequestConstructorParams.relayerFee = relayerFee;
                            data.relayer = relayer.toString();
                            data.relayerFee = relayerFee.rawAmount;
                        }
                        if (creditorFeeAmount && creditorFeeAmount > 0) {
                            creditorFee = new types_1.TokenAmount(creditorFeeAmount, principalToken);
                            loanRequestConstructorParams.creditorFee = creditorFee;
                            data.creditorFee = creditorFee.rawAmount;
                        }
                        if (underwriterAddress && underwriterAddress !== constants_1.NULL_ADDRESS) {
                            undewriter = new types_1.EthereumAddress(underwriterAddress);
                            underwriterFee = new types_1.TokenAmount(underwriterFeeAmount, principalToken);
                            riskRating = new types_1.UnderwriterRiskRating(underwriterRiskRating);
                            loanRequestConstructorParams.underwriter = undewriter;
                            loanRequestConstructorParams.underwriterFee = underwriterFee;
                            loanRequestConstructorParams.underwriterRiskRating = riskRating;
                            data.underwriter = undewriter.toString();
                            data.underwriterFee = underwriterFee.rawAmount;
                            data.underwriterRiskRating = riskRating.scaled;
                        }
                        data.kernelVersion = debtKernel.address;
                        data.issuanceVersion = repaymentRouter.address;
                        data.salt = salt;
                        return [2 /*return*/, new this(dharma, loanRequestConstructorParams, data)];
                }
            });
        });
    };
    DebtOrder.load = function (dharma, data) {
        return __awaiter(this, void 0, void 0, function () {
            var debtOrderData, loanOrder, principal, collateral, interestRate, termLength, loanRequestParams, relayer, relayerFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debtOrderData = __assign({}, data, { principalAmount: new bignumber_1.BigNumber(data.principalAmount), debtorFee: new bignumber_1.BigNumber(data.debtorFee), creditorFee: new bignumber_1.BigNumber(data.creditorFee), relayerFee: new bignumber_1.BigNumber(data.relayerFee), underwriterFee: new bignumber_1.BigNumber(data.underwriterFee), underwriterRiskRating: new bignumber_1.BigNumber(data.underwriterRiskRating), expirationTimestampInSec: new bignumber_1.BigNumber(data.expirationTimestampInSec), salt: new bignumber_1.BigNumber(data.salt) });
                        return [4 /*yield*/, dharma.adapters.collateralizedSimpleInterestLoan.fromDebtOrder(debtOrderData)];
                    case 1:
                        loanOrder = _a.sent();
                        principal = types_1.TokenAmount.fromRaw(loanOrder.principalAmount, loanOrder.principalTokenSymbol);
                        collateral = types_1.TokenAmount.fromRaw(loanOrder.collateralAmount, loanOrder.collateralTokenSymbol);
                        interestRate = types_1.InterestRate.fromRaw(loanOrder.interestRate);
                        termLength = new types_1.TimeInterval(loanOrder.termLength.toNumber(), loanOrder.amortizationUnit);
                        loanRequestParams = {
                            principal: principal,
                            collateral: collateral,
                            termLength: termLength,
                            interestRate: interestRate,
                            expiresAt: loanOrder.expirationTimestampInSec.toNumber(),
                        };
                        if (debtOrderData.relayer && debtOrderData.relayer !== constants_1.NULL_ADDRESS) {
                            relayer = new types_1.EthereumAddress(debtOrderData.relayer);
                            relayerFee = types_1.TokenAmount.fromRaw(debtOrderData.relayerFee, principal.tokenSymbol);
                            loanRequestParams.relayer = relayer;
                            loanRequestParams.relayerFee = relayerFee;
                        }
                        if (debtOrderData.underwriter && debtOrderData.underwriter !== constants_1.NULL_ADDRESS) {
                            loanRequestParams.underwriter = new types_1.EthereumAddress(debtOrderData.underwriter);
                            loanRequestParams.underwriterFee = types_1.TokenAmount.fromRaw(debtOrderData.underwriterFee, principal.tokenSymbol);
                            loanRequestParams.underwriterRiskRating = new types_1.UnderwriterRiskRating(debtOrderData.underwriterRiskRating);
                        }
                        if (debtOrderData.creditorFee && debtOrderData.creditorFee.greaterThan(0)) {
                            loanRequestParams.creditorFee = types_1.TokenAmount.fromRaw(debtOrderData.creditorFee, principal.tokenSymbol);
                        }
                        return [2 /*return*/, new this(dharma, loanRequestParams, debtOrderData)];
                }
            });
        });
    };
    /**
     * Returns the terms of the loan request.
     *
     * @example
     * const terms = loanRequest.getTerms();
     *
     * @returns {DebtOrderTerms}
     */
    DebtOrder.prototype.getTerms = function () {
        var _a = this.params, principal = _a.principal, collateral = _a.collateral, interestRate = _a.interestRate, termLength = _a.termLength, expiresAt = _a.expiresAt;
        return {
            principalAmount: principal.decimalAmount,
            principalTokenSymbol: principal.tokenSymbol,
            collateralAmount: collateral.decimalAmount,
            collateralTokenSymbol: collateral.tokenSymbol,
            interestRate: interestRate.percent,
            termDuration: termLength.amount,
            termUnit: termLength.getAmortizationUnit(),
            expiresAt: expiresAt,
        };
    };
    /**
     * Eventually returns true if the current loan request will be expired for the next block.
     *
     * @example
     * await loanRequest.isExpired();
     * => true
     *
     * @returns {Promise<boolean>}
     */
    DebtOrder.prototype.isExpired = function () {
        return __awaiter(this, void 0, void 0, function () {
            var expirationTimestamp, latestBlockTime, approximateNextBlockTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expirationTimestamp = this.data.expirationTimestampInSec;
                        return [4 /*yield*/, this.dharma.blockchain.getCurrentBlockTime()];
                    case 1:
                        latestBlockTime = _a.sent();
                        approximateNextBlockTime = latestBlockTime + constants_1.BLOCK_TIME_ESTIMATE_SECONDS;
                        return [2 /*return*/, expirationTimestamp.lt(approximateNextBlockTime)];
                }
            });
        });
    };
    /**
     * Returns whether the loan request has been signed by a debtor.
     *
     * @example
     * loanRequest.isSignedByDebtor();
     * => true
     *
     * @return {boolean}
     */
    DebtOrder.prototype.isSignedByDebtor = function () {
        var debtOrderDataWrapper = new wrappers_1.DebtOrderDataWrapper(this.data);
        if (this.data.debtorSignature === constants_1.NULL_ECDSA_SIGNATURE ||
            !signature_utils_1.SignatureUtils.isValidSignature(debtOrderDataWrapper.getDebtorCommitmentHash(), this.data.debtorSignature, this.data.debtor)) {
            return false;
        }
        return true;
    };
    /**
     * Eventually signs the loan request as the debtor.
     *
     * @throws Throws if the loan request is already signed by a debtor.
     *
     * @example
     * loanRequest.signAsDebtor();
     * => Promise<void>
     *
     * @return {void}
     */
    DebtOrder.prototype.signAsDebtor = function (debtorAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, isMetaMask, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.isSignedByDebtor()) {
                            throw Error(exports.DEBT_ORDER_ERRORS.ALREADY_SIGNED_BY_DEBTOR);
                        }
                        _a = this.data;
                        return [4 /*yield*/, types_1.EthereumAddress.validAddressOrCurrentUser(this.dharma, debtorAddress)];
                    case 1:
                        _a.debtor = _c.sent();
                        isMetaMask = !!this.dharma.web3.currentProvider.isMetaMask;
                        _b = this.data;
                        return [4 /*yield*/, this.dharma.sign.asDebtor(this.data, isMetaMask)];
                    case 2:
                        _b.debtorSignature = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Eventually returns true if the loan request has been cancelled.
     *
     * @example
     * await loanRequest.isCancelled();
     * => true
     *
     * @returns {Promise<boolean>}
     */
    DebtOrder.prototype.isCancelled = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dharma.order.isCancelled(this.data)];
            });
        });
    };
    /**
     * Eventually attempts to cancel the loan request.
     *
     * Note that a loan request can only be canceled by the debtor, and transaction will only
     * succeed if the request has yet to be filled and has yet to expire.
     *
     * @example
     * await loanRequest.cancel();
     * => "0x000..."
     *
     * @returns {Promise<string>} the hash of the Ethereum transaction to cancel the loan request
     */
    DebtOrder.prototype.cancel = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dharma.order.cancelOrderAsync(this.data, {
                        from: this.data.debtor,
                    })];
            });
        });
    };
    /**
     * Returns the loan request's unique identifier.
     *
     * @example
     * const id = loanRequest.getAgreementId();
     *
     * @return {string}
     */
    DebtOrder.prototype.getAgreementId = function () {
        return new wrappers_1.DebtOrderDataWrapper(this.data).getIssuanceCommitmentHash();
    };
    /**
     * Returns the loan request's underlying data as JSON.
     *
     * Converting the loan request to JSON allows the resulting data to be written to disk,
     * or transmitted over the wire.
     *
     * @example
     * const data = loanRequest.toJSON();
     *
     * @return {OrderData}
     */
    DebtOrder.prototype.toJSON = function () {
        return {
            kernelVersion: this.data.kernelVersion,
            issuanceVersion: this.data.issuanceVersion,
            principalAmount: this.data.principalAmount.toString(),
            principalToken: this.data.principalToken,
            debtor: this.data.debtor,
            debtorFee: this.data.debtorFee.toString(),
            creditor: this.data.creditor,
            creditorFee: this.data.creditorFee.toString(),
            relayer: this.data.relayer,
            relayerFee: this.data.relayerFee.toString(),
            underwriter: this.data.underwriter,
            underwriterFee: this.data.underwriterFee.toString(),
            underwriterRiskRating: this.data.underwriterRiskRating.toString(),
            termsContract: this.data.termsContract,
            termsContractParameters: this.data.termsContractParameters,
            expirationTimestampInSec: this.data.expirationTimestampInSec.toString(),
            salt: this.data.salt.toString(),
            debtorSignature: this.data.debtorSignature,
            creditorSignature: this.data.creditorSignature,
            underwriterSignature: this.data.underwriterSignature,
        };
    };
    return DebtOrder;
}());
exports.DebtOrder = DebtOrder;
var templateObject_1;
//# sourceMappingURL=debt_order.js.map
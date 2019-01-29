"use strict";
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
var types_1 = require("../types");
var Loan = /** @class */ (function () {
    function Loan(dharma, params) {
        this.dharma = dharma;
        this.params = params;
    }
    Loan.fetch = function (dharma, id) {
        return __awaiter(this, void 0, void 0, function () {
            var entry, collateralizer, debtor, parameters, principalSymbol, collateralSymbol, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dharma.servicing.getDebtRegistryEntry(id)];
                    case 1:
                        entry = _a.sent();
                        return [4 /*yield*/, dharma.contracts.loadCollateralizerAsync()];
                    case 2:
                        collateralizer = _a.sent();
                        return [4 /*yield*/, collateralizer.agreementToCollateralizer.callAsync(id)];
                    case 3:
                        debtor = _a.sent();
                        parameters = dharma.adapters.collateralizedSimpleInterestLoan.unpackParameters(entry.termsContractParameters);
                        return [4 /*yield*/, dharma.token.getTokenSymbolByIndexAsync(parameters.principalTokenIndex)];
                    case 4:
                        principalSymbol = _a.sent();
                        return [4 /*yield*/, dharma.token.getTokenSymbolByIndexAsync(parameters.collateralTokenIndex)];
                    case 5:
                        collateralSymbol = _a.sent();
                        params = {
                            id: id,
                            principal: types_1.TokenAmount.fromRaw(parameters.principalAmount, principalSymbol),
                            collateral: types_1.TokenAmount.fromRaw(parameters.collateralAmount, collateralSymbol),
                            interestRate: new types_1.InterestRate(parameters.interestRate.toNumber()),
                            termLength: new types_1.TimeInterval(parameters.termLength.toNumber(), parameters.amortizationUnit),
                            debtor: new types_1.EthereumAddress(debtor),
                            creditor: new types_1.EthereumAddress(entry.beneficiary),
                        };
                        return [2 /*return*/, new this(dharma, params)];
                }
            });
        });
    };
    /**
     *  Returns the loan's data as vanilla JS types.
     *
     * @example
     * const data = loan.getData();
     *
     * @returns {LoanData}
     */
    Loan.prototype.getData = function () {
        var _a = this.params, id = _a.id, principal = _a.principal, collateral = _a.collateral, interestRate = _a.interestRate, termLength = _a.termLength, debtor = _a.debtor, creditor = _a.creditor;
        return {
            id: id,
            principalAmount: principal.decimalAmount,
            principalTokenSymbol: principal.tokenSymbol,
            collateralAmount: collateral.decimalAmount,
            collateralTokenSymbol: collateral.tokenSymbol,
            interestRate: interestRate.percent,
            termDuration: termLength.amount,
            termUnit: termLength.getAmortizationUnit(),
            debtorAddress: debtor.toString(),
            creditorAddress: creditor.toString(),
        };
    };
    /**
     *  Returns loan data as well as repaid amount and the total expected repayment amount.
     *
     * @example
     * const expandedData = await loan.getExpandedData();
     * => {
     *      repaidAmount: 100,
     *      totalExpectedRepaymentAmount: 250,
     *      ...
     *    }
     *
     * @returns {Promise<ExpandedLoanData>}
     */
    Loan.prototype.getExpandedData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, repaidAmount, totalExpectedRepaymentAmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.getData();
                        return [4 /*yield*/, this.getRepaidAmount()];
                    case 1:
                        repaidAmount = _a.sent();
                        return [4 /*yield*/, this.getTotalExpectedRepaymentAmount()];
                    case 2:
                        totalExpectedRepaymentAmount = _a.sent();
                        return [2 /*return*/, __assign({}, data, { repaidAmount: repaidAmount,
                                totalExpectedRepaymentAmount: totalExpectedRepaymentAmount })];
                }
            });
        });
    };
    /**
     * Eventually returns true if the loan's collateral has been either seized
     * by the creditor or returned to the debtor.
     *
     * @example
     * await loan.isCollateralWithdrawn();
     * => true
     *
     * @returns {Promise<boolean>}
     */
    Loan.prototype.isCollateralWithdrawn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dharma.adapters.collateralizedSimpleInterestLoan.isCollateralWithdrawn(this.params.id)];
            });
        });
    };
    /**
     * Eventually returns true if the loan's collateral is seizable
     * by the creditor.
     *
     * @example
     * await loan.isCollateralSeizable();
     * => true
     *
     * @returns {Promise<boolean>}
     */
    Loan.prototype.isCollateralSeizable = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dharma.adapters.collateralizedSimpleInterestLoan.canSeizeCollateral(this.params.id)];
            });
        });
    };
    /**
     * Eventually returns true if the loan has been fully repaid.
     *
     * @example
     * await loan.isRepaid();
     * => true
     *
     * @returns {Promise<boolean>}
     */
    Loan.prototype.isRepaid = function () {
        return __awaiter(this, void 0, void 0, function () {
            var outstandingAmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOutstandingAmount()];
                    case 1:
                        outstandingAmount = _a.sent();
                        return [2 /*return*/, outstandingAmount <= 0];
                }
            });
        });
    };
    /**
     * Eventually returns true if the loan's collateral is returnable to the debtor.
     *
     * @example
     * await loan.isCollateralReturnable();
     * => true
     *
     * @returns {Promise<boolean>}
     */
    Loan.prototype.isCollateralReturnable = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dharma.adapters.collateralizedSimpleInterestLoan.canReturnCollateral(this.params.id)];
            });
        });
    };
    /**
     * Eventually returns the amount held as collateral for this loan.
     *
     * This will return 0 if the loan's collateral is withdrawn.
     *
     * @example
     * await loan.getCurrentCollateralAmount();
     * => 10
     *
     * @returns {Promise<number>} the amount currently held as collateral for the loan
     */
    Loan.prototype.getCurrentCollateralAmount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isCollateralWithdrawn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isCollateralWithdrawn()];
                    case 1:
                        isCollateralWithdrawn = _a.sent();
                        if (isCollateralWithdrawn) {
                            return [2 /*return*/, 0];
                        }
                        return [2 /*return*/, this.params.collateral.decimalAmount];
                }
            });
        });
    };
    /**
     * Eventually returns the total amount expected to be repaid.
     *
     * @example
     * await loan.getTotalExpectedRepaymentAmount();
     * => 13.5
     *
     * @returns {Promise<number>}
     */
    Loan.prototype.getTotalExpectedRepaymentAmount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var totalExpectedRepaymentAmount, tokenSymbol;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dharma.servicing.getTotalExpectedRepayment(this.params.id)];
                    case 1:
                        totalExpectedRepaymentAmount = _a.sent();
                        tokenSymbol = this.params.principal.tokenSymbol;
                        return [2 /*return*/, types_1.TokenAmount.fromRaw(totalExpectedRepaymentAmount, tokenSymbol).decimalAmount];
                }
            });
        });
    };
    /**
     * Returns the symbol of the token to be repaid.
     *
     * * @example
     * await loan.getRepaymentTokenSymbol();
     * => "REP"
     *
     * @returns {string}
     */
    Loan.prototype.getRepaymentTokenSymbol = function () {
        return this.params.principal.tokenSymbol;
    };
    /**
     * Eventually returns the outstanding balance of the loan.
     *
     * @example
     * await loan.getOutstandingAmount();
     * => 25
     *
     * @returns {Promise<number>}
     */
    Loan.prototype.getOutstandingAmount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repaymentToken, totalExpectedRepaymentAmount, _a, repaidAmount, _b, outstandingAmount, tokenSymbol;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        repaymentToken = this.getRepaymentTokenSymbol();
                        _a = types_1.TokenAmount.bind;
                        return [4 /*yield*/, this.getTotalExpectedRepaymentAmount()];
                    case 1:
                        totalExpectedRepaymentAmount = new (_a.apply(types_1.TokenAmount, [void 0, _c.sent(),
                            repaymentToken]))();
                        _b = types_1.TokenAmount.bind;
                        return [4 /*yield*/, this.getRepaidAmount()];
                    case 2:
                        repaidAmount = new (_b.apply(types_1.TokenAmount, [void 0, _c.sent(), repaymentToken]))();
                        outstandingAmount = totalExpectedRepaymentAmount.rawAmount.minus(repaidAmount.rawAmount);
                        tokenSymbol = this.params.principal.tokenSymbol;
                        return [2 /*return*/, types_1.TokenAmount.fromRaw(outstandingAmount, tokenSymbol).decimalAmount];
                }
            });
        });
    };
    /**
     * Eventually returns the total amount repaid so far.
     *
     * @example
     * await loan.getRepaidAmount();
     * => 10
     *
     * @returns {Promise<number>}
     */
    Loan.prototype.getRepaidAmount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repaidAmount, tokenSymbol;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dharma.servicing.getValueRepaid(this.params.id)];
                    case 1:
                        repaidAmount = _a.sent();
                        tokenSymbol = this.params.principal.tokenSymbol;
                        return [2 /*return*/, types_1.TokenAmount.fromRaw(repaidAmount, tokenSymbol).decimalAmount];
                }
            });
        });
    };
    return Loan;
}());
exports.Loan = Loan;
//# sourceMappingURL=loan.js.map
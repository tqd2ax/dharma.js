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
var types_1 = require("../types");
var token_api_1 = require("../apis/token_api");
var bignumber_1 = require("../../utils/bignumber");
/**
 * Eventually returns token data for all tokens listed in the Dharma Token Registry.
 *
 * The balances and allowances are returned as specified by the owner param.
 *
 * @example
 * await Token.all(dharma, "0x...");
 * => {Promise<TokenData[]>}
 *
 * @param  dharma an instance of Dharma.js
 * @param  owner  the address for whom token balances and allowances will be retrieved
 * @returns {Promise<TokenData[]>}
 */
function all(dharma, owner) {
    return __awaiter(this, void 0, void 0, function () {
        var tokens;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    types_1.EthereumAddress.assertValid(owner);
                    return [4 /*yield*/, dharma.token.getSupportedTokens()];
                case 1:
                    tokens = _a.sent();
                    return [2 /*return*/, Promise.all(tokens.map(function (attributes) {
                            return getDataPromise(dharma, attributes, owner);
                        }))];
            }
        });
    });
}
exports.all = all;
/**
 * Eventually returns token data for the symbol specified.
 *
 * Balances and allowances are returned as specified by the owner param.
 *
 * @example
 * await Token.getDataForSymbol(dharma, "0x...", "ZRX");
 * => {Promise<TokenData>}
 *
 * @param  dharma an instance of Dharma.js
 * @param  symbol the symbol of the token whose data is being requested
 * @param  owner  the address for whom token balances and allowances will be retrieved
 * @returns {Promise<TokenData>}
 */
function getDataForSymbol(dharma, symbol, owner) {
    return __awaiter(this, void 0, void 0, function () {
        var attributes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    types_1.EthereumAddress.assertValid(owner);
                    return [4 /*yield*/, dharma.token.getTokenAttributesBySymbol(symbol)];
                case 1:
                    attributes = _a.sent();
                    return [2 /*return*/, getDataPromise(dharma, attributes, owner)];
            }
        });
    });
}
exports.getDataForSymbol = getDataForSymbol;
/**
 * If necessary, eventually sets the proxy's allowance for the specified token and user address
 * pair to unlimited. If an update occurs, the method returns a transaction hash. Otherwise, this is
 * a no op.
 *
 * @example
 * await Token.makeAllowanceUnlimitedIfNecessary(dharma, "0x...", "REP");
 * => "0x..."
 *
 * @returns {Promise<string | void>}
 */
function makeAllowanceUnlimitedIfNecessary(dharma, symbol, owner) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenAddress, hasUnlimitedAllowance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    types_1.EthereumAddress.assertValid(owner);
                    return [4 /*yield*/, dharma.contracts.getTokenAddressBySymbolAsync(symbol)];
                case 1:
                    tokenAddress = _a.sent();
                    return [4 /*yield*/, dharma.token.hasUnlimitedAllowance(tokenAddress, owner)];
                case 2:
                    hasUnlimitedAllowance = _a.sent();
                    if (!hasUnlimitedAllowance) {
                        return [2 /*return*/, dharma.token.setUnlimitedProxyAllowanceAsync(tokenAddress, {
                                from: owner,
                            })];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.makeAllowanceUnlimitedIfNecessary = makeAllowanceUnlimitedIfNecessary;
/**
 * Eventually sets the creditor proxy's allowance for the specified token and user address
 * pair to unlimited.
 *
 * @example
 * await Token.setCreditorProxyAllowanceToUnlimited(dharma, "0x...", "REP");
 * => "0x..."
 *
 * @returns {Promise<string>}
 */
function setCreditorProxyAllowanceToUnlimited(dharma, symbol, owner) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    types_1.EthereumAddress.assertValid(owner);
                    return [4 /*yield*/, dharma.contracts.getTokenAddressBySymbolAsync(symbol)];
                case 1:
                    tokenAddress = _a.sent();
                    return [2 /*return*/, dharma.token.setUnlimitedCreditorProxyAllowanceAsync(tokenAddress, { from: owner })];
            }
        });
    });
}
exports.setCreditorProxyAllowanceToUnlimited = setCreditorProxyAllowanceToUnlimited;
/**
 * Eventually determnines whether the user specified has allotted an unlimited allowance to the
 * creditor proxy.
 *
 * @example
 * await Token.hasUnlimitedCreditorProxyAllowance(dharma, "0x...", "REP");
 * => true
 *
 * @returns {Promise<boolean>}
 */
function hasUnlimitedCreditorProxyAllowance(dharma, symbol, owner) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    types_1.EthereumAddress.assertValid(owner);
                    return [4 /*yield*/, dharma.contracts.getTokenAddressBySymbolAsync(symbol)];
                case 1:
                    tokenAddress = _a.sent();
                    return [2 /*return*/, dharma.token.hasUnlimitedCreditorProxyAllowance(tokenAddress, owner)];
            }
        });
    });
}
exports.hasUnlimitedCreditorProxyAllowance = hasUnlimitedCreditorProxyAllowance;
/**
 * Eventually revokes the creditor proxy's allowance for the specified token and user address pair.
 *
 * * @example
 * await Token.revokeCreditorProxyAllowance(dharma, "0x...", "REP");
 * => "0x..."
 *
 * @returns {Promise<string>}
 */
function revokeCreditorProxyAllowance(dharma, symbol, owner) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    types_1.EthereumAddress.assertValid(owner);
                    return [4 /*yield*/, dharma.contracts.getTokenAddressBySymbolAsync(symbol)];
                case 1:
                    tokenAddress = _a.sent();
                    return [2 /*return*/, dharma.token.setCreditorProxyAllowanceAsync(tokenAddress, new bignumber_1.BigNumber(0), {
                            from: owner,
                        })];
            }
        });
    });
}
exports.revokeCreditorProxyAllowance = revokeCreditorProxyAllowance;
/**
 * Eventually revokes the proxy's allowance for the specified token and user address pair.
 *
 * * @example
 * await Token.revokeAllowance(dharma, "0x...", "REP");
 * => "0x..."
 *
 * @returns {Promise<string>}
 */
function revokeAllowance(dharma, symbol, owner) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    types_1.EthereumAddress.assertValid(owner);
                    return [4 /*yield*/, dharma.contracts.getTokenAddressBySymbolAsync(symbol)];
                case 1:
                    tokenAddress = _a.sent();
                    return [2 /*return*/, dharma.token.setProxyAllowanceAsync(tokenAddress, new bignumber_1.BigNumber(0), {
                            from: owner,
                        })];
            }
        });
    });
}
exports.revokeAllowance = revokeAllowance;
function getDataPromise(dharma, tokenAttributes, owner) {
    return new Promise(function (resolve) {
        var address = tokenAttributes.address, symbol = tokenAttributes.symbol, name = tokenAttributes.name, numDecimals = tokenAttributes.numDecimals;
        var balancePromise = dharma.token.getBalanceAsync(address, owner);
        var allowancePromise = dharma.token.getProxyAllowanceAsync(address, owner);
        Promise.all([balancePromise, allowancePromise]).then(function (values) {
            var rawBalance = values[0], rawAllowance = values[1];
            var balanceAmount = types_1.TokenAmount.fromRaw(rawBalance, symbol);
            var allowanceAmount = types_1.TokenAmount.fromRaw(rawAllowance, symbol);
            var hasUnlimitedAllowance = token_api_1.TokenAPI.isUnlimitedAllowance(allowanceAmount.rawAmount);
            resolve({
                symbol: symbol,
                name: name,
                address: address,
                numDecimals: numDecimals.toNumber(),
                balance: balanceAmount.decimalAmount,
                allowance: allowanceAmount.decimalAmount,
                hasUnlimitedAllowance: hasUnlimitedAllowance,
            });
        });
    });
}
//# sourceMappingURL=token.js.map
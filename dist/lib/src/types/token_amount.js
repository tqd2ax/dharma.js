"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Utils
var bignumber_1 = require("../../utils/bignumber");
var constants_1 = require("../../utils/constants");
function registryDataForSymbol(symbol) {
    var registryData = constants_1.TOKEN_REGISTRY_TRACKED_TOKENS.find(function (tokenObject) { return tokenObject.symbol === symbol; });
    if (!registryData) {
        throw new Error("Cannot find token with given symbol in token registry");
    }
    return {
        symbol: symbol,
        numDecimals: new bignumber_1.BigNumber(registryData.decimals),
        name: registryData.name,
    };
}
var TokenAmount = /** @class */ (function () {
    function TokenAmount(amount, symbol) {
        this.data = registryDataForSymbol(symbol);
        this.rawAmount = TokenAmount.convertToRaw(new bignumber_1.BigNumber(amount.toString()), this.data.numDecimals);
    }
    TokenAmount.fromRaw = function (rawAmount, symbol) {
        var numDecimals = registryDataForSymbol(symbol).numDecimals;
        var decimalAmount = TokenAmount.convertToDecimal(rawAmount, numDecimals);
        return new TokenAmount(decimalAmount, symbol);
    };
    TokenAmount.convertToRaw = function (decimalAmount, numDecimals) {
        return decimalAmount.mul(new bignumber_1.BigNumber(10).pow(numDecimals.toNumber()));
    };
    TokenAmount.convertToDecimal = function (rawAmount, numDecimals) {
        return rawAmount.div(new bignumber_1.BigNumber(10).pow(numDecimals.toNumber())).toNumber();
    };
    Object.defineProperty(TokenAmount.prototype, "tokenNumDecimals", {
        get: function () {
            return this.data.numDecimals.toNumber();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenAmount.prototype, "tokenName", {
        get: function () {
            return this.data.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenAmount.prototype, "tokenSymbol", {
        get: function () {
            return this.data.symbol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenAmount.prototype, "decimalAmount", {
        get: function () {
            return TokenAmount.convertToDecimal(this.rawAmount, this.data.numDecimals);
        },
        enumerable: true,
        configurable: true
    });
    TokenAmount.prototype.toString = function () {
        return this.decimalAmount + " " + this.data.symbol;
    };
    return TokenAmount;
}());
exports.TokenAmount = TokenAmount;
//# sourceMappingURL=token_amount.js.map
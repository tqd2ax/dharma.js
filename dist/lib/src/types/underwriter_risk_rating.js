"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bignumber_1 = require("../../utils/bignumber");
exports.UNDERWRITER_RISK_RATING_SCALING_FACTOR = new bignumber_1.BigNumber(Math.pow(10, 7));
var UnderwriterRiskRating = /** @class */ (function () {
    function UnderwriterRiskRating(value) {
        if (typeof value === "number") {
            this.scaled = new bignumber_1.BigNumber(value).times(exports.UNDERWRITER_RISK_RATING_SCALING_FACTOR);
            this.unscaled = value;
        }
        else {
            this.scaled = value;
            this.unscaled = value.div(exports.UNDERWRITER_RISK_RATING_SCALING_FACTOR).toNumber();
        }
    }
    return UnderwriterRiskRating;
}());
exports.UnderwriterRiskRating = UnderwriterRiskRating;
//# sourceMappingURL=underwriter_risk_rating.js.map
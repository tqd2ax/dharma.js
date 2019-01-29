import { BigNumber } from "../../utils/bignumber";
export declare const UNDERWRITER_RISK_RATING_SCALING_FACTOR: BigNumber;
export declare class UnderwriterRiskRating {
    readonly unscaled: number;
    readonly scaled: BigNumber;
    constructor(value: number | BigNumber);
}

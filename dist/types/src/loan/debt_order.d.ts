import { BigNumber } from "../../utils/bignumber";
import { Dharma } from "../types/dharma";
import { DebtOrderData, DurationUnit, ECDSASignature, EthereumAddress, InterestRate, TimeInterval, TokenAmount, UnderwriterRiskRating } from "../types";
export declare const DEBT_ORDER_ERRORS: {
    ALREADY_SIGNED_BY_DEBTOR: string;
    ALREADY_SIGNED_BY_CREDITOR: string;
    ALREADY_SIGNED_BY_UNDERWRITER: string;
    PROXY_FILL_DISALLOWED: (className: string) => any;
};
export interface DebtOrderConstructorParams {
    principal: TokenAmount;
    collateral: TokenAmount;
    interestRate: InterestRate;
    termLength: TimeInterval;
    expiresAt: number;
    relayer?: EthereumAddress;
    relayerFee?: TokenAmount;
    creditorFee?: TokenAmount;
    debtorFee?: TokenAmount;
    underwriterRiskRating?: UnderwriterRiskRating;
    underwriterFee?: TokenAmount;
    underwriter?: EthereumAddress;
}
export interface OrderData {
    kernelVersion: string;
    issuanceVersion: string;
    principalAmount: string;
    principalToken: string;
    debtor: string;
    debtorFee: string;
    creditor: string;
    creditorFee: string;
    relayer: string;
    relayerFee: string;
    underwriter: string;
    underwriterFee: string;
    underwriterRiskRating: string;
    termsContract: string;
    termsContractParameters: string;
    expirationTimestampInSec: string;
    salt: string;
    debtorSignature: ECDSASignature;
    creditorSignature: ECDSASignature;
    underwriterSignature: ECDSASignature;
}
export interface DebtOrderParams {
    principalAmount: number;
    principalToken: string;
    collateralAmount: number;
    collateralToken: string;
    interestRate: number;
    termDuration: number;
    termUnit: DurationUnit;
    expiresInDuration: number;
    expiresInUnit: DurationUnit;
    relayerAddress?: string;
    relayerFeeAmount?: number;
    creditorFeeAmount?: number;
    underwriterAddress?: string;
    underwriterRiskRating?: number;
    underwriterFeeAmount?: number;
}
export interface DebtOrderTerms {
    principalAmount: number;
    principalTokenSymbol: string;
    collateralAmount: number;
    collateralTokenSymbol: string;
    interestRate: number;
    termDuration: number;
    termUnit: string;
    expiresAt: number;
}
export declare class DebtOrder {
    protected readonly dharma: Dharma;
    protected readonly params: DebtOrderConstructorParams;
    protected data: DebtOrderData;
    static generateSalt(): BigNumber;
    static create<T extends DebtOrder>(dharma: Dharma, params: DebtOrderParams): Promise<T>;
    static load<T extends DebtOrder>(dharma: Dharma, data: OrderData): Promise<T>;
    protected constructor(dharma: Dharma, params: DebtOrderConstructorParams, data: DebtOrderData);
    /**
     * Returns the terms of the loan request.
     *
     * @example
     * const terms = loanRequest.getTerms();
     *
     * @returns {DebtOrderTerms}
     */
    getTerms(): DebtOrderTerms;
    /**
     * Eventually returns true if the current loan request will be expired for the next block.
     *
     * @example
     * await loanRequest.isExpired();
     * => true
     *
     * @returns {Promise<boolean>}
     */
    isExpired(): Promise<boolean>;
    /**
     * Returns whether the loan request has been signed by a debtor.
     *
     * @example
     * loanRequest.isSignedByDebtor();
     * => true
     *
     * @return {boolean}
     */
    isSignedByDebtor(): boolean;
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
    signAsDebtor(debtorAddress?: string): Promise<void>;
    /**
     * Eventually returns true if the loan request has been cancelled.
     *
     * @example
     * await loanRequest.isCancelled();
     * => true
     *
     * @returns {Promise<boolean>}
     */
    isCancelled(): Promise<boolean>;
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
    cancel(): Promise<string>;
    /**
     * Returns the loan request's unique identifier.
     *
     * @example
     * const id = loanRequest.getAgreementId();
     *
     * @return {string}
     */
    getAgreementId(): string;
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
    toJSON(): OrderData;
}

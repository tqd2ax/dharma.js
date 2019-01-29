import { Dharma } from "../types/dharma";
import { DebtOrder, DebtOrderParams } from "./debt_order";
export declare class LoanRequest extends DebtOrder {
    /**
     * Eventually returns an instance of a LoanRequest object with the terms specified, signed by
     * the debtor as well.
     *
     * @example
     * const loanRequest = await LoanRequest.create(dharma, {
     *      principalAmount: 5,
     *      principalToken: "REP",
     *      collateralAmount: 10,
     *      collateralToken: "MKR",
     *      relayerAddress: "0x000000000000000000000000000000",
     *      relayerFeeAmount: 23.1,
     *      interestRate: 12.3,
     *      termDuration: 6,
     *      termUnit: "months",
     *      expiresInDuration: 5,
     *      expiresInUnit: "days",
     *  }, debtor);
     *
     * @returns {Promise<LoanRequest>}
     */
    static createAndSignAsDebtor(dharma: Dharma, params: DebtOrderParams, debtor?: string): Promise<LoanRequest>;
    /**
     * Eventually signs the loan request as the creditor.
     *
     * @throws Throws if the loan request is already signed by a creditor.
     *
     * @example
     * loanRequest.signAsCreditor();
     * => Promise<void>
     *
     * @return {Promise<void>}
     */
    signAsCreditor(creditorAddress?: string): Promise<void>;
    /**
     * Returns whether the loan request has been signed by a creditor.
     *
     * @example
     * loanRequest.isSignedByCreditor();
     * => true
     *
     * @return {boolean}
     */
    isSignedByCreditor(): boolean;
    /**
     * Eventually determines if the prospective creditor is able to fill the loan request.
     *
     * @returns {Promise<boolean>}
     */
    isFillable(prospectiveCreditorAddress?: string): Promise<boolean>;
    /**
     * Eventually returns true if the current loan request has been filled on the blockchain.
     *
     * @example
     * await loanRequest.isFilled();
     * => true
     *
     * @returns {Promise<boolean>}
     */
    isFilled(): Promise<boolean>;
    /**
     * Eventually throws if the prospective creditor is unable to fill the loan request.
     *
     * @returns {Promise<void>}
     */
    assertFillable(prospectiveCreditorAddress?: string): Promise<void>;
    /**
     * Eventually fills the loan request as creditor, transferring the principal to the debtor.
     *
     * @example
     * loanRequest.fillAsCreditor();
     * => Promise<string>
     *
     * @returns {Promise<string>} the hash of the Ethereum transaction to fill the loan request
     */
    fillAsCreditor(creditorAddress?: string): Promise<string>;
    /**
     * Eventually fills the loan as proxy. Requires that the loan request be signed by both the
     * creditor and debtor.
     *
     * @throws Throws if the loan request is not signed by both the creditor and debtor.
     *
     * @example
     * loanRequest.fillAsProxy();
     * => Promise<string>
     *
     * @return {Promise<string>}
     */
    fillAsProxy(proxyAddress?: string): Promise<string>;
    /**
     * Eventually signs the loan request as the underwriter.
     *
     * @throws Throws if the loan request is already signed by an underwriter.
     *
     * @example
     * loanRequest.signAsUnderwriter();
     * => Promise<void>
     *
     * @return {Promise<void>}
     */
    signAsUnderwriter(underwriterAddress?: string): Promise<void>;
    /**
     * Returns whether the loan request has been signed by an underwriter.
     *
     * @example
     * loanRequest.isSignedByUnderwriter();
     * => true
     *
     * @return {boolean}
     */
    isSignedByUnderwriter(): boolean;
}

import { Dharma } from "../dharma";
import { DebtOrder, DebtOrderParams } from "../../loan/debt_order";
export declare class LoanOffer extends DebtOrder {
    static createAndSignAsCreditor(dharma: Dharma, params: DebtOrderParams, creditor?: string): Promise<LoanOffer>;
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
     * Eventually accepts the loan offer as debtor, transferring the principal to the debtor and
     * the collateral to the creditor.
     *
     * @example
     * loanOffer.acceptAsDebtor();
     * => Promise<string>
     *
     * @returns {Promise<string>} the hash of the Ethereum transaction to fill the loan request
     */
    acceptAsDebtor(debtorAddress?: string): Promise<string>;
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
    acceptAsProxy(proxyAddress?: string): Promise<string>;
    /**
     * Eventually returns true if the current loan offer has been accepted on the blockchain.
     *
     * @example
     * await loanOffer.isAccepted();
     * => true
     *
     * @returns {Promise<boolean>}
     */
    isAccepted(): Promise<boolean>;
    getLoanOfferHash(): string;
}

import { Loan } from "./loan";
/**
 * Describes a debt -- aka a loan from a debtor's perspective.
 *
 * Includes functionality for:
 * - returning collateral
 * - making repayments
 */
export declare class Debt extends Loan {
    /**
     * Eventually makes a repayment on the debt, with the default payment amount being the
     * expected size of a single installment given the principal, interest rate,
     * and terms.
     *
     * @example
     * debt.makeRepayment();
     * => Promise<string>
     *
     * const outstandingAmount = await debt.getOutstandingAmount();
     * debt.makeRepayment(outstandingAmount);
     * => Promise<string>
     *
     * @returns {Promise<string>} the hash of the Ethereum transaction to make the repayment
     */
    makeRepayment(repaymentAmount?: number): Promise<string>;
    /**
     * Eventually returns the collateral to the debtor.
     *
     * This call will throw if the collateral is not returnable.
     *
     * @example
     * debt.returnCollateral();
     * => Promise<string>
     *
     * @returns {Promise<string>} the hash of the Ethereum transaction to return the collateral
     */
    returnCollateral(): Promise<string>;
}

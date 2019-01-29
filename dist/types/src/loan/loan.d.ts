import { EthereumAddress, InterestRate, TimeInterval, TokenAmount } from "../types";
import { Dharma } from "../types/dharma";
export interface LoanParams {
    id: string;
    principal: TokenAmount;
    collateral: TokenAmount;
    interestRate: InterestRate;
    termLength: TimeInterval;
    creditor: EthereumAddress;
    debtor: EthereumAddress;
}
export interface LoanData {
    id: string;
    principalAmount: number;
    principalTokenSymbol: string;
    collateralAmount: number;
    collateralTokenSymbol: string;
    interestRate: number;
    termDuration: number;
    termUnit: string;
    debtorAddress: string;
    creditorAddress: string;
}
export interface ExpandedLoanData extends LoanData {
    repaidAmount: number;
    totalExpectedRepaymentAmount: number;
}
export declare class Loan {
    protected readonly dharma: Dharma;
    protected readonly params: LoanParams;
    static fetch<T extends Loan>(dharma: Dharma, id: string): Promise<T>;
    protected constructor(dharma: Dharma, params: LoanParams);
    /**
     *  Returns the loan's data as vanilla JS types.
     *
     * @example
     * const data = loan.getData();
     *
     * @returns {LoanData}
     */
    getData(): LoanData;
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
    getExpandedData(): Promise<ExpandedLoanData>;
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
    isCollateralWithdrawn(): Promise<boolean>;
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
    isCollateralSeizable(): Promise<boolean>;
    /**
     * Eventually returns true if the loan has been fully repaid.
     *
     * @example
     * await loan.isRepaid();
     * => true
     *
     * @returns {Promise<boolean>}
     */
    isRepaid(): Promise<boolean>;
    /**
     * Eventually returns true if the loan's collateral is returnable to the debtor.
     *
     * @example
     * await loan.isCollateralReturnable();
     * => true
     *
     * @returns {Promise<boolean>}
     */
    isCollateralReturnable(): Promise<boolean>;
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
    getCurrentCollateralAmount(): Promise<number>;
    /**
     * Eventually returns the total amount expected to be repaid.
     *
     * @example
     * await loan.getTotalExpectedRepaymentAmount();
     * => 13.5
     *
     * @returns {Promise<number>}
     */
    getTotalExpectedRepaymentAmount(): Promise<number>;
    /**
     * Returns the symbol of the token to be repaid.
     *
     * * @example
     * await loan.getRepaymentTokenSymbol();
     * => "REP"
     *
     * @returns {string}
     */
    getRepaymentTokenSymbol(): string;
    /**
     * Eventually returns the outstanding balance of the loan.
     *
     * @example
     * await loan.getOutstandingAmount();
     * => 25
     *
     * @returns {Promise<number>}
     */
    getOutstandingAmount(): Promise<number>;
    /**
     * Eventually returns the total amount repaid so far.
     *
     * @example
     * await loan.getRepaidAmount();
     * => 10
     *
     * @returns {Promise<number>}
     */
    getRepaidAmount(): Promise<number>;
}

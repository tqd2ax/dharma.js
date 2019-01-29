import { ExpandedLoanData } from "./loan";
import { Debt } from "./debt";
import { Dharma } from "../";
/**
 * Describes a collection of debts and provides functionality for managing such a collection.
 */
export declare class Debts {
    /**
     * Retrieves a collection of debts that belong to the specified owner.
     *
     * @returns {Promise<Debt[]>}
     */
    static get(dharma: Dharma, owner: string): Promise<Debt[]>;
    static getExpandedData(dharma: Dharma, owner: string): Promise<ExpandedLoanData[]>;
}

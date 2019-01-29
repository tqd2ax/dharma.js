import { Investment } from "./investment";
import { ExpandedLoanData } from "./loan";
import { Dharma } from "../";
/**
 * Describes a collection of investments and provides functionality for managing such a collection.
 */
export declare class Investments {
    /**
     * Retrieves a collection of investments that belong to the specified owner.
     *
     * @returns {Promise<Investment[]>}
     */
    static get(dharma: Dharma, owner: string): Promise<Investment[]>;
    static getExpandedData(dharma: Dharma, owner: string): Promise<ExpandedLoanData[]>;
}

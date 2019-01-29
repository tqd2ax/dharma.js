import { CollateralizedSimpleInterestLoanOrder } from "./collateralized_simple_interest_loan_adapter";
import { ERC721CollateralizedSimpleInterestLoanOrder } from "./erc721_collateralized_simple_interest/loan_adapter";
import { SimpleInterestLoanOrder } from "./simple_interest_loan_adapter";
import { DebtOrderData, DebtRegistryEntry } from "../types";
export interface Adapter {
    fromDebtOrder: (debtOrder: DebtOrderData) => Promise<SimpleInterestLoanOrder | CollateralizedSimpleInterestLoanOrder>;
    toDebtOrder: (params: object) => Promise<DebtOrderData>;
    fromDebtRegistryEntry: (entry: DebtRegistryEntry) => Promise<object>;
    getRepaymentSchedule: (entry: DebtRegistryEntry) => number[];
    unpackParameters: (packedParams: string) => object;
    validateAsync: (order: SimpleInterestLoanOrder | CollateralizedSimpleInterestLoanOrder | ERC721CollateralizedSimpleInterestLoanOrder) => Promise<void>;
}
export declare function conformsToAdapterInterface(object: any): object is Adapter;

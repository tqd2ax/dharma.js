"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erc721CollateralizedSimpleInterestLoanOrder = {
    id: "/ERC721CollateralizedSimpleInterestLoanOrder",
    allOf: [
        { $ref: "/SimpleInterestLoanOrder" },
        {
            properties: {
                tokenReference: { $ref: "/WholeNumber" },
                isEnumerable: { type: "boolean" },
            },
            required: ["erc721Symbol", "tokenReference", "isEnumerable"],
        },
    ],
};
//# sourceMappingURL=erc721_collateralized_simple_interest_loan_order_schema.js.map
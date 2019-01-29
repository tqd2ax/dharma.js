import { Dharma } from "./dharma";
export declare const ETHEREUM_ADDRESS_ERRORS: {
    INVALID_ADDRESS: (value: string) => string;
};
export declare class EthereumAddress {
    /**
     * Returns true if the provided value matches the format of an Ethereum address.
     *
     * @param {string} addressString
     * @returns {boolean}
     */
    static isValid(value: string): boolean;
    static assertValid(value: string): void;
    /**
     * Validates the user-specified address if present. Otherwise, retrieves the current user from
     * web3. This function will throw is the address specified is invalid.
     *
     * @param  address
     * @returns {Promise<string>} a validated user-specified address, or the current user.
     */
    static validAddressOrCurrentUser(dharma: Dharma, address?: string): Promise<string>;
    private readonly raw;
    constructor(value: string);
    toString(): string;
}

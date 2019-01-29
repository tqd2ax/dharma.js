import * as Web3 from "web3";
import { ContractsAPI } from ".";
import { IntervalManager } from "../../utils/interval_utils";
export declare const BlockchainAPIErrors: {
    AWAIT_MINE_TX_TIMED_OUT: (txHash: string) => any;
};
/**
 * The following default timeout is provided to the IntervalManager when awaiting mined
 * transactions. The value is represented in milliseconds.
 *
 * @type {number}
 */
export declare const DEFAULT_TIMEOUT_FOR_TX_MINED = 60000;
export declare class BlockchainAPI {
    intervalManager: IntervalManager;
    private readonly web3Utils;
    private readonly web3;
    private assert;
    private contracts;
    constructor(web3: Web3, contracts: ContractsAPI);
    /**
     * Asynchronously polls the Ethereum blockchain until the specified
     * transaction has been mined or the timeout limit is reached, whichever
     * occurs first.
     *
     * @param  txHash                 the hash of the transaction.
     * @param  pollingIntervalMs=1000 the interval at which the blockchain should be polled.
     * @param  timeoutMs              the number of milliseconds until this process times out. If
     *                                no value is provided, a default value is used.
     * @return                        the transaction receipt resulting from the mining process.
     */
    awaitTransactionMinedAsync(txHash: string, pollingIntervalMs?: number, timeoutMs?: number): Promise<Web3.TransactionReceipt>;
    /**
     * Eventually returns an array of addresses as strings.
     *
     * @example
     * await dharma.blockchain.getAccounts();
     * => ["0x...", "0x...", ...]
     *
     * @returns {promise<string[]>}
     */
    getAccounts(): Promise<{}>;
    /**
     * Eventually returns the first account from available accounts.
     *
     * @example
     * await dharma.blockchain.getCurrentAccount();
     * => "0x..."
     *
     * @returns {Promise<string>}
     */
    getCurrentAccount(): Promise<string>;
    /**
     * Returns the current blocktime in seconds.
     *
     * @returns {Promise<number>}
     */
    getCurrentBlockTime(): Promise<number>;
    /**
     * Returns the current block data, as BlockWithoutTransactionData.
     *
     * @returns {Promise<Web3.BlockWithoutTransactionData>}
     */
    getCurrentBlock(): Promise<Web3.BlockWithoutTransactionData>;
    /**
     * Returns the current network id, as a number.
     *
     * @example
     * const networkId = await dharma.blockchain.getNetworkId();
     * => 1
     *
     * @returns {Promise<number>}
     */
    getNetworkId(): Promise<number>;
}

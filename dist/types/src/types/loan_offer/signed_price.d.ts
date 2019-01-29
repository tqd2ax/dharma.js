import { BigNumber } from "../../../utils/bignumber";
import { ECDSASignature } from "../ecdsa_signature";
/**
 * A price that has been signed by some price feed.
 */
export interface SignedPrice {
    tokenAddress: string;
    tokenPrice: BigNumber;
    timestamp: BigNumber;
    operatorSignature: ECDSASignature;
}

import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITreasurer, ITreasurerInterface } from "../ITreasurer";
export declare class ITreasurer__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ITreasurerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITreasurer;
}
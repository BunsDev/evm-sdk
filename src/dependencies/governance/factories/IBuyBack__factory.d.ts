import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBuyBack, IBuyBackInterface } from "../IBuyBack";
export declare class IBuyBack__factory {
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
    static createInterface(): IBuyBackInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBuyBack;
}

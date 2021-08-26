import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPancakeCallee, IPancakeCalleeInterface } from "../IPancakeCallee";
export declare class IPancakeCallee__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IPancakeCalleeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPancakeCallee;
}

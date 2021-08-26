import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPancakeRouter01, IPancakeRouter01Interface } from "../IPancakeRouter01";
export declare class IPancakeRouter01__factory {
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
    static createInterface(): IPancakeRouter01Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPancakeRouter01;
}

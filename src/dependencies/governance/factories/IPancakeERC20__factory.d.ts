import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPancakeERC20, IPancakeERC20Interface } from "../IPancakeERC20";
export declare class IPancakeERC20__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): IPancakeERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPancakeERC20;
}

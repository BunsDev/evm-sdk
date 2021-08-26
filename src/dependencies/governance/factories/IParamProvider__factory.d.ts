import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IParamProvider, IParamProviderInterface } from "../IParamProvider";
export declare class IParamProvider__factory {
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
    static createInterface(): IParamProviderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IParamProvider;
}

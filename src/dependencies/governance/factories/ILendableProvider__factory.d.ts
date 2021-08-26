import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILendableProvider, ILendableProviderInterface } from "../ILendableProvider";
export declare class ILendableProvider__factory {
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
    static createInterface(): ILendableProviderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILendableProvider;
}

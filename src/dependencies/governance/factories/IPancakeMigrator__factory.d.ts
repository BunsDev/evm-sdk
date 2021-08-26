import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPancakeMigrator, IPancakeMigratorInterface } from "../IPancakeMigrator";
export declare class IPancakeMigrator__factory {
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
    static createInterface(): IPancakeMigratorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPancakeMigrator;
}

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FixedPoint, FixedPointInterface } from "../FixedPoint";
export declare class FixedPoint__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FixedPoint>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FixedPoint;
    connect(signer: Signer): FixedPoint__factory;
    static readonly bytecode = "0x60b9610025600b82828239805160001a60731461001857fe5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c80633bf7a83e146042578063552f888a14605a575b600080fd5b60486076565b60408051918252519081900360200190f35b6060607e565b6040805160ff9092168252519081900360200190f35b600160701b81565b60708156fea2646970667358221220242dd5f28ed743fce21764700bfa414f69ff44b285ab919edaf949da15b0c6b564736f6c63430007040033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): FixedPointInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FixedPoint;
}

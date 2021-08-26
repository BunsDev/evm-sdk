import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockLendableProvider, MockLendableProviderInterface } from "../MockLendableProvider";
export declare class MockLendableProvider__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_lendables: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockLendableProvider>;
    getDeployTransaction(_lendables: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockLendableProvider;
    connect(signer: Signer): MockLendableProvider__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516102c93803806102c98339818101604052602081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b90830190602082018581111561006857600080fd5b825186602082028301116401000000008211171561008557600080fd5b82525081516020918201928201910280838360005b838110156100b257818101518382015260200161009a565b5050505090500160405250505060005b81518110156100ff576100f68282815181106100da57fe5b6020026020010151600061010660201b6100741790919060201c565b506001016100c2565b5050610186565b600061011b836001600160a01b038416610124565b90505b92915050565b6000610130838361016e565b6101665750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561011e565b50600061011e565b60009081526001919091016020526040902054151590565b610134806101956000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063532cc27814602d575b600080fd5b605060048036036020811015604157600080fd5b50356001600160a01b03166064565b604080519115158252519081900360200190f35b6000606e8183608e565b92915050565b60006087836001600160a01b03841660a1565b9392505050565b60006087836001600160a01b03841660e6565b600060ab838360e6565b60df57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155606e565b506000606e565b6000908152600191909101602052604090205415159056fea26469706673582212204826afb9458b12580f5c08411b9240eca979da0192d220d606f8ba619b2c9de464736f6c63430007040033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
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
    })[];
    static createInterface(): MockLendableProviderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockLendableProvider;
}

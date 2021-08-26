import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockParamGovernance, MockParamGovernanceInterface } from "../MockParamGovernance";
export declare class MockParamGovernance__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockParamGovernance>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockParamGovernance;
    connect(signer: Signer): MockParamGovernance__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610424806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806321f8a721146100675780633b68ccdb146100a0578063752f77f1146100c8578063ca446dd914610169578063efc1a9bf14610195578063f028d40a146101c4575b600080fd5b6100846004803603602081101561007d57600080fd5b50356101e7565b604080516001600160a01b039092168252519081900360200190f35b6100c6600480360360208110156100b657600080fd5b50356001600160a01b0316610202565b005b6100d0610205565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156101145781810151838201526020016100fc565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561015357818101518382015260200161013b565b5050505090500194505050505060405180910390f35b6100c66004803603604081101561017f57600080fd5b50803590602001356001600160a01b03166102ad565b6101b2600480360360208110156101ab57600080fd5b50356102db565b60408051918252519081900360200190f35b6100c6600480360360408110156101da57600080fd5b50803590602001356102ed565b6000908152600160205260409020546001600160a01b031690565b50565b6060806102106102ff565b9150815167ffffffffffffffff8111801561022a57600080fd5b50604051908082528060200260200182016040528015610254578160200160208202803683370190505b50905060005b82518110156102a85760008084838151811061027257fe5b602002602001015181526020019081526020016000205482828151811061029557fe5b602090810291909101015260010161025a565b509091565b60009182526001602052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b60009081526020819052604090205490565b60009182526020829052604090912055565b60408051600580825260c082019092526060916020820160a0803683370190505090507011d3d5915493905390d157d49155d05491607a1b8160008151811061034457fe5b6020026020010181815250506a111155915313d41351539560aa1b8160018151811061036c57fe5b60200260200101818152505068494e535552414e434560b81b8160028151811061039257fe5b602002602001018181525050664348415249545960c81b816003815181106103b657fe5b6020026020010181815250506b212aacafa0a7222fa12aa92760a11b816004815181106103df57fe5b6020026020010181815250509056fea264697066735822122048d1f43ce3d13e6d5f8d69f57f1ffec9199c9fed0351706eb292bbc9f8c3c03664736f6c63430007040033";
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
    static createInterface(): MockParamGovernanceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockParamGovernance;
}

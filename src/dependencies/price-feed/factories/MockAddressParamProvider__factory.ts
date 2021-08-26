/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockAddressParamProvider,
  MockAddressParamProviderInterface,
} from "../MockAddressParamProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "setAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061015e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806321f8a7211461003b578063ca446dd914610064575b600080fd5b61004e6100493660046100c2565b610079565b60405161005b9190610114565b60405180910390f35b6100776100723660046100da565b610094565b005b6000908152602081905260409020546001600160a01b031690565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6000602082840312156100d3578081fd5b5035919050565b600080604083850312156100ec578081fd5b8235915060208301356001600160a01b0381168114610109578182fd5b809150509250929050565b6001600160a01b039190911681526020019056fea2646970667358221220bc2a624c745fb780045e903f1f0c4e4f14525b20320a0dd28c5199428bed1aab64736f6c63430007040033";

export class MockAddressParamProvider__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockAddressParamProvider> {
    return super.deploy(overrides || {}) as Promise<MockAddressParamProvider>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockAddressParamProvider {
    return super.attach(address) as MockAddressParamProvider;
  }
  connect(signer: Signer): MockAddressParamProvider__factory {
    return super.connect(signer) as MockAddressParamProvider__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockAddressParamProviderInterface {
    return new utils.Interface(_abi) as MockAddressParamProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockAddressParamProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockAddressParamProvider;
  }
}
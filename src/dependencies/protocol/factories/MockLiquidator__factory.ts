/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockLiquidator,
  MockLiquidatorInterface,
} from "../MockLiquidator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
    ],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610128806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063ca5ce2ec14602d575b600080fd5b606260048036036060811015604157600080fd5b506001600160a01b0381358116916020810135821691604090910135166064565b005b826001600160a01b031663586e848f83836040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b0316815260200192505050602060405180830381600087803b15801560c357600080fd5b505af115801560d6573d6000803e3d6000fd5b505050506040513d602081101560eb57600080fd5b505050505056fea26469706673582212200597aa91f669753a8ce68a33d3e72375e713599f704b4fc796fc86b874dd521464736f6c63430007040033";

export class MockLiquidator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockLiquidator> {
    return super.deploy(overrides || {}) as Promise<MockLiquidator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockLiquidator {
    return super.attach(address) as MockLiquidator;
  }
  connect(signer: Signer): MockLiquidator__factory {
    return super.connect(signer) as MockLiquidator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockLiquidatorInterface {
    return new utils.Interface(_abi) as MockLiquidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockLiquidator {
    return new Contract(address, _abi, signerOrProvider) as MockLiquidator;
  }
}

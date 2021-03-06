/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ILendableProvider,
  ILendableProviderInterface,
} from "../ILendableProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "isRegisteredLendable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ILendableProvider__factory {
  static readonly abi = _abi;
  static createInterface(): ILendableProviderInterface {
    return new utils.Interface(_abi) as ILendableProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILendableProvider {
    return new Contract(address, _abi, signerOrProvider) as ILendableProvider;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockPancakeRouter,
  MockPancakeRouterInterface,
} from "../MockPancakeRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasurer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "amountIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
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
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "getAmountsIn",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "getAmountsOut",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setAmountIn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516108c73803806108c78339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c61083a61008d600039806106ca52508061039c528061051052806105f75280610735525061083a6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80636717f5b01161005b5780636717f5b0146102075780636bed55a614610226578063c45a015514610240578063d06ca61f146102645761007d565b80631f00ca741461008257806338ed17391461017c5780635c11d7951461017c575b600080fd5b61012c6004803603604081101561009857600080fd5b813591908101906040810160208201356401000000008111156100ba57600080fd5b8201836020820111156100cc57600080fd5b803590602001918460208302840111640100000000831117156100ee57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061030e945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610168578181015183820152602001610150565b505050509050019250505060405180910390f35b61012c600480360360a081101561019257600080fd5b8135916020810135918101906060810160408201356401000000008111156101b957600080fd5b8201836020820111156101cb57600080fd5b803590602001918460208302840111640100000000831117156101ed57600080fd5b91935091506001600160a01b038135169060200135610368565b6102246004803603602081101561021d57600080fd5b50356106bd565b005b61022e6106c2565b60408051918252519081900360200190f35b6102486106c8565b604080516001600160a01b039092168252519081900360200190f35b61012c6004803603604081101561027a57600080fd5b8135919081019060408101602082013564010000000081111561029c57600080fd5b8201836020820111156102ae57600080fd5b803590602001918460208302840111640100000000831117156102d057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506106ec945050505050565b6040805160028082526060808301845292602083019080368337019050509050600080548260008151811061033f57fe5b602002602001018360018151811061035357fe5b60209081029190910101919091525292915050565b606060008585600019810181811061037c57fe5b905060200201356001600160a01b03166001600160a01b031663dd62ed3e7f0000000000000000000000000000000000000000000000000000000000000000306040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b031681526020019250505060206040518083038186803b15801561040957600080fd5b505afa15801561041d573d6000803e3d6000fd5b505050506040513d602081101561043357600080fd5b5051604080516002808252606082018352929350919060208301908036833701905050915087818360008151811061046757fe5b602002602001018460018151811061047b57fe5b6020026020010182815250828152505050868260018451038151811061049d57fe5b602002602001015110156104e25760405162461bcd60e51b81526004018080602001828103825260298152602001806107dc6029913960400191505060405180910390fd5b858560008181106104ef57fe5b905060200201356001600160a01b03166001600160a01b03166323b872dd337f00000000000000000000000000000000000000000000000000000000000000008560008151811061053c57fe5b60200260200101516040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050602060405180830381600087803b15801561059a57600080fd5b505af11580156105ae573d6000803e3d6000fd5b505050506040513d60208110156105c457600080fd5b508690508560001981018181106105d757fe5b905060200201356001600160a01b03166001600160a01b03166323b872dd7f0000000000000000000000000000000000000000000000000000000000000000868560018751038151811061062757fe5b60200260200101516040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050602060405180830381600087803b15801561068557600080fd5b505af1158015610699573d6000803e3d6000fd5b505050506040513d60208110156106af57600080fd5b509198975050505050505050565b600055565b60005481565b7f000000000000000000000000000000000000000000000000000000000000000081565b6040805160028082526060808301845292602083019080368337019050509050828260018451038151811061071d57fe5b60200260200101516001600160a01b031663dd62ed3e7f0000000000000000000000000000000000000000000000000000000000000000306040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b031681526020019250505060206040518083038186803b1580156107a257600080fd5b505afa1580156107b6573d6000803e3d6000fd5b505050506040513d60208110156107cc57600080fd5b50518251839060009061033f57fefe50616e63616b65526f757465723a20494e53554646494349454e545f4f55545055545f414d4f554e54a2646970667358221220d034ef12ead0719c821d789e876be08ba2fcf5f95acabb585afe817e9b73c04664736f6c63430007040033";

export class MockPancakeRouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _treasurer: string,
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockPancakeRouter> {
    return super.deploy(
      _treasurer,
      _factory,
      overrides || {}
    ) as Promise<MockPancakeRouter>;
  }
  getDeployTransaction(
    _treasurer: string,
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_treasurer, _factory, overrides || {});
  }
  attach(address: string): MockPancakeRouter {
    return super.attach(address) as MockPancakeRouter;
  }
  connect(signer: Signer): MockPancakeRouter__factory {
    return super.connect(signer) as MockPancakeRouter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockPancakeRouterInterface {
    return new utils.Interface(_abi) as MockPancakeRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPancakeRouter {
    return new Contract(address, _abi, signerOrProvider) as MockPancakeRouter;
  }
}

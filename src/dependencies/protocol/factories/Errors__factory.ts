/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Errors, ErrorsInterface } from "../Errors";

const _abi = [
  {
    inputs: [],
    name: "F_ALREADY_REGISTERED_LENDABLE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_ALREADY_REGISTERED_TRADABLE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_NOT_A_PAIR_FACTORY",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_NOT_A_RESERVE_FACTORY",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_NOT_LENDABLE_TOKEN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_NOT_REGISTERED_PAIR",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_NOT_REGISTERED_TOKEN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_NOT_SHORTABLE_TOKEN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_NOT_TRADABLE_TOKEN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_UNINITIALIZED_RESERVE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MATH_ADDITION_OVERFLOW",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MATH_DIVISION_BY_ZERO",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MATH_MULTIPLICATION_OVERFLOW",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NON_REENTRANT_METHOD",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PG_INVALID_FEED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PG_INVALID_STEPS",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PG_UNKNOWN_FEED_TYPE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PG_UNKNOWN_IDENTITY",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_BORROW_LIMIT_EXCEEDED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_DEBT_LEFT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_FORBIDDEN_LIQUIDATION_CALLER",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_HEALTHY_POSITION_LIQUIDATION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_INSUFFICIENT_LIQUIDITY",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_INSUFFICIENT_OUTPUT_AMOUNT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_INSUFFICIENT_POSITION_DEPOSIT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_INSUFFICIENT_WOW_BALANCE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_INVALID_LEVERAGE_FACTOR",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_PRICE_THRESHOLD_OVERFLOW",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RF_NOT_LENDABLE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RT_FORBIDDEN_TRANSFER",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RT_PAIR_NOT_FOUND",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RT_RESERVE_NOT_FOUND",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "R_INSUFFICIENT_BALANCE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "R_INSUFFICIENT_LIQUIDITY",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "R_INVALID_DEPOSIT_AMOUNT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "R_INVALID_PAIR",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "R_INVALID_REPAY_AMOUNT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x610a86610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106102305760003560e01c80637bfb002a1161013a578063cafb2fab116100c2578063df203efb11610086578063df203efb146103aa578063e36f220e146103b2578063e66c238a146103ba578063e96047c0146103c2578063ef306a1b146103ca57610230565b8063cafb2fab14610382578063d8289f881461038a578063db3a05db14610392578063ddca5bf61461039a578063de2fdf8b146103a257610230565b8063a13c785911610109578063a13c78591461035a578063a6ddc7f514610362578063a83604151461036a578063c665b29814610372578063c6cb18be1461037a57610230565b80637bfb002a1461033a57806380b6ab5d146103425780638254f4d01461034a578063a03ed57e1461035257610230565b80633f5ba44a116101bd57806352eaf6cb1161018c57806352eaf6cb1461031257806358e723321461031a5780635ac8a0bb14610322578063704b21851461032a57806371431d461461033257610230565b80633f5ba44a146102f25780634349e3d8146102fa5780634b88e17f146103025780634d6800f61461030a57610230565b80630f5ee482116102045780630f5ee482146102ca57806314840e2e146102d25780633446045b146102da5780633b514f03146102e25780633bc4ff73146102ea57610230565b8062d1afbe14610235578063029d2344146102b2578063082f7cec146102ba5780630a15c5c5146102c2575b600080fd5b61023d6103d2565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027757818101518382015260200161025f565b50505050905090810190601f1680156102a45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61023d61040b565b61023d61042a565b61023d610449565b61023d610465565b61023d610484565b61023d6104bd565b61023d6104f6565b61023d610512565b61023d610541565b61023d61055d565b61023d61057c565b61023d61059c565b61023d6105b8565b61023d6105d4565b61023d610606565b61023d610622565b61023d61065b565b61023d610679565b61023d610698565b61023d6106d1565b61023d6106ef565b61023d61070e565b61023d61072c565b61023d61074a565b61023d610769565b61023d610788565b61023d6107ba565b61023d6107ea565b61023d610809565b61023d610827565b61023d610846565b61023d610865565b61023d610895565b61023d6108c7565b61023d6108e7565b61023d610918565b6040518060400160405280602081526020017f50726f7669646564206164647265737320697320756e6b6e6f776e207061697281525081565b604051806040016040528060038152602001624d4d4f60e81b81525081565b60405180604001604052806003815260200162494f4160e81b81525081565b60405180606001604052806021815260200161096a6021913981565b604051806040016040528060038152602001624d414f60e81b81525081565b6040518060400160405280601c81526020017f50726f7669646564206964656e7469747920697320756e6b6e6f776e0000000081525081565b6040518060400160405280601e81526020017f4f6e6c7920706169722063616e2063616c6c2074686973206d6574686f64000081525081565b6040518060600160405280602b815260200161098b602b913981565b604051806040016040528060138152602001724665656420697320416464726573735a65726f60681b81525081565b6040518060600160405280603381526020016109376033913981565b6040518060400160405280600381526020016226a22d60e91b81525081565b604051806040016040528060048152602001630554c48560e41b81525081565b6040518060600160405280603081526020016109ef6030913981565b604051806060016040528060328152602001610a1f6032913981565b60405180604001604052806016815260200175496e76616c6964207374657020617267756d656e747360501b81525081565b6040518060600160405280603981526020016109b66039913981565b6040518060400160405280601f81526020017f4f6e6c792057424e42207472616e73666572732061726520616c6c6f7765640081525081565b60405180604001604052806002815260200161125360f21b81525081565b6040518060400160405280600381526020016210549360ea1b81525081565b6040518060400160405280601d81526020017f50726f76696465642066656564207479706520697320756e6b6e6f776e00000081525081565b60405180604001604052806002815260200161139360f21b81525081565b60405180604001604052806003815260200162464c4360e81b81525081565b604051806040016040528060028152602001614e5360f01b81525081565b60405180604001604052806002815260200161139560f21b81525081565b6040518060400160405280600381526020016210549560ea1b81525081565b6040518060400160405280600381526020016224aba160e91b81525081565b60405180604001604052806016815260200175496e73756666696369656e74206c697175696469747960501b81525081565b60405180604001604052806014815260200173496e73756666696369656e742062616c616e636560601b81525081565b6040518060400160405280600381526020016212541160ea1b81525081565b60405180604001604052806002815260200161111360f21b81525081565b6040518060400160405280600381526020016224a62360e91b81525081565b6040518060400160405280600381526020016250544f60e81b81525081565b60405180604001604052806014815260200173125b9d985b1a59081c995c185e48185b5bdd5b9d60621b81525081565b60405180604001604052806016815260200175125b9d985b1a590819195c1bdcda5d08185b5bdd5b9d60521b81525081565b6040518060400160405280600481526020016350424c4560e01b81525081565b60405180604001604052806015815260200174546f6b656e206973206e6f74206c656e6461626c6560581b81525081565b60405180604001604052806002815260200161272960f11b8152508156fe4f6e6c79207265736572766520666163746f727920697320616c6c6f77656420746f2063616c6c2074686973206d6574686f6450726f7669646564206164647265737320697320756e6b6e6f776e20746f6b656e556e61626c6520746f2066696e64207061697220666f722070726f766964656420746f6b656e207061697252657365727665206f662070726f7669646564206c656e6461626c6520746f6b656e732069736e277420696e697469616c697a6564207965744f6e6c79207061697220666163746f727920697320616c6c6f77656420746f2063616c6c2074686973206d6574686f64556e61626c6520746f2066696e64207265736572766520666f722070726f7669646564206c656e6461626c6520746f6b656ea2646970667358221220b520adf6e26eb9ba9f6f0d52341600f1e7dfec0ff2d113b68296ec815ebd745364736f6c63430007040033";

export class Errors__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Errors> {
    return super.deploy(overrides || {}) as Promise<Errors>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Errors {
    return super.attach(address) as Errors;
  }
  connect(signer: Signer): Errors__factory {
    return super.connect(signer) as Errors__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ErrorsInterface {
    return new utils.Interface(_abi) as ErrorsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Errors {
    return new Contract(address, _abi, signerOrProvider) as Errors;
  }
}

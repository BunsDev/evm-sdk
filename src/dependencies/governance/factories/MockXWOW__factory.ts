/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockXWOW, MockXWOWInterface } from "../MockXWOW";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
    ],
    name: "burnAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "treasurer",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintAndRegister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
    ],
    name: "removeAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600481526020016378574f5760e01b8152506040518060400160405280600481526020016378574f5760e01b81525060126000838381600390805190602001906200006a92919062000245565b5080516200008090600490602084019062000245565b50506005805460ff19166012179055506200009b82620000b9565b620000af3360ff8416600a0a8302620000cf565b50505050620002f1565b6005805460ff191660ff92909216919091179055565b6001600160a01b0382166200012b576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6200013960008383620001de565b6200015581600254620001e360201b620009b91790919060201c565b6002556001600160a01b0382166000908152602081815260409091205462000188918390620009b9620001e3821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b6000828201838110156200023e576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200027d5760008555620002c8565b82601f106200029857805160ff1916838001178555620002c8565b82800160010185558215620002c8579182015b82811115620002c8578251825591602001919060010190620002ab565b50620002d6929150620002da565b5090565b5b80821115620002d65760008155600101620002db565b6110a980620003016000396000f3fe6080604052600436106101145760003560e01c80634420e486116100a0578063a457c2d711610064578063a457c2d71461043d578063a9059cbb14610476578063c4d66de8146104af578063d0e30db0146104e2578063dd62ed3e146104ea57610114565b80634420e4861461035c57806370a082311461038f5780637e9d2ac1146103c25780638af86cfa146103f557806395d89b411461042857610114565b80632e1a7d4d116100e75780632e1a7d4d1461025a578063313ce5671461028657806333df8267146102b157806339509351146102ea57806340c10f191461032357610114565b806306fdde0314610119578063095ea7b3146101a357806318160ddd146101f057806323b872dd14610217575b600080fd5b34801561012557600080fd5b5061012e610525565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610168578181015183820152602001610150565b50505050905090810190601f1680156101955780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101af57600080fd5b506101dc600480360360408110156101c657600080fd5b506001600160a01b0381351690602001356105bb565b604080519115158252519081900360200190f35b3480156101fc57600080fd5b506102056105d8565b60408051918252519081900360200190f35b34801561022357600080fd5b506101dc6004803603606081101561023a57600080fd5b506001600160a01b038135811691602081013590911690604001356105de565b34801561026657600080fd5b506102846004803603602081101561027d57600080fd5b5035610665565b005b34801561029257600080fd5b5061029b6106d7565b6040805160ff9092168252519081900360200190f35b3480156102bd57600080fd5b50610284600480360360408110156102d457600080fd5b506001600160a01b0381351690602001356106e0565b3480156102f657600080fd5b506101dc6004803603604081101561030d57600080fd5b506001600160a01b03813516906020013561076a565b34801561032f57600080fd5b506102846004803603604081101561034657600080fd5b506001600160a01b0381351690602001356107b8565b34801561036857600080fd5b506102846004803603602081101561037f57600080fd5b50356001600160a01b03166107c2565b34801561039b57600080fd5b50610205600480360360208110156103b257600080fd5b50356001600160a01b0316610841565b3480156103ce57600080fd5b50610284600480360360208110156103e557600080fd5b50356001600160a01b031661085c565b34801561040157600080fd5b506102846004803603602081101561041857600080fd5b50356001600160a01b0316610871565b34801561043457600080fd5b5061012e61087d565b34801561044957600080fd5b506101dc6004803603604081101561046057600080fd5b506001600160a01b0381351690602001356108de565b34801561048257600080fd5b506101dc6004803603604081101561049957600080fd5b506001600160a01b038135169060200135610946565b3480156104bb57600080fd5b50610284600480360360208110156104d257600080fd5b50356001600160a01b031661095a565b610284610982565b3480156104f657600080fd5b506102056004803603604081101561050d57600080fd5b506001600160a01b038135811691602001351661098e565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105b15780601f10610586576101008083540402835291602001916105b1565b820191906000526020600020905b81548152906001019060200180831161059457829003601f168201915b5050505050905090565b60006105cf6105c8610a1a565b8484610a1e565b50600192915050565b60025490565b60006105eb848484610b0a565b61065b846105f7610a1a565b61065685604051806060016040528060288152602001610fbd602891396001600160a01b038a16600090815260016020526040812090610635610a1a565b6001600160a01b031681526020810191909152604001600020549190610c65565b610a1e565b5060019392505050565b8061066f33610841565b101561069c576040805162461bcd60e51b8152602060048201526000602482015290519081900360640190fd5b6106a63382610cfc565b604051339082156108fc029083906000818181858888f193505050501580156106d3573d6000803e3d6000fd5b5050565b60055460ff1690565b6106ea8282610df8565b600560019054906101000a90046001600160a01b03166001600160a01b0316634420e486836040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b15801561074e57600080fd5b505af1158015610762573d6000803e3d6000fd5b505050505050565b60006105cf610777610a1a565b846106568560016000610788610a1a565b6001600160a01b03908116825260208083019390935260409182016000908120918c1681529252902054906109b9565b6106d38282610df8565b600560019054906101000a90046001600160a01b03166001600160a01b0316634420e486826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b15801561082657600080fd5b505af115801561083a573d6000803e3d6000fd5b5050505050565b6001600160a01b031660009081526020819052604090205490565b61086e8161086983610841565b610cfc565b50565b61086e81336000610a1e565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105b15780601f10610586576101008083540402835291602001916105b1565b60006105cf6108eb610a1a565b846106568560405180606001604052806025815260200161104f6025913960016000610915610a1a565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610c65565b60006105cf610953610a1a565b8484610b0a565b600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b61098c3334610df8565b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600082820183811015610a13576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b6001600160a01b038316610a635760405162461bcd60e51b815260040180806020018281038252602481526020018061102b6024913960400191505060405180910390fd5b6001600160a01b038216610aa85760405162461bcd60e51b8152600401808060200182810382526022815260200180610f756022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610b4f5760405162461bcd60e51b81526004018080602001828103825260258152602001806110066025913960400191505060405180910390fd5b6001600160a01b038216610b945760405162461bcd60e51b8152600401808060200182810382526023815260200180610f306023913960400191505060405180910390fd5b610b9f838383610ee8565b610bdc81604051806060016040528060268152602001610f97602691396001600160a01b0386166000908152602081905260409020549190610c65565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610c0b90826109b9565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610cf45760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610cb9578181015183820152602001610ca1565b50505050905090810190601f168015610ce65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b038216610d415760405162461bcd60e51b8152600401808060200182810382526021815260200180610fe56021913960400191505060405180910390fd5b610d4d82600083610ee8565b610d8a81604051806060016040528060228152602001610f53602291396001600160a01b0385166000908152602081905260409020549190610c65565b6001600160a01b038316600090815260208190526040902055600254610db09082610eed565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6001600160a01b038216610e53576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610e5f60008383610ee8565b600254610e6c90826109b9565b6002556001600160a01b038216600090815260208190526040902054610e9290826109b9565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b6000610a1383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610c6556fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220b79d9de5503c07403000743408fb2b3eacd70b6be16c3928d8ca8f9aa34cd7f064736f6c63430007040033";

export class MockXWOW__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockXWOW> {
    return super.deploy(overrides || {}) as Promise<MockXWOW>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockXWOW {
    return super.attach(address) as MockXWOW;
  }
  connect(signer: Signer): MockXWOW__factory {
    return super.connect(signer) as MockXWOW__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockXWOWInterface {
    return new utils.Interface(_abi) as MockXWOWInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockXWOW {
    return new Contract(address, _abi, signerOrProvider) as MockXWOW;
  }
}

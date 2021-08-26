/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockReentrantToken,
  MockReentrantTokenInterface,
} from "../MockReentrantToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
    ],
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "callDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "callRepay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "callWithdraw",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000fd238038062000fd2833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b506040526020908101518551909350620001b9925060049186019062000376565b508151620001cf90600590602085019062000376565b506006805460ff19166012179055620001f333670de0b6b3a76400008302620001fc565b50505062000422565b6001600160a01b03821662000258576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b62000266600083836200030f565b62000282816003546200031460201b620005ac1790919060201c565b6003556001600160a01b038216600090815260016020908152604090912054620002b7918390620005ac62000314821b17901c565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b6000828201838110156200036f576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620003ae5760008555620003f9565b82601f10620003c957805160ff1916838001178555620003f9565b82800160010185558215620003f9579182015b82811115620003f9578251825591602001919060010190620003dc565b50620004079291506200040b565b5090565b5b808211156200040757600081556001016200040c565b610ba080620004326000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a9059cbb11610066578063a9059cbb146102aa578063b0561417146102d6578063dad901be146102de578063dd62ed3e146102e6576100ea565b806370a082311461025057806395d89b4114610276578063a457c2d71461027e576100ea565b806318fb75f4116100c857806318fb75f4146101c657806323b872dd146101d0578063313ce567146102065780633950935114610224576100ea565b806306fdde03146100ef578063095ea7b31461016c57806318160ddd146101ac575b600080fd5b6100f7610314565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610131578181015183820152602001610119565b50505050905090810190601f16801561015e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101986004803603604081101561018257600080fd5b506001600160a01b0381351690602001356103aa565b604080519115158252519081900360200190f35b6101b46103c0565b60408051918252519081900360200190f35b6101ce6103c6565b005b610198600480360360608110156101e657600080fd5b506001600160a01b038135811691602081013590911690604001356103d6565b61020e61043f565b6040805160ff9092168252519081900360200190f35b6101986004803603604081101561023a57600080fd5b506001600160a01b038135169060200135610448565b6101b46004803603602081101561026657600080fd5b50356001600160a01b031661047e565b6100f76104a5565b6101986004803603604081101561029457600080fd5b506001600160a01b038135169060200135610506565b610198600480360360408110156102c057600080fd5b506001600160a01b038135169060200135610555565b6101ce610562565b6101ce610570565b6101b4600480360360408110156102fc57600080fd5b506001600160a01b0381358116916020013516610581565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103a05780601f10610375576101008083540402835291602001916103a0565b820191906000526020600020905b81548152906001019060200180831161038357829003601f168201915b5050505050905090565b60006103b733848461060d565b50600192915050565b60035490565b6611115413d4d25560ca1b600055565b60006103e38484846106f9565b610435843361043085604051806060016040528060288152602001610ad5602891396001600160a01b038a1660009081526002602090815260408083203384529091529020549190610856565b61060d565b5060019392505050565b60065460ff1690565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916103b791859061043090866105ac565b6000610489336108ed565b506001600160a01b031660009081526001602052604090205490565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103a05780601f10610375576101008083540402835291602001916103a0565b60006103b7338461043085604051806060016040528060258152602001610b46602591393360009081526002602090815260408083206001600160a01b038d1684529091529020549190610856565b60006103b73384846106f9565b64524550415960d81b600055565b67574954484452415760c01b600055565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b600082820183811015610606576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b0383166106525760405162461bcd60e51b8152600401808060200182810382526024815260200180610b226024913960400191505060405180910390fd5b6001600160a01b0382166106975760405162461bcd60e51b8152600401808060200182810382526022815260200180610a8d6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03831661073e5760405162461bcd60e51b8152600401808060200182810382526025815260200180610afd6025913960400191505060405180910390fd5b6001600160a01b0382166107835760405162461bcd60e51b8152600401808060200182810382526023815260200180610a6a6023913960400191505060405180910390fd5b61078e838383610a63565b6107cb81604051806060016040528060268152602001610aaf602691396001600160a01b0386166000908152600160205260409020549190610856565b6001600160a01b0380851660009081526001602052604080822093909355908416815220546107fa90826105ac565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156108e55760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108aa578181015183820152602001610892565b50505050905090810190601f1680156108d75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000546611115413d4d25560ca1b1415610964576040805163f340fa0160e01b815260006004820181905291516001600160a01b0384169263f340fa01926024808201939182900301818387803b15801561094757600080fd5b505af115801561095b573d6000803e3d6000fd5b50505050610a66565b60005467574954484452415760c01b14156109c6576040805163f940e38560e01b81526000600482018190526024820181905291516001600160a01b0384169263f940e385926044808201939182900301818387803b15801561094757600080fd5b60005464524550415960d81b1415610a6657806001600160a01b0316636ed671e86000806040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b0316815260200192505050602060405180830381600087803b158015610a3957600080fd5b505af1158015610a4d573d6000803e3d6000fd5b505050506040513d6020811015610a6357600080fd5b50505b5056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212205a8c20e1c8d69b189e72958a675920ed7be4a17600a812aa81f1a4ca07bee8d864736f6c63430007040033";

export class MockReentrantToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    tokenName: string,
    tokenSymbol: string,
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockReentrantToken> {
    return super.deploy(
      tokenName,
      tokenSymbol,
      supply,
      overrides || {}
    ) as Promise<MockReentrantToken>;
  }
  getDeployTransaction(
    tokenName: string,
    tokenSymbol: string,
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      tokenName,
      tokenSymbol,
      supply,
      overrides || {}
    );
  }
  attach(address: string): MockReentrantToken {
    return super.attach(address) as MockReentrantToken;
  }
  connect(signer: Signer): MockReentrantToken__factory {
    return super.connect(signer) as MockReentrantToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockReentrantTokenInterface {
    return new utils.Interface(_abi) as MockReentrantTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockReentrantToken {
    return new Contract(address, _abi, signerOrProvider) as MockReentrantToken;
  }
}

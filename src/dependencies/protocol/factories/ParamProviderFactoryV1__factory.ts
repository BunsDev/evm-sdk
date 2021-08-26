/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ParamProviderFactoryV1,
  ParamProviderFactoryV1Interface,
} from "../ParamProviderFactoryV1";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "REVISION",
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
        name: "lendable",
        type: "address",
      },
      {
        internalType: "address",
        name: "tradable",
        type: "address",
      },
    ],
    name: "createPairParamProvider",
    outputs: [
      {
        internalType: "address",
        name: "paramProvider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lendable",
        type: "address",
      },
    ],
    name: "createReserveParamProvider",
    outputs: [
      {
        internalType: "address",
        name: "paramProvider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lendable",
        type: "address",
      },
      {
        internalType: "address",
        name: "tradable",
        type: "address",
      },
    ],
    name: "getPairParamProvider",
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
        internalType: "address",
        name: "lendable",
        type: "address",
      },
    ],
    name: "getReserveParamProvider",
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
        internalType: "address",
        name: "reserveFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "pairFactory",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "baseBorrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optimalSlope",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "excessSlope",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optimalUtilization",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasureFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolUtilizationAllowance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "traderProfitFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationMargin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxLeverageFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxRateMultiplier",
            type: "uint256",
          },
        ],
        internalType: "struct ProtocolParameters",
        name: "defaultParameters",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "lendables",
        type: "address[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maxLiquidationReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minPositionDeposit",
            type: "uint256",
          },
        ],
        internalType: "struct TokenParameters[]",
        name: "lendableParameters",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "leverageFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minWOWBalance",
            type: "uint256",
          },
        ],
        internalType: "struct MinWOWBalanceParameters[]",
        name: "minWOWBalances",
        type: "tuple[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612f2a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638da5cb5b116100665780638da5cb5b146100f15780638f07b5d8146100f9578063dde43cba1461010c578063f21be58814610121578063f2fde38b1461013457610093565b806336e9919a14610098578063715018a6146100c15780637b0551f8146100cb5780638633da36146100de575b600080fd5b6100ab6100a6366004610c50565b610147565b6040516100b89190610e43565b60405180910390f35b6100c9610220565b005b6100ab6100d9366004610c2f565b6102e0565b6100ab6100ec366004610c50565b610302565b6100ab61032d565b6100c9610107366004610c82565b61033d565b610114610512565b6040516100b89190610f4b565b6100ab61012f366004610c2f565b610517565b6100c9610142366004610c2f565b6105ba565b610167546000906001600160a01b031661015f6106d1565b6001600160a01b031614604051806060016040528060308152602001612e9d60309139906101a95760405162461bcd60e51b81526004016101a09190610f38565b60405180910390fd5b506101dc8384846040516020016101c1929190610e1c565b604051602081830303815290604052805190602001206106d5565b6001600160a01b0393841660009081526101756020908152604080832095871683529490529290922080546001600160a01b03191693831693909317909255919050565b6102286106d1565b6001600160a01b031661023961032d565b6001600160a01b031614610294576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610134546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a361013480546001600160a01b0319169055565b6001600160a01b0380821660009081526101766020526040902054165b919050565b6001600160a01b03918216600090815261017560209081526040808320938516835292905220541690565b610134546001600160a01b031690565b600054610100900460ff16806103565750610356610817565b80610364575060005460ff16155b61039f5760405162461bcd60e51b815260040180806020018281038252602e815260200180612e6f602e913960400191505060405180910390fd5b600054610100900460ff161580156103ca576000805460ff1961ff0019909116610100171660011790555b6103d2610828565b6103da6108ca565b6103e2610967565b8584146103ee57600080fd5b60005b8681101561045e5785858281811061040557fe5b90506040020161017760008a8a8581811061041c57fe5b90506020020160208101906104319190610c2f565b6001600160a01b0316815260208101919091526040016000206104548282610f54565b50506001016103f1565b5060005b828110156104b15761017884848381811061047957fe5b8354600181018555600094855260209094206040909102929092019260020290910190506104a78282610f54565b5050600101610462565b5061016680546001600160a01b03808d166001600160a01b0319928316179092556101678054928c1692909116919091179055876101686104f28282610f66565b50508015610506576000805461ff00191690555b50505050505050505050565b600181565b610166546000906001600160a01b031661052f6106d1565b6001600160a01b031614604051806060016040528060338152602001612e3c60339139906105705760405162461bcd60e51b81526004016101a09190610f38565b5061058682836040516020016101c19190610dff565b6001600160a01b0392831660009081526101766020526040902080546001600160a01b031916938216939093179092555090565b6105c26106d1565b6001600160a01b03166105d361032d565b6001600160a01b03161461062e576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166106735760405162461bcd60e51b8152600401808060200182810382526026815260200180612e166026913960400191505060405180910390fd5b610134546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a361013480546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6000610703604051806020016106ea90610b72565b601f1982820381018352601f9091011660405283610a5a565b905060006107336040518060200161071a90610b7f565b601f1982820381018352601f9091011660405284610a5a565b905060606360fa042560e01b61074761032d565b6001600160a01b0387166000908152610177602052604090819020905161077992916101689161017890602401610e8c565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905163cf7a1d7760e01b81529091506001600160a01b0384169063cf7a1d77906107dd90859030908690600401610e57565b600060405180830381600087803b1580156107f757600080fd5b505af115801561080b573d6000803e3d6000fd5b50505050505092915050565b600061082230610a6d565b15905090565b600054610100900460ff16806108415750610841610817565b8061084f575060005460ff16155b61088a5760405162461bcd60e51b815260040180806020018281038252602e815260200180612e6f602e913960400191505060405180910390fd5b600054610100900460ff161580156108b5576000805460ff1961ff0019909116610100171660011790555b80156108c7576000805461ff00191690555b50565b600054610100900460ff16806108e357506108e3610817565b806108f1575060005460ff16155b61092c5760405162461bcd60e51b815260040180806020018281038252602e815260200180612e6f602e913960400191505060405180910390fd5b600054610100900460ff16158015610957576000805460ff1961ff0019909116610100171660011790555b61095f610828565b6108b5610a73565b600054610100900460ff16806109805750610980610817565b8061098e575060005460ff16155b6109c95760405162461bcd60e51b815260040180806020018281038252602e815260200180612e6f602e913960400191505060405180910390fd5b600054610100900460ff161580156109f4576000805460ff1961ff0019909116610100171660011790555b6033546109ff610b6d565b11610a3b5760405162461bcd60e51b8152600401808060200182810382526028815260200180612ecd6028913960400191505060405180910390fd5b610a43610b6d565b60335580156108c7576000805461ff001916905550565b6000818351602085016000f59392505050565b3b151590565b600054610100900460ff1680610a8c5750610a8c610817565b80610a9a575060005460ff16155b610ad55760405162461bcd60e51b815260040180806020018281038252602e815260200180612e6f602e913960400191505060405180910390fd5b600054610100900460ff16158015610b00576000805460ff1961ff0019909116610100171660011790555b6000610b0a6106d1565b61013480546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35080156108c7576000805461ff001916905550565b600190565b6109438061105083390190565b6114838061199383390190565b80356001600160a01b03811681146102fd57600080fd5b60008083601f840112610bb4578182fd5b50813567ffffffffffffffff811115610bcb578182fd5b6020830191508360208083028501011115610be557600080fd5b9250929050565b60008083601f840112610bfd578182fd5b50813567ffffffffffffffff811115610c14578182fd5b602083019150836020604083028501011115610be557600080fd5b600060208284031215610c40578081fd5b610c4982610b8c565b9392505050565b60008060408385031215610c62578081fd5b610c6b83610b8c565b9150610c7960208401610b8c565b90509250929050565b6000806000806000806000806000898b03610200811215610ca1578586fd5b610caa8b610b8c565b9950610cb860208c01610b8c565b9850610160603f1982011215610ccc578586fd5b5060408a0196506101a08a013567ffffffffffffffff80821115610cee578687fd5b610cfa8d838e01610ba3565b90985096506101c08c0135915080821115610d13578586fd5b610d1f8d838e01610bec565b90965094506101e08c0135915080821115610d38578384fd5b50610d458c828d01610bec565b915080935050809150509295985092959850929598565b6000815480845260208401935082825260208220825b82811015610d9a57610d848683610def565b6040959095019460029190910190600101610d72565b5093949350505050565b60008151808452815b81811015610dc957602081850181015186830182015201610dad565b81811115610dda5782602083870101525b50601f01601f19169290920160200192915050565b8054825260010154602090910152565b60609190911b6bffffffffffffffffffffffff1916815260140190565b6bffffffffffffffffffffffff19606093841b811682529190921b16601482015260280190565b6001600160a01b0391909116815260200190565b6001600160a01b03848116825283166020820152606060408201819052600090610e8390830184610da4565b95945050505050565b6001600160a01b038516815283546020820152600184015460408201526002840154606082015260038401546080820152600484015460a0820152600584015460c0820152600684015460e0820152600784015461010082015260088401546101208201526009840154610140820152600a84015461016082015260006101e0610f1a610180840186610def565b806101c0840152610f2d81840185610d5c565b979650505050505050565b600060208252610c496020830184610da4565b90815260200190565b81358155602082013560018201555050565b6000610f7483358284611030565b610f8660208401358260018501611030565b610f9860408401358260028501611030565b610faa60608401358260038501611030565b610fbc60808401358260048501611030565b610fce60a08401358260058501611030565b610fe060c08401358260068501611030565b610ff260e08401358260078501611030565b6110056101008401358260088501611030565b6110186101208401358260098501611030565b61102b61014084013582600a8501611030565b505050565b805460088302600019811b8086831b168119841617845550505050505056fe608060405234801561001057600080fd5b50610923806100206000396000f3fe6080604052600436106100745760003560e01c80638f2839701161004e5780638f2839701461017c578063cf7a1d77146101af578063d1f578941461026e578063f851a4401461032457610083565b80633659cfe6146100985780634f1ef286146100cb5780635c60da1b1461014b57610083565b3661008357610081610339565b005b34801561008f57600080fd5b50610081610339565b3480156100a457600080fd5b50610081600480360360208110156100bb57600080fd5b50356001600160a01b0316610353565b610081600480360360408110156100e157600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561010c57600080fd5b82018360208201111561011e57600080fd5b8035906020019184600183028401116401000000008311171561014057600080fd5b50909250905061038d565b34801561015757600080fd5b5061016061043a565b604080516001600160a01b039092168252519081900360200190f35b34801561018857600080fd5b506100816004803603602081101561019f57600080fd5b50356001600160a01b0316610477565b610081600480360360608110156101c557600080fd5b6001600160a01b0382358116926020810135909116918101906060810160408201356401000000008111156101f957600080fd5b82018360208201111561020b57600080fd5b8035906020019184600183028401116401000000008311171561022d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610531945050505050565b6100816004803603604081101561028457600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156102af57600080fd5b8201836020820111156102c157600080fd5b803590602001918460018302840111640100000000831117156102e357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610561945050505050565b34801561033057600080fd5b50610160610641565b61034161066c565b61035161034c610674565b610699565b565b61035b6106bd565b6001600160a01b0316336001600160a01b031614156103825761037d816106e2565b61038a565b61038a610339565b50565b6103956106bd565b6001600160a01b0316336001600160a01b0316141561042d576103b7836106e2565b6000836001600160a01b031683836040518083838082843760405192019450600093509091505080830381855af49150503d8060008114610414576040519150601f19603f3d011682016040523d82523d6000602084013e610419565b606091505b505090508061042757600080fd5b50610435565b610435610339565b505050565b60006104446106bd565b6001600160a01b0316336001600160a01b0316141561046c57610465610674565b9050610474565b610474610339565b90565b61047f6106bd565b6001600160a01b0316336001600160a01b03161415610382576001600160a01b0381166104dd5760405162461bcd60e51b815260040180806020018281038252603681526020018061087d6036913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6105066106bd565b604080516001600160a01b03928316815291841660208301528051918290030190a161037d81610722565b600061053b610674565b6001600160a01b03161461054e57600080fd5b6105588382610561565b61043582610722565b600061056b610674565b6001600160a01b03161461057e57600080fd5b61058782610746565b80511561063d576000826001600160a01b0316826040518082805190602001908083835b602083106105ca5780518252601f1990920191602091820191016105ab565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461062a576040519150601f19603f3d011682016040523d82523d6000602084013e61062f565b606091505b505090508061043557600080fd5b5050565b600061064b6106bd565b6001600160a01b0316336001600160a01b0316141561046c576104656106bd565b6103516107ae565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e8080156106b8573d6000f35b3d6000fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6106eb81610746565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b61074f8161080e565b61078a5760405162461bcd60e51b815260040180806020018281038252603b8152602001806108b3603b913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6107b66106bd565b6001600160a01b0316336001600160a01b031614156108065760405162461bcd60e51b815260040180806020018281038252603281526020018061084b6032913960400191505060405180910390fd5b610351610351565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061084257508115155b94935050505056fe43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e2066726f6d207468652070726f78792061646d696e43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f787920746f20746865207a65726f206164647265737343616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373a2646970667358221220bde8e9c96b8d3ffcd547b02f95c6dc560f1a05011a8dd6c847e5a9a2cff37c7364736f6c63430007040033608060405234801561001057600080fd5b50611463806100206000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c8063715018a61161011a578063b2c53a6c116100ad578063cc70cd411161007c578063cc70cd41146103bd578063d0704a67146103d0578063dde43cba146103e3578063f2fde38b146103eb578063fb844c2c146103fe57610206565b8063b2c53a6c14610392578063b339b3681461039a578063bf386682146103a2578063c8fad694146103aa57610206565b80638da5cb5b116100e95780638da5cb5b1461034f5780639a3418d514610364578063ab78ace414610377578063ac8a7bac1461037f57610206565b8063715018a6146103195780637629da6f1461032157806379da16c4146103345780637f1857611461034757610206565b80633e29d70a1161019d5780635f4985c41161016c5780635f4985c4146102d057806360fa0425146102d85780636290cd1c146102eb5780636b000606146102f35780636e34394a1461030657610206565b80633e29d70a1461029a57806344b01c56146102ad5780634845a820146102b55780635d03baea146102c857610206565b806323616d45116101d957806323616d4514610264578063255bb3a91461027757806327b182921461027f57806337ae0f1b1461029257610206565b80630a8836901461020b5780630c9c81a1146102205780631d9cdcd2146102335780632262697e14610246575b600080fd5b61021e610219366004611245565b610406565b005b61021e61022e366004611245565b61046e565b61021e610241366004611245565b6104d6565b61024e61053e565b60405161025b9190611292565b60405180910390f35b61021e610272366004611245565b610545565b61024e6105ad565b61024e61028d366004611245565b6105b4565b61024e6105e3565b61021e6102a8366004611245565b6105ea565b61024e610652565b61021e6102c3366004611245565b610659565b61024e6106c1565b61024e6106c8565b61021e6102e6366004611179565b6106cf565b61024e610806565b61021e610301366004611245565b61080d565b61021e61031436600461125d565b610875565b61021e6108f9565b61021e61032f366004611245565b6109a5565b61021e610342366004611229565b610a0d565b61024e610a82565b610357610a89565b60405161025b919061127e565b61021e610372366004611245565b610a98565b61024e610b00565b61021e61038d366004611245565b610b07565b61024e610b6f565b61024e610b76565b61024e610b7d565b61021e6103b8366004611245565b610b84565b61021e6103cb366004611245565b610bec565b61021e6103de366004611245565b610c54565b61024e610cbc565b61021e6103f9366004611158565b610cc1565b61024e610dc4565b61040e610dcb565b6001600160a01b031661041f610a89565b6001600160a01b031614610468576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016955565b610476610dcb565b6001600160a01b0316610487610a89565b6001600160a01b0316146104d0576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016655565b6104de610dcb565b6001600160a01b03166104ef610a89565b6001600160a01b031614610538576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016b55565b61016d5490565b61054d610dcb565b6001600160a01b031661055e610a89565b6001600160a01b0316146105a7576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016755565b6101685490565b60006127108083048102908306156105cb57612710015b6000908152610173602052604090205490505b919050565b61016c5490565b6105f2610dcb565b6001600160a01b0316610603610a89565b6001600160a01b03161461064c576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61017255565b6101675490565b610661610dcb565b6001600160a01b0316610672610a89565b6001600160a01b0316146106bb576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016e55565b61016b5490565b6101725490565b600054610100900460ff16806106e857506106e8610dcf565b806106f6575060005460ff16155b6107315760405162461bcd60e51b815260040180806020018281038252602e8152602001806113b8602e913960400191505060405180910390fd5b600054610100900460ff1615801561075c576000805460ff1961ff0019909116610100171660011790555b610764610de0565b61076c610e92565b61077586610cc1565b84610166610783828261129b565b508490506101716107948282611360565b90505060005b828110156107eb578383828181106107ae57fe5b9050604002016020013561017360008686858181106107c957fe5b604090810292909201358352506020820192909252016000205560010161079a565b5080156107fe576000805461ff00191690555b505050505050565b6101695490565b610815610dcb565b6001600160a01b0316610826610a89565b6001600160a01b03161461086f576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016d55565b61087d610dcb565b6001600160a01b031661088e610a89565b6001600160a01b0316146108d7576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b6127108206156108e657600080fd5b6000918252610173602052604090912055565b610901610dcb565b6001600160a01b0316610912610a89565b6001600160a01b03161461095b576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6109ad610dcb565b6001600160a01b03166109be610a89565b6001600160a01b031614610a07576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016f55565b610a15610dcb565b6001600160a01b0316610a26610a89565b6001600160a01b031614610a6f576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b80610166610a7d828261129b565b505050565b61016a5490565b6033546001600160a01b031690565b610aa0610dcb565b6001600160a01b0316610ab1610a89565b6001600160a01b031614610afa576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61017155565b6101715490565b610b0f610dcb565b6001600160a01b0316610b20610a89565b6001600160a01b031614610b69576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016855565b61016f5490565b61016e5490565b6101665490565b610b8c610dcb565b6001600160a01b0316610b9d610a89565b6001600160a01b031614610be6576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016c55565b610bf4610dcb565b6001600160a01b0316610c05610a89565b6001600160a01b031614610c4e576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016a55565b610c5c610dcb565b6001600160a01b0316610c6d610a89565b6001600160a01b031614610cb6576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61017055565b600181565b610cc9610dcb565b6001600160a01b0316610cda610a89565b6001600160a01b031614610d23576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b6001600160a01b038116610d685760405162461bcd60e51b81526004018080602001828103825260268152602001806113926026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b6101705490565b3390565b6000610dda30610f85565b15905090565b600054610100900460ff1680610df95750610df9610dcf565b80610e07575060005460ff16155b610e425760405162461bcd60e51b815260040180806020018281038252602e8152602001806113b8602e913960400191505060405180910390fd5b600054610100900460ff16158015610e6d576000805460ff1961ff0019909116610100171660011790555b610e75610f8b565b610e7d61102b565b8015610e8f576000805461ff00191690555b50565b600054610100900460ff1680610eab5750610eab610dcf565b80610eb9575060005460ff16155b610ef45760405162461bcd60e51b815260040180806020018281038252602e8152602001806113b8602e913960400191505060405180910390fd5b600054610100900460ff16158015610f1f576000805460ff1961ff0019909116610100171660011790555b606554610f2a611124565b11610f665760405162461bcd60e51b81526004018080602001828103825260288152602001806114066028913960400191505060405180910390fd5b610f6e611124565b6065558015610e8f576000805461ff001916905550565b3b151590565b600054610100900460ff1680610fa45750610fa4610dcf565b80610fb2575060005460ff16155b610fed5760405162461bcd60e51b815260040180806020018281038252602e8152602001806113b8602e913960400191505060405180910390fd5b600054610100900460ff16158015610e7d576000805460ff1961ff0019909116610100171660011790558015610e8f576000805461ff001916905550565b600054610100900460ff16806110445750611044610dcf565b80611052575060005460ff16155b61108d5760405162461bcd60e51b815260040180806020018281038252602e8152602001806113b8602e913960400191505060405180910390fd5b600054610100900460ff161580156110b8576000805460ff1961ff0019909116610100171660011790555b60006110c2610dcb565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610e8f576000805461ff001916905550565b600190565b80356001600160a01b03811681146105de57600080fd5b60006101608284031215611152578081fd5b50919050565b600060208284031215611169578081fd5b61117282611129565b9392505050565b60008060008060008587036101e0811215611192578182fd5b61119b87611129565b95506111aa8860208901611140565b9450604061017f19820112156111be578182fd5b50610180860192506101c086013567ffffffffffffffff808211156111e1578283fd5b818801915088601f8301126111f4578283fd5b813581811115611202578384fd5b896020604083028501011115611216578384fd5b9699959850939650602001949392505050565b6000610160828403121561123b578081fd5b6111728383611140565b600060208284031215611256578081fd5b5035919050565b6000806040838503121561126f578182fd5b50508035926020909101359150565b6001600160a01b0391909116815260200190565b90815260200190565b60006112a983358284611372565b6112bb60208401358260018501611372565b6112cd60408401358260028501611372565b6112df60608401358260038501611372565b6112f160808401358260048501611372565b61130360a08401358260058501611372565b61131560c08401358260068501611372565b61132760e08401358260078501611372565b61133a6101008401358260088501611372565b61134d6101208401358260098501611372565b610a7d61014084013582600a8501611372565b81358155602082013560018201555050565b805460088302600019811b8086831b168119841617845550505050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657256657273696f6e65643a207265766973696f6e20697320746f6f206c6f7720746f20757064617465a26469706673582212203e6aa7b961622cea8c3c4ba183d455251a874663c21fecfc6df8d5afa108c92164736f6c634300070400334f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f6e6c79207265736572766520666163746f727920697320616c6c6f77656420746f2063616c6c2074686973206d6574686f64496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65644f6e6c79207061697220666163746f727920697320616c6c6f77656420746f2063616c6c2074686973206d6574686f6456657273696f6e65643a207265766973696f6e20697320746f6f206c6f7720746f20757064617465a264697066735822122002ac2e12766e3b6dc11736d6935d41b2bc395fb66a4ab19173bdfb609ac46c3264736f6c63430007040033";

export class ParamProviderFactoryV1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ParamProviderFactoryV1> {
    return super.deploy(overrides || {}) as Promise<ParamProviderFactoryV1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ParamProviderFactoryV1 {
    return super.attach(address) as ParamProviderFactoryV1;
  }
  connect(signer: Signer): ParamProviderFactoryV1__factory {
    return super.connect(signer) as ParamProviderFactoryV1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ParamProviderFactoryV1Interface {
    return new utils.Interface(_abi) as ParamProviderFactoryV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ParamProviderFactoryV1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ParamProviderFactoryV1;
  }
}

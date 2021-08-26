/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ParamProvider, ParamProviderInterface } from "../ParamProvider";

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
    name: "ACCURACY_DIVISOR",
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
    name: "FEE_TOKEN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    inputs: [],
    name: "WOW",
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
    name: "baseBorrowRate",
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
    name: "excessSlope",
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
    name: "feeToken",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "paramGovernance",
        type: "address",
      },
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidationMargin",
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
    name: "liquidationReward",
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
    name: "maxLeverageFactor",
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
    name: "maxLiquidationReward",
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
    name: "maxPriceThreshold",
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
    name: "maxRateMultiplier",
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
    name: "minPositionDeposit",
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
        internalType: "uint256",
        name: "leverageFactor",
        type: "uint256",
      },
    ],
    name: "minWOWBalance",
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
    name: "optimalSlope",
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
    name: "optimalUtilization",
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
    name: "overrideAddress",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "overrideParam",
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
    name: "paramGovernance",
    outputs: [
      {
        internalType: "contract IParamGovernance",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolUtilizationAllowance",
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
    name: "priceGuard",
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
    name: "referralFirstBonus",
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
    name: "referralProgram",
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
    name: "referralSecondBonus",
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
    name: "referralThirdBonus",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
    ],
    name: "reset",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "setMaxLeverageFactor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "paramGovernance",
        type: "address",
      },
    ],
    name: "setParamGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "setPriceGuard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "setSwapRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenConverter",
        type: "address",
      },
    ],
    name: "setTokenConverter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
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
    name: "tokenConverter",
    outputs: [
      {
        internalType: "contract IPriceGuard",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "traderProfitFee",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasureFactor",
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
    name: "treasurer",
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
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xWOW",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611800806100206000396000f3fe608060405234801561001057600080fd5b50600436106102695760003560e01c806395e0f9fd11610151578063c56aa166116100c3578063eb990c5911610087578063eb990c5914610408578063ed3c7d401461041b578063f2fde38b1461042e578063f5e0f74c14610441578063fb844c2c14610454578063fda49eb41461045c57610269565b8063c56aa166146103d5578063cdc42344146103e8578063d55ec697146103f0578063dde43cba146103f8578063dfabb4d71461040057610269565b8063ade8d43c11610115578063ade8d43c1461039a578063b2c53a6c146103ad578063b339b368146103b5578063b84fe2ab146103bd578063bf386682146103c5578063c31c9c07146103cd57610269565b806395e0f9fd14610367578063a67aee1f1461037a578063ab78ace414610382578063acdd82431461038a578063ad214e1a1461039257610269565b80635d03baea116101ea578063715018a6116101ae578063715018a61461032c57806373717b08146103345780637629da6f1461033c5780637f1857611461034f5780638da5cb5b146103575780638fea21071461035f57610269565b80635d03baea146102f95780635f4985c4146103015780636290cd1c1461030957806362a1858214610311578063647846a51461032457610269565b806336d8b0cc1161023157806336d8b0cc146102b757806337ae0f1b146102cc5780633cbb3a12146102d457806341273657146102dc57806344b01c56146102f157610269565b8063091ec88e1461026e5780631e70ad0a1461028c5780632262697e14610294578063255bb3a91461029c57806327b18292146102a4575b600080fd5b610276610464565b6040516102839190611738565b60405180910390f35b610276610470565b610276610493565b6102766104c9565b6102766102b23660046116a4565b6104e3565b6102bf610554565b6040516102839190611724565b61027661056d565b610276610595565b6102ef6102ea366004611627565b6105bf565b005b61027661063c565b610276610657565b61027661068b565b610276610763565b6102ef61031f3660046116eb565b610784565b6102bf6107f4565b6102ef610838565b6102766108e4565b6102ef61034a3660046116a4565b6108f4565b610276610976565b6102bf61099c565b6102766109ab565b6102ef610375366004611627565b6109c9565b6102bf610a43565b610276610a53565b6102bf610abe565b6102bf610b3c565b6102ef6103a8366004611627565b610b4d565b610276610bd2565b610276610bfc565b610276610c25565b610276610c43565b6102bf610c61565b6102ef6103e3366004611627565b610c7a565b6102bf610cff565b6102ef610d1d565b610276610daa565b6102bf610daf565b6102ef61041636600461165f565b610dbf565b6102ef6104293660046116a4565b610e92565b6102ef61043c366004611627565b610f00565b6102ef61044f3660046116bc565b611003565b61027661106f565b6102bf611099565b670de0b6b3a764000081565b600061048e6f2922a322a92920a62fa127a72aa9af9960811b6110b0565b905090565b6000670de0b6b3a76400006104bc712624a8aaa4a220aa24a7a72fa6a0a923a4a760711b6110b0565b816104c357fe5b04905090565b600061048e6b4558434553535f534c4f504560a01b6110b0565b600061c3508211156104f457600080fd5b619c408211156105235761051c714d494e5f574f575f42414c414e43455f583560701b6110b0565b905061054f565b61753082111561054b5761051c7113525397d5d3d5d7d09053105390d157d60d60721b6110b0565b5060005b919050565b600061048e6a14149250d157d1d550549160aa1b611160565b6000670de0b6b3a76400006104bc705452414445525f50524f4649545f46454560781b6110b0565b6000670de0b6b3a76400006104bc7213505617d4149250d157d512149154d213d311606a1b6110b0565b6105c7611213565b6001600160a01b03166105d861099c565b6001600160a01b031614610621576040805162461bcd60e51b815260206004820181905260248201526000805160206117ab833981519152604482015290519081900360640190fd5b6106396a29aba0a82fa927aaaa22a960a91b82611217565b50565b600061048e6c4f5054494d414c5f534c4f504560981b6110b0565b6000670de0b6b3a76400006104bc7f504f4f4c5f5554494c495a4154494f4e5f414c4c4f57414e43450000000000006110b0565b6101ab546000906001600160a01b031615610743576101ab546001600160a01b0316635c1952176106d27313525397d413d4d2551253d397d1115413d4d25560621b6110b0565b6040518263ffffffff1660e01b81526004016106ee9190611738565b60206040518083038186803b15801561070657600080fd5b505afa15801561071a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073e919061170c565b61048e565b61048e7313525397d413d4d2551253d397d1115413d4d25560621b6110b0565b600061048e7227a82a24a6a0a62faaaa24a624ad20aa24a7a760691b6110b0565b61078c611213565b6001600160a01b031661079d61099c565b6001600160a01b0316146107e6576040805162461bcd60e51b815260206004820181905260248201526000805160206117ab833981519152604482015290519081900360640190fd5b6107f08282611253565b5050565b682322a2afaa27a5a2a760b91b6000526101aa6020527f9c07313eff2e43b352f6c3f403cc4ed4b30d45544d09062d45a389338f34dbf3546001600160a01b031690565b610840611213565b6001600160a01b031661085161099c565b6001600160a01b03161461089a576040805162461bcd60e51b815260206004820181905260248201526000805160206117ab833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b682322a2afaa27a5a2a760b91b81565b6108fc611213565b6001600160a01b031661090d61099c565b6001600160a01b031614610956576040805162461bcd60e51b815260206004820181905260248201526000805160206117ab833981519152604482015290519081900360640190fd5b6106397226a0ac2fa622ab22a920a3a2afa320a1aa27a960691b82611253565b6000670de0b6b3a76400006104bc6e2a2922a0a9aaa922afa320a1aa27a960891b6110b0565b6033546001600160a01b031690565b600061048e6f524546455252414c5f424f4e55535f3360801b6110b0565b6109d1611213565b6001600160a01b03166109e261099c565b6001600160a01b031614610a2b576040805162461bcd60e51b815260206004820181905260248201526000805160206117ab833981519152604482015290519081900360640190fd5b6106396a14149250d157d1d550549160aa1b82611217565b6101ab546001600160a01b031690565b6101ab546000906001600160a01b031615610a9c576101ab546001600160a01b0316635c1952176106d27513505617d3125455525110551253d397d49155d0549160521b6110b0565b61048e7513505617d3125455525110551253d397d49155d0549160521b6110b0565b6101a6546040805163acdd824360e01b815290516000926001600160a01b03169163acdd8243916004808301926020929190829003018186803b158015610b0457600080fd5b505afa158015610b18573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048e9190611643565b600061048e62574f5760e81b611160565b610b55611213565b6001600160a01b0316610b6661099c565b6001600160a01b031614610baf576040805162461bcd60e51b815260206004820181905260248201526000805160206117ab833981519152604482015290519081900360640190fd5b6101a680546001600160a01b0319166001600160a01b0392909216919091179055565b6000670de0b6b3a76400006104bc7226a0ac2fa622ab22a920a3a2afa320a1aa27a960691b6110b0565b6000670de0b6b3a76400006104bc7113125455525110551253d397d49155d0549160721b6110b0565b600061048e6f524546455252414c5f424f4e55535f3160801b6110b0565b600061048e6f424153455f424f52524f575f5241544560801b6110b0565b600061048e6a29aba0a82fa927aaaa22a960a91b611160565b610c82611213565b6001600160a01b0316610c9361099c565b6001600160a01b031614610cdc576040805162461bcd60e51b815260206004820181905260248201526000805160206117ab833981519152604482015290519081900360640190fd5b6101ab80546001600160a01b0319166001600160a01b0392909216919091179055565b600061048e6f524546455252414c5f50524f4752414d60801b611160565b610d25611213565b6001600160a01b0316610d3661099c565b6001600160a01b031614610d7f576040805162461bcd60e51b815260206004820181905260248201526000805160206117ab833981519152604482015290519081900360640190fd5b610176546001600160a01b03168015610639576106396a14149250d157d1d550549160aa1b82611217565b602381565b6101a6546001600160a01b031690565b600054610100900460ff1680610dd85750610dd8611273565b80610de6575060005460ff16155b610e215760405162461bcd60e51b815260040180806020018281038252602e81526020018061177d602e913960400191505060405180910390fd5b600054610100900460ff16158015610e4c576000805460ff1961ff0019909116610100171660011790555b610e54611284565b610e5d85610f00565b6101a680546001600160a01b0319166001600160a01b0386161790558015610e8b576000805461ff00191690555b5050505050565b610e9a611213565b6001600160a01b0316610eab61099c565b6001600160a01b031614610ef4576040805162461bcd60e51b815260206004820181905260248201526000805160206117ab833981519152604482015290519081900360640190fd5b6107f06101a782611335565b610f08611213565b6001600160a01b0316610f1961099c565b6001600160a01b031614610f62576040805162461bcd60e51b815260206004820181905260248201526000805160206117ab833981519152604482015290519081900360640190fd5b6001600160a01b038116610fa75760405162461bcd60e51b81526004018080602001828103825260268152602001806117576026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b61100b611213565b6001600160a01b031661101c61099c565b6001600160a01b031614611065576040805162461bcd60e51b815260206004820181905260248201526000805160206117ab833981519152604482015290519081900360640190fd5b6107f08282611217565b6000670de0b6b3a76400006104bc7226a0ac2fa920aa22afa6aaa62a24a82624a2a960691b6110b0565b600061048e682a2922a0a9aaa922a960b91b611160565b60006110be6101a783611348565b156110d9575060008181526101a9602052604090205461054f565b6101a65460405163efc1a9bf60e01b81526001600160a01b039091169063efc1a9bf9061110a908590600401611738565b60206040518083038186803b15801561112257600080fd5b505afa158015611136573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115a919061170c565b92915050565b600061116e6101a783611348565b15611192575060008181526101aa60205260409020546001600160a01b031661054f565b6101a6546040516321f8a72160e01b81526001600160a01b03909116906321f8a721906111c3908590600401611738565b60206040518083038186803b1580156111db57600080fd5b505afa1580156111ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115a9190611643565b3390565b6112236101a783611354565b5060009182526101aa602052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b61125f6101a783611354565b5060009182526101a9602052604090912055565b600061127e30611360565b15905090565b600054610100900460ff168061129d575061129d611273565b806112ab575060005460ff16155b6112e65760405162461bcd60e51b815260040180806020018281038252602e81526020018061177d602e913960400191505060405180910390fd5b600054610100900460ff16158015611311576000805460ff1961ff0019909116610100171660011790555b611319611366565b611321611406565b8015610639576000805461ff001916905550565b600061134183836114ff565b9392505050565b600061134183836115c5565b600061134183836115dd565b3b151590565b600054610100900460ff168061137f575061137f611273565b8061138d575060005460ff16155b6113c85760405162461bcd60e51b815260040180806020018281038252602e81526020018061177d602e913960400191505060405180910390fd5b600054610100900460ff16158015611321576000805460ff1961ff0019909116610100171660011790558015610639576000805461ff001916905550565b600054610100900460ff168061141f575061141f611273565b8061142d575060005460ff16155b6114685760405162461bcd60e51b815260040180806020018281038252602e81526020018061177d602e913960400191505060405180910390fd5b600054610100900460ff16158015611493576000805460ff1961ff0019909116610100171660011790555b600061149d611213565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610639576000805461ff001916905550565b600081815260018301602052604081205480156115bb578354600019808301919081019060009087908390811061153257fe5b906000526020600020015490508087600001848154811061154f57fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061157f57fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061115a565b600091505061115a565b60009081526001919091016020526040902054151590565b60006115e983836115c5565b61161f5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561115a565b50600061115a565b600060208284031215611638578081fd5b813561134181611741565b600060208284031215611654578081fd5b815161134181611741565b60008060008060808587031215611674578283fd5b843561167f81611741565b9350602085013561168f81611741565b93969395505050506040820135916060013590565b6000602082840312156116b5578081fd5b5035919050565b600080604083850312156116ce578182fd5b8235915060208301356116e081611741565b809150509250929050565b600080604083850312156116fd578182fd5b50508035926020909101359150565b60006020828403121561171d578081fd5b5051919050565b6001600160a01b0391909116815260200190565b90815260200190565b6001600160a01b038116811461063957600080fdfe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220aa1efd0d8b53f3d551c7f3878de24070bb4e44ba65840eed5d323c8d562d8f9764736f6c63430007040033";

export class ParamProvider__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ParamProvider> {
    return super.deploy(overrides || {}) as Promise<ParamProvider>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ParamProvider {
    return super.attach(address) as ParamProvider;
  }
  connect(signer: Signer): ParamProvider__factory {
    return super.connect(signer) as ParamProvider__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ParamProviderInterface {
    return new utils.Interface(_abi) as ParamProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ParamProvider {
    return new Contract(address, _abi, signerOrProvider) as ParamProvider;
  }
}
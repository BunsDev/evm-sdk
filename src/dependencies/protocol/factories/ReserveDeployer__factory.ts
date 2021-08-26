/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ReserveDeployer,
  ReserveDeployerInterface,
} from "../ReserveDeployer";

const _abi = [
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
    name: "getReserveImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50614468806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063dde43cba1461003b578063f633418b14610055575b600080fd5b610043610079565b60408051918252519081900360200190f35b61005d61007e565b604080516001600160a01b039092168252519081900360200190f35b602381565b60006100b66040518060200161009390610132565b601f1982820381018352601f90910116604052665265736572766560c81b6100bb565b905090565b60008060ff60f81b308486805190602001206040516020016100e0949392919061013f565b6040516020818303038152906040528051906020012090508060001c915061010782610126565b156101125750610120565b828451602086016000f59150505b92915050565b3b63ffffffff16151590565b6142ba8061017983390190565b6001600160f81b031994909416845260609290921b6bffffffffffffffffffffffff19166001840152601583015260358201526055019056fe608060405234801561001057600080fd5b5061429a806100206000396000f3fe608060405234801561001057600080fd5b50600436106102695760003560e01c8063715018a611610151578063c1bce0b7116100c3578063dde43cba11610087578063dde43cba146104e8578063f2fde38b146104f0578063f340fa0114610503578063f940e38514610516578063fd5668bf14610529578063fe37d7be1461053157610269565b8063c1bce0b71461049d578063c3f909d4146104b0578063d9c55ce1146104c5578063da919335146104cd578063dd62ed3e146104d557610269565b80639b745aec116101155780639b745aec1461043c578063a21c29e814610444578063a457c2d71461044c578063a9059cbb1461045f578063b9248b6814610472578063ba1c5e801461049557610269565b8063715018a6146103fc5780637e13d160146104045780638da5cb5b146104175780638fd3ab801461042c57806395d89b411461043457610269565b806335c7e925116101ea57806346af8562116101ae57806346af856214610395578063498b5ae8146103a85780634a417a53146103bb5780634ec508f9146103c35780636ed671e8146103d657806370a08231146103e957610269565b806335c7e9251461034c578063362925c21461035457806338e3127f14610367578063395093511461036f5780633c4750df1461038257610269565b806321e5e2c41161023157806321e5e2c4146102f457806323b872dd146103075780632f8655681461031a578063313ce5671461032f57806334ce998a1461034457610269565b806306fdde031461026e578063095ea7b31461028c5780630f926b80146102ac57806318160ddd146102c55780631865c57d146102da575b600080fd5b610276610544565b6040516102839190613e94565b60405180910390f35b61029f61029a366004613d1c565b6105dc565b6040516102839190613e89565b6102b46105fa565b604051610283959493929190613fb5565b6102cd610636565b6040516102839190613f21565b6102e261063d565b60405161028396959493929190613fd8565b6102cd610302366004613bc6565b61068e565b61029f610315366004613cdc565b6106ae565b61032d610328366004613bc6565b610737565b005b61033761089e565b6040516102839190614000565b6102cd6108a8565b6102cd6108ba565b61032d610362366004613c36565b6108e6565b61032d610a2b565b61029f61037d366004613d1c565b610e19565b6102cd610390366004613bc6565b610e68565b6102cd6103a3366004613dcb565b610e88565b6102cd6103b6366004613bfe565b610ef0565b6102cd610f08565b6102cd6103d1366004613d9b565b610f2e565b6102cd6103e4366004613bfe565b610f4f565b6102cd6103f7366004613bc6565b6110c7565b61032d6110e3565b6102cd610412366004613def565b6111a1565b61041f6111bb565b6040516102839190613e5b565b61029f6111ca565b6102766111eb565b6102cd61124d565b6102cd611262565b61029f61045a366004613d1c565b611269565b61029f61046d366004613d1c565b6112d2565b610485610480366004613bfe565b6112e6565b6040516102839493929190613f9a565b6102cd611336565b61032d6104ab366004613d47565b61133d565b6104b8611594565b6040516102839190613ee7565b61032d611833565b6102cd6118cb565b6102cd6104e3366004613bfe565b611972565b6102cd61199e565b61032d6104fe366004613bc6565b6119a3565b61032d610511366004613bc6565b611ab8565b61032d610524366004613bfe565b611bca565b6102cd611db4565b61029f61053f366004613cdc565b611dc4565b6101698054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b505050505090505b90565b60006105f06105e9611ef8565b8484611efc565b5060015b92915050565b600080600080600061060a611fe9565b6101a054909550935061061e61019e61206b565b61019f5461019e549697959691959094509092509050565b6101685490565b6101985461019954600080808061067061065861019e61206b565b6101995461019f54610668611594565b92919061208d565b61019b5461019c5461019d5498999798929791965094509092509050565b60006105f461069c836110c7565b6106a4610636565b61019891906120bb565b60006106bb8484846120dd565b61072c846106c7611ef8565b61072785604051806060016040528060288152602001614126602891396001600160a01b038a1660009081526101676020526040812090610706611ef8565b6001600160a01b03168152602081019190915260400160002054919061223d565b611efc565b5060015b9392505050565b6101a35460405163e5e31b1360e01b81526001600160a01b039091169063e5e31b1390610768903390600401613e5b565b60206040518083038186803b15801561078057600080fd5b505afa158015610794573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b89190613d7b565b6040518060400160405280601e81526020017f4f6e6c7920706169722063616e2063616c6c2074686973206d6574686f640000815250906108155760405162461bcd60e51b815260040161080c9190613e94565b60405180910390fd5b5033600061082382846122d4565b9050600061083361019e83612307565b905061083d612336565b6108478282612345565b50610856816000806000612463565b61085e611fe9565b610199556040516001600160a01b0385169030907fc3d81b2125598b9a2b024afe09e33981f0aa5b7bcbe3e30c4303a4dec209ddb490600090a350505050565b61016b5460ff1690565b60006108b561019e61206b565b905090565b60006108b56108c76118cb565b610199546108e0906108da61019e61206b565b90612479565b906124d3565b600054610100900460ff16806108ff57506108ff612515565b8061090d575060005460ff16155b6109485760405162461bcd60e51b815260040180806020018281038252602e8152602001806140d7602e913960400191505060405180910390fd5b600054610100900460ff16158015610973576000805460ff1961ff0019909116610100171660011790555b61097b612526565b6109836125d8565b6109cf8686604051602001610999929190613e10565b60405160208183030381529060405285856040516020016109bb929190613e3d565b6040516020818303038152906040526126cb565b6101a280546001600160a01b038085166001600160a01b0319928316179092556101a380548b84169083161790556101a48054928a16929091169190911790558015610a21576000805461ff00191690555b5050505050505050565b610a33612336565b6000610a3d611fe9565b90506000811160405180604001604052806016815260200175496e73756666696369656e74206c697175696469747960501b81525090610a905760405162461bcd60e51b815260040161080c9190613e94565b5061019c5481811115610aa05750805b80610aac575050610e17565b6101a4546040805163647846a560e01b815290516000926001600160a01b03169163647846a5916004808301926020929190829003018186803b158015610af257600080fd5b505afa158015610b06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2a9190613be2565b90506001600160a01b0381161580610b5057506101a2546001600160a01b038281169116145b15610bed576101a45460408051633f6927ad60e21b81529051610be8926001600160a01b03169163fda49eb4916004808301926020929190829003018186803b158015610b9c57600080fd5b505afa158015610bb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd49190613be2565b6101a2546001600160a01b03169084612781565b610e01565b6101a4546040805163c31c9c0760e01b815290516000926001600160a01b03169163c31c9c07916004808301926020929190829003018186803b158015610c3357600080fd5b505afa158015610c47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6b9190613be2565b6101a254909150610c86906001600160a01b031682856127d3565b604080516002808252606080830184529260208301908036833750506101a25482519293506001600160a01b031691839150600090610cc157fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508281600181518110610cef57fe5b60200260200101906001600160a01b031690816001600160a01b031681525050816001600160a01b0316635c11d795856000846101a460009054906101000a90046001600160a01b03166001600160a01b031663fda49eb46040518163ffffffff1660e01b815260040160206040518083038186803b158015610d7157600080fd5b505afa158015610d85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da99190613be2565b6000196040518663ffffffff1660e01b8152600401610dcc959493929190613f2a565b600060405180830381600087803b158015610de657600080fd5b505af1158015610dfa573d6000803e3d6000fd5b5050505050505b61019c54610e0f90836124d3565b61019c555050505b565b60006105f0610e26611ef8565b84610727856101676000610e38611ef8565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490612479565b60006105f4610e768361068e565b610e7e6108ba565b61019891906128e6565b600080610e94836110c7565b905080610ea55760009150506105f4565b6000610eb185836128f2565b90506000610ec882610ec287610e68565b906129f4565b90506000610ed4611fe9565b9050808211610ee35781610ee5565b805b979650505050505050565b6000610730610eff84846122d4565b61019e90612307565b60006108b5610f1861019e61206b565b61019c5461019954610f29916124d3565b612aae565b60006105f482610f3c610636565b610f446108ba565b610198929190612ad8565b6101d754604080518082019091526002815261272960f11b602082015260009160ff1615610f905760405162461bcd60e51b815260040161080c9190613e94565b506101d7805460ff19166001179055610fa7612336565b600080610fdf60405180604001604052806014815260200173125b9d985b1a59081c995c185e48185b5bdd5b9d60621b815250612aef565b915091506000610fef86866122d4565b90506000610fff61019e83612307565b905060008382116110105781611012565b835b9050600061102085836124d3565b9050600061102e8584612345565b905061103e836000806000612463565b6101a254611056906001600160a01b03168b84612781565b61106087836124d3565b610199556001600160a01b038916307f05f2eeda0e08e4b437f487c8d7d29b14537d15e3488170dc3de5dbdf8dac468461109a89866124d3565b6040516110a79190613f21565b60405180910390a36101d7805460ff191690559998505050505050505050565b6001600160a01b03166000908152610166602052604090205490565b6110eb611ef8565b6001600160a01b03166110fc6111bb565b6001600160a01b031614611157576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6000610730826111b5600086876000612bb1565b90612c2c565b6033546001600160a01b031690565b60006101d854600014156111e55750426101d85560016105d9565b50600090565b61016a8054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105d15780601f106105a6576101008083540402835291602001916105d1565b61019c54610199546000916108b591906124d3565b6101d85481565b60006105f0611276611ef8565b84610727856040518060600160405280602581526020016142186025913961016760006112a1611ef8565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919061223d565b60006105f06112df611ef8565b84846120dd565b60008060008060006112f887876122d4565b60008181526101a1602052604090208054600182015460028301549198509550935090915061132961019e83612307565b9450505092959194509250565b61019b5490565b6101a35460405163e5e31b1360e01b81526001600160a01b039091169063e5e31b139061136e903390600401613e5b565b60206040518083038186803b15801561138657600080fd5b505afa15801561139a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113be9190613d7b565b6040518060400160405280601e81526020017f4f6e6c7920706169722063616e2063616c6c2074686973206d6574686f640000815250906114125760405162461bcd60e51b815260040161080c9190613e94565b506101a2546040516370a0823160e01b815233916001600160a01b0316906370a0823190611444903090600401613e5b565b60206040518083038186803b15801561145c57600080fd5b505afa158015611470573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114949190613db3565b83111560405180604001604052806016815260200175496e73756666696369656e74206c697175696469747960501b815250906114e45760405162461bcd60e51b815260040161080c9190613e94565b5060006114f182866122d4565b90506114fb612336565b611509600085866000612463565b61019b54611524908290869061151f9087612c2c565b612cca565b6101a25461153c906001600160a01b03168386612781565b611544611fe9565b610199556040516001600160a01b0386169030907f312a5e5e1079f5dda4e95dbbd0b908b291fd5b992ef22073643ab691572c5b5290611585908890613f21565b60405180910390a35050505050565b61159c613a79565b6101a460009054906101000a90046001600160a01b03166001600160a01b031663bf3866826040518163ffffffff1660e01b815260040160206040518083038186803b1580156115eb57600080fd5b505afa1580156115ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116239190613db3565b81526101a454604080516322580e2b60e11b815290516001600160a01b03909216916344b01c5691600480820192602092909190829003018186803b15801561166b57600080fd5b505afa15801561167f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a39190613db3565b6020808301919091526101a4546040805163255bb3a960e01b815290516001600160a01b039092169263255bb3a992600480840193829003018186803b1580156116ec57600080fd5b505afa158015611700573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117249190613db3565b6040808301919091526101a45481516318a4334760e21b815291516001600160a01b0390911691636290cd1c916004808301926020929190829003018186803b15801561177057600080fd5b505afa158015611784573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a89190613db3565b60608201526101a45460408051637f18576160e01b815290516001600160a01b0390921691637f18576191600480820192602092909190829003018186803b1580156117f357600080fd5b505afa158015611807573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061182b9190613db3565b608082015290565b60008061186d60405180604001604052806016815260200175125b9d985b1a590819195c1bdcda5d08185b5bdd5b9d60521b815250612aef565b91509150611879612336565b611887816000806000612463565b61019982905560405130907f7a0d120b63a1f3bab1edf6231dd9eb2897a58b884680f524fa088f9359c93bed906118bf908490613f21565b60405180910390a25050565b60006108b56119686101a460009054906101000a90046001600160a01b03166001600160a01b0316637f1857616040518163ffffffff1660e01b815260040160206040518083038186803b15801561192257600080fd5b505afa158015611936573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061195a9190613db3565b6101d8546101989190612db3565b61019c5490612479565b6001600160a01b0391821660009081526101676020908152604080832093909416825291909152205490565b602381565b6119ab611ef8565b6001600160a01b03166119bc6111bb565b6001600160a01b031614611a17576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116611a5c5760405162461bcd60e51b81526004018080602001828103825260268152602001806140696026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b6101d754604080518082019091526002815261272960f11b60208201529060ff1615611af75760405162461bcd60e51b815260040161080c9190613e94565b506101d7805460ff19166001179055611b0e612336565b600080611b4860405180604001604052806016815260200175125b9d985b1a590819195c1bdcda5d08185b5bdd5b9d60521b815250612aef565b91509150611b5a816000806000612463565b611b6f83611b6a83610f3c610636565b612e34565b6101998290556040516001600160a01b0384169030907f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f6290611bb2908590613f21565b60405180910390a350506101d7805460ff1916905550565b6101d754604080518082019091526002815261272960f11b60208201529060ff1615611c095760405162461bcd60e51b815260040161080c9190613e94565b506101d7805460ff19166001179055611c20612336565b6000611c2b306110c7565b90506000611c37611fe9565b90506000611c4430610e68565b90506000821160405180604001604052806016815260200175496e73756666696369656e74206c697175696469747960501b81525090611c975760405162461bcd60e51b815260040161080c9190613e94565b5081811115611cd7576000611cac83836128f2565b90506000611cba85836129f4565b8493509050611cd33088611cce88856124d3565b6120dd565b9350505b604080518082019091526014815273496e73756666696369656e742062616c616e636560601b602082015283611d205760405162461bcd60e51b815260040161080c9190613e94565b50611d2f600082600080612463565b611d393084612f2a565b6101a254611d51906001600160a01b03168583612781565b611d59611fe9565b610199556040516001600160a01b0386169030907f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb90611d9a908590613f21565b60405180910390a350506101d7805460ff19169055505050565b60006108b561065861019e61206b565b6101a35460405163e5e31b1360e01b81526000916001600160a01b03169063e5e31b1390611df6903390600401613e5b565b60206040518083038186803b158015611e0e57600080fd5b505afa158015611e22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e469190613d7b565b6040518060400160405280601e81526020017f4f6e6c7920706169722063616e2063616c6c2074686973206d6574686f64000081525090611e9a5760405162461bcd60e51b815260040161080c9190613e94565b50611ea3612336565b336000611eb082876122d4565b90506000611ebe83876122d4565b60008381526101a16020526040902060010154909150611ede8387612345565b50611eea828783612cca565b506001979650505050505050565b3390565b6001600160a01b038316611f415760405162461bcd60e51b81526004018080602001828103825260248152602001806141946024913960400191505060405180910390fd5b6001600160a01b038216611f865760405162461bcd60e51b815260040180806020018281038252602281526020018061408f6022913960400191505060405180910390fd5b6001600160a01b0380841660008181526101676020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6101a2546040516370a0823160e01b81526000916001600160a01b0316906370a082319061201b903090600401613e5b565b60206040518083038186803b15801561203357600080fd5b505afa158015612047573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b59190613db3565b60006105f46120828360010154846000015461302a565b600284015490613037565b60008061209a8585612aae565b90506120b16120a986856130e9565b879083613116565b9695505050505050565b600081156120d2576120cd83836128f2565b6120d5565b60005b949350505050565b6001600160a01b0383166121225760405162461bcd60e51b815260040180806020018281038252602581526020018061416f6025913960400191505060405180910390fd5b6001600160a01b0382166121675760405162461bcd60e51b81526004018080602001828103825260238152602001806140246023913960400191505060405180910390fd5b61217283838361277c565b6121b0816040518060600160405280602681526020016140b1602691396001600160a01b03861660009081526101666020526040902054919061223d565b6001600160a01b038085166000908152610166602052604080822093909355908416815220546121e09082612479565b6001600160a01b038084166000818152610166602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156122cc5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612291578181015183820152602001612279565b50505050905090810190601f1680156122be5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082826040516020016122e9929190613e6f565b60405160208183030381529060405280519060200120905092915050565b60008181526003830160205260408120600181015460028201546120d59161232e9161302a565b825490613037565b61233e61313e565b426101d855565b6000808061235561019e86613199565b9250925050600061236a61019860060161206b565b60008781526101a16020526040902090915085821161239457600061019f8190556101a05561241a565b60006123a083886124d3565b6101a0819055905060006123c06123b6856131f1565b61019f5490613037565b905060006123db6123d08a6131f1565b600186015490613037565b90508181106123f55760006101a081905561019f55612416565b612411612401846131f1565b61240b84846124d3565b90613270565b61019f555b5050505b83861415612438576000600182018190558082556002820155612453565b42600282015580546124509087906108e09086612479565b81555b4261019e55549695505050505050565b61246f84848484612bb1565b61019b5550505050565b600082820183811015610730576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600061073083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061223d565b600061252030613371565b15905090565b600054610100900460ff168061253f575061253f612515565b8061254d575060005460ff16155b6125885760405162461bcd60e51b815260040180806020018281038252602e8152602001806140d7602e913960400191505060405180910390fd5b600054610100900460ff161580156125b3576000805460ff1961ff0019909116610100171660011790555b6125bb613377565b6125c3613417565b80156125d5576000805461ff00191690555b50565b600054610100900460ff16806125f157506125f1612515565b806125ff575060005460ff16155b61263a5760405162461bcd60e51b815260040180806020018281038252602e8152602001806140d7602e913960400191505060405180910390fd5b600054610100900460ff16158015612665576000805460ff1961ff0019909116610100171660011790555b606554612670613510565b116126ac5760405162461bcd60e51b815260040180806020018281038252602881526020018061423d6028913960400191505060405180910390fd5b6126b4613510565b60655580156125d5576000805461ff001916905550565b600054610100900460ff16806126e457506126e4612515565b806126f2575060005460ff16155b61272d5760405162461bcd60e51b815260040180806020018281038252602e8152602001806140d7602e913960400191505060405180910390fd5b600054610100900460ff16158015612758576000805460ff1961ff0019909116610100171660011790555b612760613377565b61276a8383613515565b801561277c576000805461ff00191690555b505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261277c9084906135f0565b801580612859575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561282b57600080fd5b505afa15801561283f573d6000803e3d6000fd5b505050506040513d602081101561285557600080fd5b5051155b6128945760405162461bcd60e51b81526004018080602001828103825260368152602001806141e26036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261277c9084906135f0565b60006120d583836129f4565b60408051808201909152600381526226a22d60e91b60208201526000908261295b5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315612291578181015183820152602001612279565b506040805180820190915260038152624d4d4f60e81b60208201526002830490670de0b6b3a76400008219048511156129d55760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315612291578181015183820152602001612279565b508281670de0b6b3a7640000860201816129eb57fe5b04949350505050565b6000821580612a01575081155b15612a0e575060006105f4565b816706f05b59d3b200001981612a2057fe5b04831115604051806040016040528060038152602001624d4d4f60e81b81525090612a8c5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315612291578181015183820152602001612279565b50670de0b6b3a76400006002815b048385020181612aa657fe5b049392505050565b60008215612acf57612aca612ac38385612479565b8490613270565b610730565b60009392505050565b6000612ae6858585856137ae565b95945050505050565b610199546101a2546040516370a0823160e01b8152600092839290916001600160a01b03909116906370a0823190612b2b903090600401613e5b565b60206040518083038186803b158015612b4357600080fd5b505afa158015612b57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b7b9190613db3565b925083818411612b9e5760405162461bcd60e51b815260040161080c9190613e94565b50612ba983826124d3565b915050915091565b600080612bc3846108da61019e61206b565b9050828111612bd3576000612bdd565b612bdd81846124d3565b61019954909150600090612bf19088612479565b9050858111612c01576000612c0b565b612c0b81876124d3565b9050610ee5828261019860060160010154612c24611594565b9291906137e8565b6000821580612c39575081155b15612c46575060006105f4565b816113881981612c5257fe5b04831115604051806040016040528060038152602001624d4d4f60e81b81525090612cbe5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315612291578181015183820152602001612279565b50612710600281612a9a565b600080612cd961019e86613199565b92509250506000612cee61019860060161206b565b90506000612cfc8287612479565b6101a081905590506000612d0f876131f1565b60008981526101a160205260409020909150612d5a612d36612d31888b612479565b6131f1565b61240b612d43858b613037565b6108da612d4f8b6131f1565b600187015490613037565b60018201558054612d719086906108da908b612479565b8155426002820181905561019e55612da4612d8b846131f1565b61240b612d98858b613037565b6108da6123b6896131f1565b61019f55505050505050505050565b6000612dbd613aa8565b612dc985600601613801565b60a0850152508083526020830191909152612de8576000915050610730565b60a0810151612dfc90600687019085613823565b606082018190526020820151612e1191613037565b604082018190528151612e23916124d3565b60808201819052612ae69085612c2c565b6001600160a01b038216612e8f576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b612e9b6000838361277c565b61016854612ea99082612479565b610168556001600160a01b03821660009081526101666020526040902054612ed19082612479565b6001600160a01b0383166000818152610166602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b038216612f6f5760405162461bcd60e51b815260040180806020018281038252602181526020018061414e6021913960400191505060405180910390fd5b612f7b8260008361277c565b612fb981604051806060016040528060228152602001614047602291396001600160a01b03851660009081526101666020526040902054919061223d565b6001600160a01b0383166000908152610166602052604090205561016854612fe19082613834565b610168556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6000610730838342613891565b6000821580613044575081155b15613051575060006105f4565b816b019d971e4fe8401e74000000198161306757fe5b04831115604051806040016040528060038152602001624d4d4f60e81b815250906130d35760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315612291578181015183820152602001612279565b506b033b2e3c9fd0803ce8000000600281612a9a565b600082156105f45760006130fc846131f1565b9050600061310a8285613037565b9050612ae68183613270565b60006120d561313485608001516127106124d390919063ffffffff16565b6111b58585613037565b6131936119686101a460009054906101000a90046001600160a01b03166001600160a01b0316637f1857616040518163ffffffff1660e01b815260040160206040518083038186803b15801561192257600080fd5b61019c55565b600081815260038301602052604081205481908190806131c4576000806000935093509350506131ea565b60006131d4826108e08989612307565b9050816131e18183612479565b90955093509150505b9250925092565b6000633b9aca00828102908390820414604051806040016040528060038152602001624d4d4f60e81b815250906132695760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315612291578181015183820152602001612279565b5092915050565b60408051808201909152600381526226a22d60e91b6020820152600090826132d95760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315612291578181015183820152602001612279565b506040805180820190915260038152624d4d4f60e81b602082015260028304906b033b2e3c9fd0803ce80000008219048511156133575760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315612291578181015183820152602001612279565b5082816b033b2e3c9fd0803ce8000000860201816129eb57fe5b3b151590565b600054610100900460ff16806133905750613390612515565b8061339e575060005460ff16155b6133d95760405162461bcd60e51b815260040180806020018281038252602e8152602001806140d7602e913960400191505060405180910390fd5b600054610100900460ff161580156125c3576000805460ff1961ff00199091166101001716600117905580156125d5576000805461ff001916905550565b600054610100900460ff16806134305750613430612515565b8061343e575060005460ff16155b6134795760405162461bcd60e51b815260040180806020018281038252602e8152602001806140d7602e913960400191505060405180910390fd5b600054610100900460ff161580156134a4576000805460ff1961ff0019909116610100171660011790555b60006134ae611ef8565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35080156125d5576000805461ff001916905550565b602390565b600054610100900460ff168061352e575061352e612515565b8061353c575060005460ff16155b6135775760405162461bcd60e51b815260040180806020018281038252602e8152602001806140d7602e913960400191505060405180910390fd5b600054610100900460ff161580156135a2576000805460ff1961ff0019909116610100171660011790555b82516135b690610169906020860190613ade565b5081516135cb9061016a906020850190613ade565b5061016b805460ff19166012179055801561277c576000805461ff0019169055505050565b613602826001600160a01b0316613934565b613653576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106136915780518252601f199092019160209182019101613672565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146136f3576040519150601f19603f3d011682016040523d82523d6000602084013e6136f8565b606091505b50915091508161374f576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b8051156137a85780806020019051602081101561376b57600080fd5b50516137a85760405162461bcd60e51b815260040180806020018281038252602a8152602001806141b8602a913960400191505060405180910390fd5b50505050565b6000806000841180156137c15750600083115b6137d2576137cd61396d565b6137dc565b6137dc84846128f2565b90506120b185826129f4565b6000806137f58585612aae565b90506120b18682613979565b60028101546001820154600090816138188561206b565b945493959193925050565b60006120d584600101548484613891565b60008282111561388b576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60008061389e83856124d3565b9050806138b5576138ad613a10565b915050610730565b60006138c18683613a20565b905060006138d1826108da613a10565b905060015b6005811015613929578084116138f157509250610730915050565b6001810161390b8961390586858903613a20565b90613037565b8161391257fe5b04925061391f8284612479565b91506001016138d6565b509695505050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906120d5575050151592915050565b670de0b6b3a764000090565b600082606001518211156139e05760006139ac61399c85606001516108e0613a10565b606086015161240b9086906124d3565b90506139d86139c882866040015161303790919063ffffffff16565b602086015186516108da91612479565b9150506105f4565b610730613a086139fd85606001518561327090919063ffffffff16565b602086015190613037565b845190612479565b6b033b2e3c9fd0803ce800000090565b600082613a2f575060006105f4565b82820282848281613a3c57fe5b04146107305760405162461bcd60e51b81526004018080602001828103825260218152602001806141056021913960400191505060405180910390fd5b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282613b145760008555613b5a565b82601f10613b2d57805160ff1916838001178555613b5a565b82800160010185558215613b5a579182015b82811115613b5a578251825591602001919060010190613b3f565b50613b66929150613b6a565b5090565b5b80821115613b665760008155600101613b6b565b60008083601f840112613b90578182fd5b50813567ffffffffffffffff811115613ba7578182fd5b602083019150836020828501011115613bbf57600080fd5b9250929050565b600060208284031215613bd7578081fd5b81356107308161400e565b600060208284031215613bf3578081fd5b81516107308161400e565b60008060408385031215613c10578081fd5b8235613c1b8161400e565b91506020830135613c2b8161400e565b809150509250929050565b600080600080600080600060a0888a031215613c50578283fd5b8735613c5b8161400e565b96506020880135613c6b8161400e565b9550604088013567ffffffffffffffff80821115613c87578485fd5b613c938b838c01613b7f565b909750955060608a0135915080821115613cab578485fd5b50613cb88a828b01613b7f565b9094509250506080880135613ccc8161400e565b8091505092959891949750929550565b600080600060608486031215613cf0578283fd5b8335613cfb8161400e565b92506020840135613d0b8161400e565b929592945050506040919091013590565b60008060408385031215613d2e578182fd5b8235613d398161400e565b946020939093013593505050565b600080600060608486031215613d5b578283fd5b8335613d668161400e565b95602085013595506040909401359392505050565b600060208284031215613d8c578081fd5b81518015158114610730578182fd5b600060208284031215613dac578081fd5b5035919050565b600060208284031215613dc4578081fd5b5051919050565b60008060408385031215613ddd578182fd5b823591506020830135613c2b8161400e565b60008060408385031215613e01578182fd5b50508035926020909101359150565b600082848337507420574f5720496e7465726573742042656172696e6760581b9101908152601501919050565b60006134b160f11b8252828460028401379101600201908152919050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b901515815260200190565b6000602080835283518082850152825b81811015613ec057858101830151858201604001528201613ea4565b81811115613ed15783604083870101525b50601f01601f1916929092016040019392505050565b600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b90815260200190565b600060a082018783526020878185015260a0604085015281875180845260c0860191508289019350845b81811015613f795784516001600160a01b031683529383019391830191600101613f54565b50506001600160a01b03969096166060850152505050608001529392505050565b93845260208401929092526040830152606082015260800190565b948552602085019390935260408401919091526060830152608082015260a00190565b958652602086019490945260408501929092526060840152608083015260a082015260c00190565b60ff91909116815260200190565b6001600160a01b03811681146125d557600080fdfe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63654f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f56657273696f6e65643a207265766973696f6e20697320746f6f206c6f7720746f20757064617465a264697066735822122090631c460029f1e59554807c6ac083b225ff100cd9bd6565812d5a7446988ab164736f6c63430007040033a26469706673582212208e20654591b1c6601f90c98ce6bfcb763bebb25b6e620b1f55056b923d33f2bb64736f6c63430007040033";

export class ReserveDeployer__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReserveDeployer> {
    return super.deploy(overrides || {}) as Promise<ReserveDeployer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReserveDeployer {
    return super.attach(address) as ReserveDeployer;
  }
  connect(signer: Signer): ReserveDeployer__factory {
    return super.connect(signer) as ReserveDeployer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReserveDeployerInterface {
    return new utils.Interface(_abi) as ReserveDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReserveDeployer {
    return new Contract(address, _abi, signerOrProvider) as ReserveDeployer;
  }
}
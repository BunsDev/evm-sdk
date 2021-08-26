/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ShortingPairDeployerNext,
  ShortingPairDeployerNextInterface,
} from "../ShortingPairDeployerNext";

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
    name: "getPairImplementation",
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
  "0x608060405234801561001057600080fd5b5061477e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063aec525e41461003b578063dde43cba1461005f575b600080fd5b610043610079565b604080516001600160a01b039092168252519081900360200190f35b6100676100bb565b60408051918252519081900360200190f35b60006100b66040518060200161008e90610138565b601f1982820381018352601f909101166040526b29b437b93a34b733a830b4b960a11b6100c1565b905090565b60001981565b60008060ff60f81b308486805190602001206040516020016100e69493929190610145565b6040516020818303038152906040528051906020012090508060001c915061010d8261012c565b156101185750610126565b828451602086016000f59150505b92915050565b3b63ffffffff16151590565b6145ca8061017f83390190565b6001600160f81b031994909416845260609290921b6bffffffffffffffffffffffff19166001840152601583015260358201526055019056fe608060405234801561001057600080fd5b506145aa806100206000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80636a3e400c1161010f578063b07f80a1116100a2578063d59172f311610071578063d59172f314610400578063dd62ed3e14610413578063dde43cba14610426578063e1254fba1461042e576101f0565b8063b07f80a1146103bf578063b516f7b1146103d2578063c022215c146103e5578063c5654acc146103ed576101f0565b806395d89b41116100de57806395d89b4114610370578063975bf01014610378578063a457c2d714610399578063a9059cbb146103ac576101f0565b80636a3e400c1461032f57806370a0823114610337578063742fe1f81461034a578063935a8b841461035d576101f0565b8063313ce567116101875780633d07975d116101565780633d07975d146102e1578063586e848f146102f457806359bf5d39146103075780635c1952171461031c576101f0565b8063313ce5671461029e57806333481fc9146102b35780633804ee19146102c657806339509351146102ce576101f0565b806323b872dd116101c357806323b872dd1461025d5780632929c6e6146102705780632cd45399146102785780632f04bd561461028b576101f0565b806306fdde03146101f5578063095ea7b31461021357806318160ddd146102335780631efb37c614610248575b600080fd5b6101fd610441565b60405161020a9190614240565b60405180910390f35b610226610221366004613f0b565b6104d8565b60405161020a9190614235565b61023b6104f6565b60405161020a9190614293565b61025b610256366004613dce565b6104fd565b005b61022661026b366004613ecb565b610718565b61023b6107a0565b61023b610286366004613f36565b6107a7565b61023b6102993660046140b5565b610c72565b6102a6610c7d565b60405161020a919061431a565b61023b6102c1366004613d5e565b610c87565b61023b610ca3565b6102266102dc366004613f0b565b610cb2565b61023b6102ef366004613fab565b610d01565b610226610302366004613d96565b6115b1565b61030f6119b5565b60405161020a91906141c2565b61023b61032a3660046140b5565b6119c5565b61023b6119e8565b61023b610345366004613d5e565b6119ef565b61023b610358366004613f0b565b611a73565b61023b61036b366004613d5e565b611a88565b6101fd611a93565b61038b6103863660046140e5565b611af5565b60405161020a9291906142b5565b6102266103a7366004613f0b565b611b0e565b6102266103ba366004613f0b565b611b77565b61023b6103cd3660046140e5565b611b8b565b61038b6103e0366004613d5e565b611b93565b61023b611c33565b61023b6103fb366004613f77565b611c3a565b61023b61040e3660046140b5565b611c51565b61023b610421366004613d96565b611ce3565b61023b611d0f565b61023b61043c366004613d5e565b611d15565b6101378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104ce5780601f106104a3576101008083540402835291602001916104ce565b820191906000526020600020905b8154815290600101906020018083116104b157829003601f168201915b5050505050905090565b60006104ec6104e5611d31565b8484611d35565b5060015b92915050565b6101365490565b600054610100900460ff16806105165750610516611e22565b80610524575060005460ff16155b61055f5760405162461bcd60e51b815260040180806020018281038252602e8152602001806143ef602e913960400191505060405180910390fd5b600054610100900460ff1615801561058a576000805460ff1961ff0019909116610100171660011790555b610592611e33565b61059a611ed5565b6105e685856040516020016105b092919061417e565b60405160208183030381529060405284846040516020016105d29291906141a5565b604051602081830303815290604052611fc8565b61016d80546001600160a01b03808c166001600160a01b03199283161790925561016680548d84169083161790556101698054928b1692909116919091179055868660008161063157fe5b90506020020160208101906106469190613d5e565b61016780546001600160a01b0319166001600160a01b03929092169190911790558686600019810181811061067757fe5b905060200201602081019061068c9190613d5e565b61016880546001600160a01b0319166001600160a01b039290921691909117905560038614156106fa57868660018181106106c357fe5b90506020020160208101906106d89190613d5e565b61017380546001600160a01b0319166001600160a01b03929092169190911790555b801561070c576000805461ff00191690555b50505050505050505050565b600061072584848461207e565b61079684610731611d31565b6107918560405180606001604052806028815260200161443e602891396001600160a01b038a1660009081526101356020526040812090610770611d31565b6001600160a01b0316815260208101919091526040016000205491906121de565b611d35565b5060019392505050565b6101725490565b6101a554604080518082019091526002815261272960f11b602082015260009160ff16156107f15760405162461bcd60e51b81526004016107e89190614240565b60405180910390fd5b506101a5805460ff1916600117905561080a8483612275565b600061081530611a88565b6101675461016854919250610843918391879161083e916001600160a01b0390811691166122f5565b6123ef565b91508382101560405180604001604052806003815260200162494f4160e81b815250906108835760405162461bcd60e51b81526004016107e89190614240565b50610166546040516309316b5d60e31b81526000916001600160a01b03169063498b5ae8906108b890309081906004016141d6565b60206040518083038186803b1580156108d057600080fd5b505afa1580156108e4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090891906140cd565b905080156109f357610168546101665461092f916001600160a01b039081169116836124e3565b61016654604051630ddace3d60e31b81526000916001600160a01b031690636ed671e89061096390309081906004016141d6565b602060405180830381600087803b15801561097d57600080fd5b505af1158015610991573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b591906140cd565b604080518082019091526002815261111360f21b602082015290915081156109f05760405162461bcd60e51b81526004016107e89190614240565b50505b610168546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610a259030906004016141c2565b60206040518083038186803b158015610a3d57600080fd5b505afa158015610a51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7591906140cd565b6101685461016754919250600091610aa1918491849161083e916001600160a01b0391821691166122f5565b30600090815261016f602052604081205491925080610ac08484612637565b90925090508115610ae35761016754610ae3906001600160a01b03168c846124e3565b8015610b76576101675461016d5460408051633f6927ad60e21b81529051610b76936001600160a01b0390811693169163fda49eb4916004808301926020929190829003018186803b158015610b3857600080fd5b505afa158015610b4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b709190613d7a565b836124e3565b61017054610b8490846126ef565b6101705530600090815261016f6020908152604080832083905561017190915290205461017254610bb4916126ef565b610172553060008181526101716020526040812055610bd39088612731565b610167546040516370a0823160e01b81526001600160a01b03909116906370a0823190610c049030906004016141c2565b60206040518083038186803b158015610c1c57600080fd5b505afa158015610c30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5491906140cd565b6101a65550506101a5805460ff191690555093979650505050505050565b60006104f082612831565b6101395460ff1690565b6001600160a01b03166000908152610171602052604090205490565b6000610cad6128ce565b905090565b60006104ec610cbf611d31565b84610791856101356000610cd1611d31565b6001600160a01b03908116825260208083019390935260409182016000908120918c1681529252902054906129e1565b6101a554604080518082019091526002815261272960f11b602082015260009160ff1615610d425760405162461bcd60e51b81526004016107e89190614240565b506101a5805460ff19166001179055610d5b8583612275565b61016d5460408051632cb14e9b60e21b815290516000926001600160a01b03169163b2c53a6c916004808301926020929190829003018186803b158015610da157600080fd5b505afa158015610db5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd991906140cd565b90506103e88510158015610ded5750808511155b6040518060400160405280600381526020016224a62360e91b81525090610e275760405162461bcd60e51b81526004016107e89190614240565b5061016d546040516313d8c14960e11b81526001600160a01b03909116906327b1829290610e59908890600401614293565b60206040518083038186803b158015610e7157600080fd5b505afa158015610e85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea991906140cd565b610eb287612a3b565b10156040518060400160405280600381526020016224aba160e91b81525090610eee5760405162461bcd60e51b81526004016107e89190614240565b506101a654610167546040516370a0823160e01b8152600092610f839290916001600160a01b03909116906370a0823190610f2d9030906004016141c2565b60206040518083038186803b158015610f4557600080fd5b505afa158015610f59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7d91906140cd565b906126ef565b905080610f908882612c8a565b91506000610fbb610fa1848a612edb565b61016854610167546001600160a01b039182169116612f81565b6001600160a01b038a16600090815261016f6020526040902054909150610fe290846129e1565b6001600160a01b038a16600090815261016f60205260409020556101705461100a90846129e1565b6101705580156111e15761016d60009054906101000a90046001600160a01b03166001600160a01b0316635f4985c46040518163ffffffff1660e01b815260040160206040518083038186803b15801561106357600080fd5b505afa158015611077573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109b91906140cd565b8310156040518060400160405280600381526020016212541160ea1b815250906110d85760405162461bcd60e51b81526004016107e89190614240565b506001600160a01b038916600090815261017160205260409020546110fd90826129e1565b6001600160a01b038a16600090815261017160205260409020556101725461112590826129e1565b610172556111316128ce565b61017254106040518060400160405280600481526020016350424c4560e01b815250906111715760405162461bcd60e51b81526004016107e89190614240565b50610166546001600160a01b031663c1bce0b78a836111908c896130b7565b6040518463ffffffff1660e01b81526004016111ae93929190614214565b600060405180830381600087803b1580156111c857600080fd5b505af11580156111dc573d6000803e3d6000fd5b505050505b61016854610167546112079183918a9161083e916001600160a01b0391821691166122f5565b945061016d60009054906101000a90046001600160a01b03166001600160a01b0316633cbb3a126040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561125a57600080fd5b505af115801561126e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129291906140cd565b61016d60009054906101000a90046001600160a01b03166001600160a01b03166336d8b0cc6040518163ffffffff1660e01b815260040160206040518083038186803b1580156112e157600080fd5b505afa1580156112f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113199190613d7a565b6001600160a01b031663c6414eee83886040518363ffffffff1660e01b81526004016113469291906142b5565b60206040518083038186803b15801561135e57600080fd5b505afa158015611372573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061139691906140cd565b11156040518060400160405280600381526020016250544f60e81b815250906113d25760405162461bcd60e51b81526004016107e89190614240565b50604080518082019091526003815262494f4160e81b60208201528786101561140e5760405162461bcd60e51b81526004016107e89190614240565b506114228961141d87866129e1565b613165565b610167546040516370a0823160e01b81526001600160a01b03909116906370a08231906114539030906004016141c2565b60206040518083038186803b15801561146b57600080fd5b505afa15801561147f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a391906140cd565b6101a65560006114b28a611a88565b610166546040516309316b5d60e31b81529192506000916001600160a01b039091169063498b5ae8906114eb9030908f906004016141d6565b60206040518083038186803b15801561150357600080fd5b505afa158015611517573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061153b91906140cd565b905060008061154a848461325b565b915091508c6001600160a01b03167fb98156c17808b3817e8788117b9125cd2c3cb02f6058f9870d44b648702bc5778585858560405161158d94939291906142ff565b60405180910390a250506101a5805460ff1916905550949998505050505050505050565b6101a554604080518082019091526002815261272960f11b602082015260009160ff16156115f25760405162461bcd60e51b81526004016107e89190614240565b506101a5805460ff1916600117905561161a61160c611d31565b6001600160a01b0316613294565b1560405180604001604052806003815260200162464c4360e81b815250906116555760405162461bcd60e51b81526004016107e89190614240565b50600061166184611a88565b610166546040516309316b5d60e31b81529192506000916001600160a01b039091169063498b5ae89061169a90309089906004016141d6565b60206040518083038186803b1580156116b257600080fd5b505afa1580156116c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ea91906140cd565b90506000806116f9848461325b565b91509150808210604051806040016040528060048152602001630554c48560e41b8152509061173b5760405162461bcd60e51b81526004016107e89190614240565b506101675461016854600091611765918791849161083e916001600160a01b0390811691166122f5565b905060006117728261329a565b61016854610167549192506117a291839160009161179c916001600160a01b0390811691166122f5565b8b613398565b60006117ae83836126ef565b9050858111156118105761016854610166546117d7916001600160a01b039081169116886124e3565b61180b6117e482886126ef565b6101685461016754600091611805916001600160a01b0391821691166122f5565b8d613398565b61182f565b610168546101665461182f916001600160a01b039081169116836124e3565b6118398a88612731565b610166546040516305f0caad60e31b81526001600160a01b0390911690632f8655689061186a908d906004016141c2565b600060405180830381600087803b15801561188457600080fd5b505af1158015611898573d6000803e3d6000fd5b505050506001600160a01b038a16600090815261016f6020526040902054610170546118c3916126ef565b610170556001600160a01b038a16600090815261016f60209081526040808320839055610171909152902054610172546118fc916126ef565b610172556001600160a01b03808b1660009081526101716020526040808220919091556101675490516370a0823160e01b81529116906370a08231906119469030906004016141c2565b60206040518083038186803b15801561195e57600080fd5b505afa158015611972573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061199691906140cd565b6101a65550506101a5805460ff19169055506001979650505050505050565b610166546001600160a01b031690565b61016854610167546000916104f09184916001600160a01b0390811691166134a6565b6101a65490565b610166546040516309316b5d60e31b81526000916001600160a01b03169063498b5ae890611a2390309086906004016141d6565b60206040518083038186803b158015611a3b57600080fd5b505afa158015611a4f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f091906140cd565b6000611a81838360006107a7565b9392505050565b60006104f0826135cd565b6101388054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104ce5780601f106104a3576101008083540402835291602001916104ce565b600080611b028484612637565b915091505b9250929050565b60006104ec611b1b611d31565b8461079185604051806060016040528060258152602001614528602591396101356000611b46611d31565b6001600160a01b03908116825260208083019390935260409182016000908120918d168152925290205491906121de565b60006104ec611b84611d31565b848461207e565b600092915050565b600080611c2a611ba284611a88565b610166546040516309316b5d60e31b81526001600160a01b039091169063498b5ae890611bd590309089906004016141d6565b60206040518083038186803b158015611bed57600080fd5b505afa158015611c01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c2591906140cd565b61325b565b91509150915091565b6101705490565b6000611c498484846000610d01565b949350505050565b60006104f08261016d60009054906101000a90046001600160a01b03166001600160a01b031663b2c53a6c6040518163ffffffff1660e01b815260040160206040518083038186803b158015611ca657600080fd5b505afa158015611cba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cde91906140cd565b6130b7565b6001600160a01b0391821660009081526101356020908152604080832093909416825291909152205490565b60001981565b6001600160a01b0316600090815261016f602052604090205490565b3390565b6001600160a01b038316611d7a5760405162461bcd60e51b81526004018080602001828103825260248152602001806144d76024913960400191505060405180910390fd5b6001600160a01b038216611dbf5760405162461bcd60e51b81526004018080602001828103825260228152602001806143a76022913960400191505060405180910390fd5b6001600160a01b0380841660008181526101356020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6000611e2d30613294565b15905090565b600054610100900460ff1680611e4c5750611e4c611e22565b80611e5a575060005460ff16155b611e955760405162461bcd60e51b815260040180806020018281038252602e8152602001806143ef602e913960400191505060405180910390fd5b600054610100900460ff16158015611ec0576000805460ff1961ff0019909116610100171660011790555b8015611ed2576000805461ff00191690555b50565b600054610100900460ff1680611eee5750611eee611e22565b80611efc575060005460ff16155b611f375760405162461bcd60e51b815260040180806020018281038252602e8152602001806143ef602e913960400191505060405180910390fd5b600054610100900460ff16158015611f62576000805460ff1961ff0019909116610100171660011790555b603354611f6d6135e9565b11611fa95760405162461bcd60e51b815260040180806020018281038252602881526020018061454d6028913960400191505060405180910390fd5b611fb16135e9565b6033558015611ed2576000805461ff001916905550565b600054610100900460ff1680611fe15750611fe1611e22565b80611fef575060005460ff16155b61202a5760405162461bcd60e51b815260040180806020018281038252602e8152602001806143ef602e913960400191505060405180910390fd5b600054610100900460ff16158015612055576000805460ff1961ff0019909116610100171660011790555b61205d611e33565b61206783836135ef565b8015612079576000805461ff00191690555b505050565b6001600160a01b0383166120c35760405162461bcd60e51b81526004018080602001828103825260258152602001806144b26025913960400191505060405180910390fd5b6001600160a01b0382166121085760405162461bcd60e51b81526004018080602001828103825260238152602001806143626023913960400191505060405180910390fd5b6121138383836136ca565b612151816040518060600160405280602681526020016143c9602691396001600160a01b0386166000908152610134602052604090205491906121de565b6001600160a01b0380851660009081526101346020526040808220939093559084168152205461218190826129e1565b6001600160a01b038084166000818152610134602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000818484111561226d5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561223257818101518382015260200161221a565b50505050905090810190601f16801561225f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600061227f613955565b90506001600160a01b03811615612079576040516307543e3f60e41b81526001600160a01b03821690637543e3f0906122be90859087906004016141d6565b600060405180830381600087803b1580156122d857600080fd5b505af11580156122ec573d6000803e3d6000fd5b50505050505050565b610173546060906001600160a01b03168061236c57604080516002808252606082018352909160208301908036833701905050915083838360008151811061233957fe5b602002602001018460018151811061234d57fe5b6001600160a01b039384166020918202929092010152911690526123e8565b6040805160038082526080820190925290602082016060803683370190505091508381848460008151811061239d57fe5b60200260200101856001815181106123b157fe5b60200260200101866002815181106123c557fe5b6001600160a01b0394851660209182029290920101529282169092529190911690525b5092915050565b6000808260018451038151811061240257fe5b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b815260040161243591906141c2565b60206040518083038186803b15801561244d57600080fd5b505afa158015612461573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061248591906140cd565b905061249385858530613398565b6124da81846001865103815181106124a757fe5b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610f2d91906141c2565b95945050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106125605780518252601f199092019160209182019101612541565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146125c2576040519150601f19603f3d011682016040523d82523d6000602084013e6125c7565b606091505b50915091508180156125f55750805115806125f557508080602001905160208110156125f257600080fd5b50515b6126305760405162461bcd60e51b815260040180806020018281038252602d8152602001806144fb602d913960400191505060405180910390fd5b5050505050565b600080828411156126e45761016d54604080516337ae0f1b60e01b815290516126d1926001600160a01b0316916337ae0f1b916004808301926020929190829003018186803b15801561268957600080fd5b505afa15801561269d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126c191906140cd565b6126cb86866126ef565b90612edb565b90506126dd84826126ef565b9150611b07565b509192600092509050565b6000611a8183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506121de565b6001600160a01b0382166127765760405162461bcd60e51b81526004018080602001828103825260218152602001806144666021913960400191505060405180910390fd5b612782826000836136ca565b6127c081604051806060016040528060228152602001614385602291396001600160a01b0385166000908152610134602052604090205491906121de565b6001600160a01b03831660009081526101346020526040902055610136546127e890826139d3565b610136556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60006104f06128c761016d60009054906101000a90046001600160a01b03166001600160a01b0316632262697e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561288857600080fd5b505afa15801561289c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128c091906140cd565b8490612edb565b83906129e1565b6000610cad61016d60009054906101000a90046001600160a01b03166001600160a01b0316635d03baea6040518163ffffffff1660e01b815260040160206040518083038186803b15801561292257600080fd5b505afa158015612936573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061295a91906140cd565b61016660009054906101000a90046001600160a01b03166001600160a01b03166335c7e9256040518163ffffffff1660e01b815260040160206040518083038186803b1580156129a957600080fd5b505afa1580156129bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126cb91906140cd565b600082820183811015611a81576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008061016d60009054906101000a90046001600160a01b03166001600160a01b031663ad214e1a6040518163ffffffff1660e01b815260040160206040518083038186803b158015612a8d57600080fd5b505afa158015612aa1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ac59190613d7a565b90506001600160a01b038116612ae45750610169546001600160a01b03165b6040516370a0823160e01b81526000906001600160a01b038316906370a0823190612b139087906004016141c2565b60206040518083038186803b158015612b2b57600080fd5b505afa158015612b3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b6391906140cd565b9050600061016d60009054906101000a90046001600160a01b03166001600160a01b031663acdd82436040518163ffffffff1660e01b815260040160206040518083038186803b158015612bb657600080fd5b505afa158015612bca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bee9190613d7a565b90506001600160a01b03811615612c82576040516370a0823160e01b8152612c7f906001600160a01b038316906370a0823190612c2f9089906004016141c2565b60206040518083038186803b158015612c4757600080fd5b505afa158015612c5b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128c791906140cd565b91505b509392505050565b600080612c95613955565b83925090506001600160a01b038116156123e8576101675460405163357a2a2560e11b81526001600160a01b03918216918591600091851690636af4544a90612ce29086906004016141c2565b60206040518083038186803b158015612cfa57600080fd5b505afa158015612d0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d3291906140cd565b90508015612dbf5760405163091dc99960e11b81526001600160a01b0385169063123b933290612d6a908a90879087906004016141f0565b602060405180830381600087803b158015612d8457600080fd5b505af1158015612d98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dbc91906140cd565b91505b8115612ed157604051638b4d757760e01b81526000906001600160a01b03861690638b4d757790612df8908b90889088906004016141f0565b60806040518083038186803b158015612e1057600080fd5b505afa158015612e24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e489190614106565b5050509050612e6081886126ef90919063ffffffff16565b9550612e6d8486836124e3565b6040516339f3a9fd60e21b81526001600160a01b0386169063e7cea7f490612e9d908b90889088906004016141f0565b600060405180830381600087803b158015612eb757600080fd5b505af1158015612ecb573d6000803e3d6000fd5b50505050505b5050505092915050565b6000821580612ee8575081155b15612ef5575060006104f0565b816113881981612f0157fe5b04831115604051806040016040528060038152602001624d4d4f60e81b81525090612f6d5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561223257818101518382015260200161221a565b50612710838302611388015b049392505050565b6000606061016d60009054906101000a90046001600160a01b03166001600160a01b031663c31c9c076040518163ffffffff1660e01b815260040160206040518083038186803b158015612fd457600080fd5b505afa158015612fe8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061300c9190613d7a565b6001600160a01b0316631f00ca748661302587876122f5565b6040518363ffffffff1660e01b815260040161304292919061429c565b60006040518083038186803b15801561305a57600080fd5b505afa15801561306e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526130969190810190613ff4565b9050806000815181106130a557fe5b60200260200101519150509392505050565b60006127108311156131515761314c6127106131466130d685836126ef565b61314061312e61271061016d60009054906101000a90046001600160a01b03166001600160a01b031663fb844c2c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f4557600080fd5b61313a896127106126ef565b90613a30565b90613a89565b906129e1565b611a81565b61271061315e8480613a30565b81612f7957fe5b6001600160a01b0382166131c0576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6131cc600083836136ca565b610136546131da90826129e1565b610136556001600160a01b0382166000908152610134602052604090205461320290826129e1565b6001600160a01b0383166000818152610134602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b610167546101685460009182916132809186916001600160a01b0391821691166134a6565b915061328b83612831565b90509250929050565b3b151590565b60008061016d60009054906101000a90046001600160a01b03166001600160a01b031663ab78ace46040518163ffffffff1660e01b815260040160206040518083038186803b1580156132ec57600080fd5b505afa158015613300573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061332491906140cd565b905061337861016d60009054906101000a90046001600160a01b03166001600160a01b031663b339b3686040518163ffffffff1660e01b815260040160206040518083038186803b15801561288857600080fd5b915060008111801561338957508082115b15613392578091505b50919050565b61016d546040805163c31c9c0760e01b815290516000926001600160a01b03169163c31c9c07916004808301926020929190829003018186803b1580156133de57600080fd5b505afa1580156133f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906134169190613d7a565b90506134378360008151811061342857fe5b60200260200101518287613acb565b604051635c11d79560e01b81526001600160a01b03821690635c11d7959061346d908890889088908890600019906004016142c3565b600060405180830381600087803b15801561348757600080fd5b505af115801561349b573d6000803e3d6000fd5b505050505050505050565b6000606061016d60009054906101000a90046001600160a01b03166001600160a01b031663c31c9c076040518163ffffffff1660e01b815260040160206040518083038186803b1580156134f957600080fd5b505afa15801561350d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906135319190613d7a565b6001600160a01b031663d06ca61f8661354a87876122f5565b6040518363ffffffff1660e01b815260040161356792919061429c565b60006040518083038186803b15801561357f57600080fd5b505afa158015613593573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526135bb9190810190613ff4565b9050806001825103815181106130a557fe5b6001600160a01b03166000908152610134602052604090205490565b60001990565b600054610100900460ff16806136085750613608611e22565b80613616575060005460ff16155b6136515760405162461bcd60e51b815260040180806020018281038252602e8152602001806143ef602e913960400191505060405180910390fd5b600054610100900460ff1615801561367c576000805460ff1961ff0019909116610100171660011790555b825161369090610137906020860190613c7d565b5081516136a590610138906020850190613c7d565b50610139805460ff191660121790558015612079576000805461ff0019169055505050565b6001600160a01b03831615806136e757506001600160a01b038216155b156136f157612079565b610166546040516309316b5d60e31b81526000916001600160a01b03169063498b5ae89061372590309088906004016141d6565b60206040518083038186803b15801561373d57600080fd5b505afa158015613751573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061377591906140cd565b9050801561382f57600061378885611a88565b6137928385613a30565b8161379957fe5b61016654604051637f1bebdf60e11b81529290910492506001600160a01b03169063fe37d7be906137d2908890889086906004016141f0565b602060405180830381600087803b1580156137ec57600080fd5b505af1158015613800573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906138249190614095565b61382d57600080fd5b505b600061383a85611a88565b6001600160a01b038616600090815261016f602052604090205490915080156138c557600061386d836131408488613a30565b905061387982826126ef565b6001600160a01b03808916600090815261016f602052604080822093909355908816815220546138a990826129e1565b6001600160a01b038716600090815261016f6020526040902055505b6001600160a01b0386166000908152610171602052604090205480156122ec5760006138f5846131408489613a30565b905061390182826126ef565b6001600160a01b03808a1660009081526101716020526040808220939093559089168152205461393190826129e1565b6001600160a01b038816600090815261017160205260409020555050505050505050565b61016d546040805163337108d160e21b815290516000926001600160a01b03169163cdc42344916004808301926020929190829003018186803b15801561399b57600080fd5b505afa1580156139af573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cad9190613d7a565b600082821115613a2a576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600082613a3f575060006104f0565b82820282848281613a4c57fe5b0414611a815760405162461bcd60e51b815260040180806020018281038252602181526020018061441d6021913960400191505060405180910390fd5b6000611a8183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250613c18565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b178152925182516000946060949389169392918291908083835b60208310613b485780518252601f199092019160209182019101613b29565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114613baa576040519150601f19603f3d011682016040523d82523d6000602084013e613baf565b606091505b5091509150818015613bdd575080511580613bdd5750808060200190516020811015613bda57600080fd5b50515b6126305760405162461bcd60e51b815260040180806020018281038252602b815260200180614487602b913960400191505060405180910390fd5b60008183613c675760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561223257818101518382015260200161221a565b506000838581613c7357fe5b0495945050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282613cb35760008555613cf9565b82601f10613ccc57805160ff1916838001178555613cf9565b82800160010185558215613cf9579182015b82811115613cf9578251825591602001919060010190613cde565b50613d05929150613d09565b5090565b5b80821115613d055760008155600101613d0a565b60008083601f840112613d2f578182fd5b50813567ffffffffffffffff811115613d46578182fd5b602083019150836020828501011115611b0757600080fd5b600060208284031215613d6f578081fd5b8135611a818161434c565b600060208284031215613d8b578081fd5b8151611a818161434c565b60008060408385031215613da8578081fd5b8235613db38161434c565b91506020830135613dc38161434c565b809150509250929050565b600080600080600080600080600060c08a8c031215613deb578485fd5b8935613df68161434c565b985060208a0135613e068161434c565b975060408a0135613e168161434c565b965060608a013567ffffffffffffffff80821115613e32578687fd5b818c0191508c601f830112613e45578687fd5b813581811115613e53578788fd5b8d60208083028501011115613e66578788fd5b6020830198508097505060808c0135915080821115613e83578586fd5b613e8f8d838e01613d1e565b909650945060a08c0135915080821115613ea7578384fd5b50613eb48c828d01613d1e565b915080935050809150509295985092959850929598565b600080600060608486031215613edf578283fd5b8335613eea8161434c565b92506020840135613efa8161434c565b929592945050506040919091013590565b60008060408385031215613f1d578182fd5b8235613f288161434c565b946020939093013593505050565b600080600060608486031215613f4a578283fd5b8335613f558161434c565b9250602084013591506040840135613f6c8161434c565b809150509250925092565b600080600060608486031215613f8b578283fd5b8335613f968161434c565b95602085013595506040909401359392505050565b60008060008060808587031215613fc0578384fd5b8435613fcb8161434c565b935060208501359250604085013591506060850135613fe98161434c565b939692955090935050565b60006020808385031215614006578182fd5b825167ffffffffffffffff8082111561401d578384fd5b818501915085601f830112614030578384fd5b81518181111561403c57fe5b838102915061404c848301614328565b8181528481019084860184860187018a1015614066578788fd5b8795505b8386101561408857805183526001959095019491860191860161406a565b5098975050505050505050565b6000602082840312156140a6578081fd5b81518015158114611a81578182fd5b6000602082840312156140c6578081fd5b5035919050565b6000602082840312156140de578081fd5b5051919050565b600080604083850312156140f7578182fd5b50508035926020909101359150565b6000806000806080858703121561411b578182fd5b505082516020840151604085015160609095015191969095509092509050565b6000815180845260208085019450808401835b838110156141735781516001600160a01b03168752958201959082019060010161414e565b509495945050505050565b600082848337506e2053686f7274696e672050726f787960881b9101908152600f01919050565b6000602d60f81b8252828460018401379101600101908152919050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b039390931683526020830191909152604082015260600190565b901515815260200190565b6000602080835283518082850152825b8181101561426c57858101830151858201604001528201614250565b8181111561427d5783604083870101525b50601f01601f1916929092016040019392505050565b90815260200190565b600083825260406020830152611c49604083018461413b565b918252602082015260400190565b600086825285602083015260a060408301526142e260a083018661413b565b6001600160a01b0394909416606083015250608001529392505050565b93845260208401929092526040830152606082015260800190565b60ff91909116815260200190565b60405181810167ffffffffffffffff8111828210171561434457fe5b604052919050565b6001600160a01b0381168114611ed257600080fdfe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f20616464726573735472616e7366657248656c7065723a3a73616665417070726f76653a20617070726f7665206661696c656445524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735472616e7366657248656c7065723a3a736166655472616e736665723a207472616e73666572206661696c656445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f56657273696f6e65643a207265766973696f6e20697320746f6f206c6f7720746f20757064617465a26469706673582212208787ae9e5e3d416aa706a153fd8ee56427e1aa6814cdf3197759f163fa3e4eb964736f6c63430007040033a26469706673582212208a06934845ac95bad52ba1662156a0db00fa9a00aa3dddd7a1ffe735f7630e8e64736f6c63430007040033";

export class ShortingPairDeployerNext__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShortingPairDeployerNext> {
    return super.deploy(overrides || {}) as Promise<ShortingPairDeployerNext>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ShortingPairDeployerNext {
    return super.attach(address) as ShortingPairDeployerNext;
  }
  connect(signer: Signer): ShortingPairDeployerNext__factory {
    return super.connect(signer) as ShortingPairDeployerNext__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShortingPairDeployerNextInterface {
    return new utils.Interface(_abi) as ShortingPairDeployerNextInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShortingPairDeployerNext {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ShortingPairDeployerNext;
  }
}

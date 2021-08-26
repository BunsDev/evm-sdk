/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ShortingPairDeployer,
  ShortingPairDeployerInterface,
} from "../ShortingPairDeployer";

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
  "0x608060405234801561001057600080fd5b506146b6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063aec525e41461003b578063dde43cba1461005f575b600080fd5b610043610079565b604080516001600160a01b039092168252519081900360200190f35b6100676100bb565b60408051918252519081900360200190f35b60006100b66040518060200161008e90610137565b601f1982820381018352601f909101166040526b29b437b93a34b733a830b4b960a11b6100c0565b905090565b602381565b60008060ff60f81b308486805190602001206040516020016100e59493929190610144565b6040516020818303038152906040528051906020012090508060001c915061010c8261012b565b156101175750610125565b828451602086016000f59150505b92915050565b3b63ffffffff16151590565b6145038061017e83390190565b6001600160f81b031994909416845260609290921b6bffffffffffffffffffffffff19166001840152601583015260358201526055019056fe608060405234801561001057600080fd5b506144e3806100206000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80636a3e400c1161010f578063b07f80a1116100a2578063d59172f311610071578063d59172f314610400578063dd62ed3e14610413578063dde43cba14610426578063e1254fba1461042e576101f0565b8063b07f80a1146103bf578063b516f7b1146103d2578063c022215c146103e5578063c5654acc146103ed576101f0565b806395d89b41116100de57806395d89b4114610370578063975bf01014610378578063a457c2d714610399578063a9059cbb146103ac576101f0565b80636a3e400c1461032f57806370a0823114610337578063742fe1f81461034a578063935a8b841461035d576101f0565b8063313ce567116101875780633d07975d116101565780633d07975d146102e1578063586e848f146102f457806359bf5d39146103075780635c1952171461031c576101f0565b8063313ce5671461029e57806333481fc9146102b35780633804ee19146102c657806339509351146102ce576101f0565b806323b872dd116101c357806323b872dd1461025d5780632929c6e6146102705780632cd45399146102785780632f04bd561461028b576101f0565b806306fdde03146101f5578063095ea7b31461021357806318160ddd146102335780631efb37c614610248575b600080fd5b6101fd610441565b60405161020a9190614179565b60405180910390f35b610226610221366004613e44565b6104d8565b60405161020a919061416e565b61023b6104f6565b60405161020a91906141cc565b61025b610256366004613d07565b6104fd565b005b61022661026b366004613e04565b610718565b61023b6107a0565b61023b610286366004613e6f565b6107a7565b61023b610299366004613fee565b610c72565b6102a6610c7d565b60405161020a9190614253565b61023b6102c1366004613c97565b610c87565b61023b610ca3565b6102266102dc366004613e44565b610cb2565b61023b6102ef366004613ee4565b610d01565b610226610302366004613ccf565b61154b565b61030f61194f565b60405161020a91906140fb565b61023b61032a366004613fee565b61195f565b61023b611982565b61023b610345366004613c97565b611989565b61023b610358366004613e44565b611a0d565b61023b61036b366004613c97565b611a22565b6101fd611a2d565b61038b61038636600461401e565b611a8f565b60405161020a9291906141ee565b6102266103a7366004613e44565b611aa8565b6102266103ba366004613e44565b611b11565b61023b6103cd36600461401e565b611b25565b61038b6103e0366004613c97565b611b31565b61023b611bd1565b61023b6103fb366004613eb0565b611bd8565b61023b61040e366004613fee565b611bef565b61023b610421366004613ccf565b611c81565b61023b611cad565b61023b61043c366004613c97565b611cb2565b6101378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104ce5780601f106104a3576101008083540402835291602001916104ce565b820191906000526020600020905b8154815290600101906020018083116104b157829003601f168201915b5050505050905090565b60006104ec6104e5611cce565b8484611cd2565b5060015b92915050565b6101365490565b600054610100900460ff16806105165750610516611dbf565b80610524575060005460ff16155b61055f5760405162461bcd60e51b815260040180806020018281038252602e815260200180614328602e913960400191505060405180910390fd5b600054610100900460ff1615801561058a576000805460ff1961ff0019909116610100171660011790555b610592611dd0565b61059a611e72565b6105e685856040516020016105b09291906140b7565b60405160208183030381529060405284846040516020016105d29291906140de565b604051602081830303815290604052611f65565b61016d80546001600160a01b03808c166001600160a01b03199283161790925561016680548d84169083161790556101698054928b1692909116919091179055868660008161063157fe5b90506020020160208101906106469190613c97565b61016780546001600160a01b0319166001600160a01b03929092169190911790558686600019810181811061067757fe5b905060200201602081019061068c9190613c97565b61016880546001600160a01b0319166001600160a01b039290921691909117905560038614156106fa57868660018181106106c357fe5b90506020020160208101906106d89190613c97565b61017380546001600160a01b0319166001600160a01b03929092169190911790555b801561070c576000805461ff00191690555b50505050505050505050565b600061072584848461201b565b61079684610731611cce565b61079185604051806060016040528060288152602001614377602891396001600160a01b038a1660009081526101356020526040812090610770611cce565b6001600160a01b03168152602081019190915260400160002054919061217b565b611cd2565b5060019392505050565b6101725490565b6101a554604080518082019091526002815261272960f11b602082015260009160ff16156107f15760405162461bcd60e51b81526004016107e89190614179565b60405180910390fd5b506101a5805460ff1916600117905561080a8483612212565b600061081530611a22565b6101675461016854919250610843918391879161083e916001600160a01b039081169116612292565b61238c565b91508382101560405180604001604052806003815260200162494f4160e81b815250906108835760405162461bcd60e51b81526004016107e89190614179565b50610166546040516309316b5d60e31b81526000916001600160a01b03169063498b5ae8906108b8903090819060040161410f565b60206040518083038186803b1580156108d057600080fd5b505afa1580156108e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109089190614006565b905080156109f357610168546101665461092f916001600160a01b03908116911683612480565b61016654604051630ddace3d60e31b81526000916001600160a01b031690636ed671e890610963903090819060040161410f565b602060405180830381600087803b15801561097d57600080fd5b505af1158015610991573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b59190614006565b604080518082019091526002815261111360f21b602082015290915081156109f05760405162461bcd60e51b81526004016107e89190614179565b50505b610168546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610a259030906004016140fb565b60206040518083038186803b158015610a3d57600080fd5b505afa158015610a51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a759190614006565b6101685461016754919250600091610aa1918491849161083e916001600160a01b039182169116612292565b30600090815261016f602052604081205491925080610ac084846125d4565b90925090508115610ae35761016754610ae3906001600160a01b03168c84612480565b8015610b76576101675461016d5460408051633f6927ad60e21b81529051610b76936001600160a01b0390811693169163fda49eb4916004808301926020929190829003018186803b158015610b3857600080fd5b505afa158015610b4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b709190613cb3565b83612480565b61017054610b84908461268c565b6101705530600090815261016f6020908152604080832083905561017190915290205461017254610bb49161268c565b610172553060008181526101716020526040812055610bd390886126ce565b610167546040516370a0823160e01b81526001600160a01b03909116906370a0823190610c049030906004016140fb565b60206040518083038186803b158015610c1c57600080fd5b505afa158015610c30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c549190614006565b6101a65550506101a5805460ff191690555093979650505050505050565b60006104f0826127ce565b6101395460ff1690565b6001600160a01b03166000908152610171602052604090205490565b6000610cad61286b565b905090565b60006104ec610cbf611cce565b84610791856101356000610cd1611cce565b6001600160a01b03908116825260208083019390935260409182016000908120918c1681529252902054906128e9565b6101a554604080518082019091526002815261272960f11b602082015260009160ff1615610d425760405162461bcd60e51b81526004016107e89190614179565b506101a5805460ff19166001179055610d5b8583612212565b61016d5460408051632cb14e9b60e21b815290516000926001600160a01b03169163b2c53a6c916004808301926020929190829003018186803b158015610da157600080fd5b505afa158015610db5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd99190614006565b90506103e88510158015610ded5750808511155b6040518060400160405280600381526020016224a62360e91b81525090610e275760405162461bcd60e51b81526004016107e89190614179565b5061016d546040516313d8c14960e11b81526001600160a01b03909116906327b1829290610e599088906004016141cc565b60206040518083038186803b158015610e7157600080fd5b505afa158015610e85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea99190614006565b610eb287612943565b10156040518060400160405280600381526020016224aba160e91b81525090610eee5760405162461bcd60e51b81526004016107e89190614179565b506101a654610167546040516370a0823160e01b8152600092610f839290916001600160a01b03909116906370a0823190610f2d9030906004016140fb565b60206040518083038186803b158015610f4557600080fd5b505afa158015610f59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7d9190614006565b9061268c565b905080610f908882612b92565b91506000610f9e8389612de3565b6001600160a01b038a16600090815261016f6020526040902054909150610fc590846128e9565b6001600160a01b038a16600090815261016f602052604090205561017054610fed90846128e9565b61017055801561117b5761016d60009054906101000a90046001600160a01b03166001600160a01b0316635f4985c46040518163ffffffff1660e01b815260040160206040518083038186803b15801561104657600080fd5b505afa15801561105a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107e9190614006565b8310156040518060400160405280600381526020016212541160ea1b815250906110bb5760405162461bcd60e51b81526004016107e89190614179565b506001600160a01b038916600090815261017160205260409020546110e090826128e9565b6001600160a01b038a16600090815261017160205260409020556101725461110890826128e9565b61017255610166546001600160a01b031663c1bce0b78a8361112a8c89612f35565b6040518463ffffffff1660e01b81526004016111489392919061414d565b600060405180830381600087803b15801561116257600080fd5b505af1158015611176573d6000803e3d6000fd5b505050505b61016854610167546111a19183918a9161083e916001600160a01b039182169116612292565b945061016d60009054906101000a90046001600160a01b03166001600160a01b0316633cbb3a126040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156111f457600080fd5b505af1158015611208573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122c9190614006565b61016d60009054906101000a90046001600160a01b03166001600160a01b03166336d8b0cc6040518163ffffffff1660e01b815260040160206040518083038186803b15801561127b57600080fd5b505afa15801561128f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b39190613cb3565b6001600160a01b031663c6414eee83886040518363ffffffff1660e01b81526004016112e09291906141ee565b60206040518083038186803b1580156112f857600080fd5b505afa15801561130c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113309190614006565b11156040518060400160405280600381526020016250544f60e81b8152509061136c5760405162461bcd60e51b81526004016107e89190614179565b50604080518082019091526003815262494f4160e81b6020820152878610156113a85760405162461bcd60e51b81526004016107e89190614179565b506113bc896113b787866128e9565b612feb565b610167546040516370a0823160e01b81526001600160a01b03909116906370a08231906113ed9030906004016140fb565b60206040518083038186803b15801561140557600080fd5b505afa158015611419573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143d9190614006565b6101a655600061144c8a611a22565b610166546040516309316b5d60e31b81529192506000916001600160a01b039091169063498b5ae8906114859030908f9060040161410f565b60206040518083038186803b15801561149d57600080fd5b505afa1580156114b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d59190614006565b90506000806114e484846130e1565b915091508c6001600160a01b03167fb98156c17808b3817e8788117b9125cd2c3cb02f6058f9870d44b648702bc577858585856040516115279493929190614238565b60405180910390a250506101a5805460ff1916905550949998505050505050505050565b6101a554604080518082019091526002815261272960f11b602082015260009160ff161561158c5760405162461bcd60e51b81526004016107e89190614179565b506101a5805460ff191660011790556115b46115a6611cce565b6001600160a01b031661311a565b1560405180604001604052806003815260200162464c4360e81b815250906115ef5760405162461bcd60e51b81526004016107e89190614179565b5060006115fb84611a22565b610166546040516309316b5d60e31b81529192506000916001600160a01b039091169063498b5ae890611634903090899060040161410f565b60206040518083038186803b15801561164c57600080fd5b505afa158015611660573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116849190614006565b905060008061169384846130e1565b91509150808210604051806040016040528060048152602001630554c48560e41b815250906116d55760405162461bcd60e51b81526004016107e89190614179565b5061016754610168546000916116ff918791849161083e916001600160a01b039081169116612292565b9050600061170c82613120565b610168546101675491925061173c918391600091611736916001600160a01b039081169116612292565b8b61321e565b6000611748838361268c565b9050858111156117aa576101685461016654611771916001600160a01b03908116911688612480565b6117a561177e828861268c565b610168546101675460009161179f916001600160a01b039182169116612292565b8d61321e565b6117c9565b61016854610166546117c9916001600160a01b03908116911683612480565b6117d38a886126ce565b610166546040516305f0caad60e31b81526001600160a01b0390911690632f86556890611804908d906004016140fb565b600060405180830381600087803b15801561181e57600080fd5b505af1158015611832573d6000803e3d6000fd5b505050506001600160a01b038a16600090815261016f60205260409020546101705461185d9161268c565b610170556001600160a01b038a16600090815261016f60209081526040808320839055610171909152902054610172546118969161268c565b610172556001600160a01b03808b1660009081526101716020526040808220919091556101675490516370a0823160e01b81529116906370a08231906118e09030906004016140fb565b60206040518083038186803b1580156118f857600080fd5b505afa15801561190c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119309190614006565b6101a65550506101a5805460ff19169055506001979650505050505050565b610166546001600160a01b031690565b61016854610167546000916104f09184916001600160a01b03908116911661332c565b6101a65490565b610166546040516309316b5d60e31b81526000916001600160a01b03169063498b5ae8906119bd903090869060040161410f565b60206040518083038186803b1580156119d557600080fd5b505afa1580156119e9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f09190614006565b6000611a1b838360006107a7565b9392505050565b60006104f082613465565b6101388054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104ce5780601f106104a3576101008083540402835291602001916104ce565b600080611a9c84846125d4565b915091505b9250929050565b60006104ec611ab5611cce565b8461079185604051806060016040528060258152602001614461602591396101356000611ae0611cce565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919061217b565b60006104ec611b1e611cce565b848461201b565b6000611a1b8383612de3565b600080611bc8611b4084611a22565b610166546040516309316b5d60e31b81526001600160a01b039091169063498b5ae890611b73903090899060040161410f565b60206040518083038186803b158015611b8b57600080fd5b505afa158015611b9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bc39190614006565b6130e1565b91509150915091565b6101705490565b6000611be78484846000610d01565b949350505050565b60006104f08261016d60009054906101000a90046001600160a01b03166001600160a01b031663b2c53a6c6040518163ffffffff1660e01b815260040160206040518083038186803b158015611c4457600080fd5b505afa158015611c58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c7c9190614006565b612f35565b6001600160a01b0391821660009081526101356020908152604080832093909416825291909152205490565b602381565b6001600160a01b0316600090815261016f602052604090205490565b3390565b6001600160a01b038316611d175760405162461bcd60e51b81526004018080602001828103825260248152602001806144106024913960400191505060405180910390fd5b6001600160a01b038216611d5c5760405162461bcd60e51b81526004018080602001828103825260228152602001806142e06022913960400191505060405180910390fd5b6001600160a01b0380841660008181526101356020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6000611dca3061311a565b15905090565b600054610100900460ff1680611de95750611de9611dbf565b80611df7575060005460ff16155b611e325760405162461bcd60e51b815260040180806020018281038252602e815260200180614328602e913960400191505060405180910390fd5b600054610100900460ff16158015611e5d576000805460ff1961ff0019909116610100171660011790555b8015611e6f576000805461ff00191690555b50565b600054610100900460ff1680611e8b5750611e8b611dbf565b80611e99575060005460ff16155b611ed45760405162461bcd60e51b815260040180806020018281038252602e815260200180614328602e913960400191505060405180910390fd5b600054610100900460ff16158015611eff576000805460ff1961ff0019909116610100171660011790555b603354611f0a613481565b11611f465760405162461bcd60e51b81526004018080602001828103825260288152602001806144866028913960400191505060405180910390fd5b611f4e613481565b6033558015611e6f576000805461ff001916905550565b600054610100900460ff1680611f7e5750611f7e611dbf565b80611f8c575060005460ff16155b611fc75760405162461bcd60e51b815260040180806020018281038252602e815260200180614328602e913960400191505060405180910390fd5b600054610100900460ff16158015611ff2576000805460ff1961ff0019909116610100171660011790555b611ffa611dd0565b6120048383613486565b8015612016576000805461ff00191690555b505050565b6001600160a01b0383166120605760405162461bcd60e51b81526004018080602001828103825260258152602001806143eb6025913960400191505060405180910390fd5b6001600160a01b0382166120a55760405162461bcd60e51b815260040180806020018281038252602381526020018061429b6023913960400191505060405180910390fd5b6120b0838383613561565b6120ee81604051806060016040528060268152602001614302602691396001600160a01b03861660009081526101346020526040902054919061217b565b6001600160a01b0380851660009081526101346020526040808220939093559084168152205461211e90826128e9565b6001600160a01b038084166000818152610134602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000818484111561220a5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156121cf5781810151838201526020016121b7565b50505050905090810190601f1680156121fc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600061221c6137ec565b90506001600160a01b03811615612016576040516307543e3f60e41b81526001600160a01b03821690637543e3f09061225b908590879060040161410f565b600060405180830381600087803b15801561227557600080fd5b505af1158015612289573d6000803e3d6000fd5b50505050505050565b610173546060906001600160a01b0316806123095760408051600280825260608201835290916020830190803683370190505091508383836000815181106122d657fe5b60200260200101846001815181106122ea57fe5b6001600160a01b03938416602091820292909201015291169052612385565b6040805160038082526080820190925290602082016060803683370190505091508381848460008151811061233a57fe5b602002602001018560018151811061234e57fe5b602002602001018660028151811061236257fe5b6001600160a01b0394851660209182029290920101529282169092529190911690525b5092915050565b6000808260018451038151811061239f57fe5b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016123d291906140fb565b60206040518083038186803b1580156123ea57600080fd5b505afa1580156123fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124229190614006565b90506124308585853061321e565b612477818460018651038151811061244457fe5b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610f2d91906140fb565b95945050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106124fd5780518252601f1990920191602091820191016124de565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461255f576040519150601f19603f3d011682016040523d82523d6000602084013e612564565b606091505b5091509150818015612592575080511580612592575080806020019051602081101561258f57600080fd5b50515b6125cd5760405162461bcd60e51b815260040180806020018281038252602d815260200180614434602d913960400191505060405180910390fd5b5050505050565b600080828411156126815761016d54604080516337ae0f1b60e01b8152905161266e926001600160a01b0316916337ae0f1b916004808301926020929190829003018186803b15801561262657600080fd5b505afa15801561263a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061265e9190614006565b612668868661268c565b9061386a565b905061267a848261268c565b9150611aa1565b509192600092509050565b6000611a1b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061217b565b6001600160a01b0382166127135760405162461bcd60e51b815260040180806020018281038252602181526020018061439f6021913960400191505060405180910390fd5b61271f82600083613561565b61275d816040518060600160405280602281526020016142be602291396001600160a01b03851660009081526101346020526040902054919061217b565b6001600160a01b0383166000908152610134602052604090205561013654612785908261390c565b610136556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60006104f061286461016d60009054906101000a90046001600160a01b03166001600160a01b0316632262697e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561282557600080fd5b505afa158015612839573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061285d9190614006565b849061386a565b83906128e9565b61016654604080516335c7e92560e01b815290516000926001600160a01b0316916335c7e925916004808301926020929190829003018186803b1580156128b157600080fd5b505afa1580156128c5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cad9190614006565b600082820183811015611a1b576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008061016d60009054906101000a90046001600160a01b03166001600160a01b031663ad214e1a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561299557600080fd5b505afa1580156129a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129cd9190613cb3565b90506001600160a01b0381166129ec5750610169546001600160a01b03165b6040516370a0823160e01b81526000906001600160a01b038316906370a0823190612a1b9087906004016140fb565b60206040518083038186803b158015612a3357600080fd5b505afa158015612a47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a6b9190614006565b9050600061016d60009054906101000a90046001600160a01b03166001600160a01b031663acdd82436040518163ffffffff1660e01b815260040160206040518083038186803b158015612abe57600080fd5b505afa158015612ad2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612af69190613cb3565b90506001600160a01b03811615612b8a576040516370a0823160e01b8152612b87906001600160a01b038316906370a0823190612b379089906004016140fb565b60206040518083038186803b158015612b4f57600080fd5b505afa158015612b63573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128649190614006565b91505b509392505050565b600080612b9d6137ec565b83925090506001600160a01b03811615612385576101675460405163357a2a2560e11b81526001600160a01b03918216918591600091851690636af4544a90612bea9086906004016140fb565b60206040518083038186803b158015612c0257600080fd5b505afa158015612c16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c3a9190614006565b90508015612cc75760405163091dc99960e11b81526001600160a01b0385169063123b933290612c72908a9087908790600401614129565b602060405180830381600087803b158015612c8c57600080fd5b505af1158015612ca0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cc49190614006565b91505b8115612dd957604051638b4d757760e01b81526000906001600160a01b03861690638b4d757790612d00908b9088908890600401614129565b60806040518083038186803b158015612d1857600080fd5b505afa158015612d2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d50919061403f565b5050509050612d68818861268c90919063ffffffff16565b9550612d75848683612480565b6040516339f3a9fd60e21b81526001600160a01b0386169063e7cea7f490612da5908b9088908890600401614129565b600060405180830381600087803b158015612dbf57600080fd5b505af1158015612dd3573d6000803e3d6000fd5b50505050505b5050505092915050565b6000606061016d60009054906101000a90046001600160a01b03166001600160a01b031663c31c9c076040518163ffffffff1660e01b815260040160206040518083038186803b158015612e3657600080fd5b505afa158015612e4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e6e9190613cb3565b6001600160a01b0316631f00ca74612e86868661386a565b6101685461016754612ea4916001600160a01b039081169116612292565b6040518363ffffffff1660e01b8152600401612ec19291906141d5565b60006040518083038186803b158015612ed957600080fd5b505afa158015612eed573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612f159190810190613f2d565b905080600081518110612f2457fe5b602002602001015191505092915050565b6000612710831115612fcf57612fca612710612fc4612f54858361268c565b612fbe612fac61271061016d60009054906101000a90046001600160a01b03166001600160a01b031663fb844c2c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f4557600080fd5b612fb88961271061268c565b90613969565b906139c2565b906128e9565b611a1b565b612710612fdc8480613969565b81612fe357fe5b049392505050565b6001600160a01b038216613046576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61305260008383613561565b6101365461306090826128e9565b610136556001600160a01b0382166000908152610134602052604090205461308890826128e9565b6001600160a01b0383166000818152610134602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b610167546101685460009182916131069186916001600160a01b03918216911661332c565b9150613111836127ce565b90509250929050565b3b151590565b60008061016d60009054906101000a90046001600160a01b03166001600160a01b031663ab78ace46040518163ffffffff1660e01b815260040160206040518083038186803b15801561317257600080fd5b505afa158015613186573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131aa9190614006565b90506131fe61016d60009054906101000a90046001600160a01b03166001600160a01b031663b339b3686040518163ffffffff1660e01b815260040160206040518083038186803b15801561282557600080fd5b915060008111801561320f57508082115b15613218578091505b50919050565b61016d546040805163c31c9c0760e01b815290516000926001600160a01b03169163c31c9c07916004808301926020929190829003018186803b15801561326457600080fd5b505afa158015613278573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061329c9190613cb3565b90506132bd836000815181106132ae57fe5b60200260200101518287613a04565b604051635c11d79560e01b81526001600160a01b03821690635c11d795906132f3908890889088908890600019906004016141fc565b600060405180830381600087803b15801561330d57600080fd5b505af1158015613321573d6000803e3d6000fd5b505050505050505050565b6000606061016d60009054906101000a90046001600160a01b03166001600160a01b031663c31c9c076040518163ffffffff1660e01b815260040160206040518083038186803b15801561337f57600080fd5b505afa158015613393573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133b79190613cb3565b6001600160a01b031663d06ca61f866133d08787612292565b6040518363ffffffff1660e01b81526004016133ed9291906141d5565b60006040518083038186803b15801561340557600080fd5b505afa158015613419573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526134419190810190613f2d565b90508060018251038151811061345357fe5b60200260200101519150509392505050565b6001600160a01b03166000908152610134602052604090205490565b602390565b600054610100900460ff168061349f575061349f611dbf565b806134ad575060005460ff16155b6134e85760405162461bcd60e51b815260040180806020018281038252602e815260200180614328602e913960400191505060405180910390fd5b600054610100900460ff16158015613513576000805460ff1961ff0019909116610100171660011790555b825161352790610137906020860190613bb6565b50815161353c90610138906020850190613bb6565b50610139805460ff191660121790558015612016576000805461ff0019169055505050565b6001600160a01b038316158061357e57506001600160a01b038216155b1561358857612016565b610166546040516309316b5d60e31b81526000916001600160a01b03169063498b5ae8906135bc903090889060040161410f565b60206040518083038186803b1580156135d457600080fd5b505afa1580156135e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061360c9190614006565b905080156136c657600061361f85611a22565b6136298385613969565b8161363057fe5b61016654604051637f1bebdf60e11b81529290910492506001600160a01b03169063fe37d7be9061366990889088908690600401614129565b602060405180830381600087803b15801561368357600080fd5b505af1158015613697573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136bb9190613fce565b6136c457600080fd5b505b60006136d185611a22565b6001600160a01b038616600090815261016f6020526040902054909150801561375c57600061370483612fbe8488613969565b9050613710828261268c565b6001600160a01b03808916600090815261016f6020526040808220939093559088168152205461374090826128e9565b6001600160a01b038716600090815261016f6020526040902055505b6001600160a01b03861660009081526101716020526040902054801561228957600061378c84612fbe8489613969565b9050613798828261268c565b6001600160a01b03808a166000908152610171602052604080822093909355908916815220546137c890826128e9565b6001600160a01b038816600090815261017160205260409020555050505050505050565b61016d546040805163337108d160e21b815290516000926001600160a01b03169163cdc42344916004808301926020929190829003018186803b15801561383257600080fd5b505afa158015613846573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cad9190613cb3565b6000821580613877575081155b15613884575060006104f0565b81611388198161389057fe5b04831115604051806040016040528060038152602001624d4d4f60e81b815250906138fc5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156121cf5781810151838201526020016121b7565b5061271083830261138801612fe3565b600082821115613963576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600082613978575060006104f0565b8282028284828161398557fe5b0414611a1b5760405162461bcd60e51b81526004018080602001828103825260218152602001806143566021913960400191505060405180910390fd5b6000611a1b83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250613b51565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b178152925182516000946060949389169392918291908083835b60208310613a815780518252601f199092019160209182019101613a62565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114613ae3576040519150601f19603f3d011682016040523d82523d6000602084013e613ae8565b606091505b5091509150818015613b16575080511580613b165750808060200190516020811015613b1357600080fd5b50515b6125cd5760405162461bcd60e51b815260040180806020018281038252602b8152602001806143c0602b913960400191505060405180910390fd5b60008183613ba05760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156121cf5781810151838201526020016121b7565b506000838581613bac57fe5b0495945050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282613bec5760008555613c32565b82601f10613c0557805160ff1916838001178555613c32565b82800160010185558215613c32579182015b82811115613c32578251825591602001919060010190613c17565b50613c3e929150613c42565b5090565b5b80821115613c3e5760008155600101613c43565b60008083601f840112613c68578182fd5b50813567ffffffffffffffff811115613c7f578182fd5b602083019150836020828501011115611aa157600080fd5b600060208284031215613ca8578081fd5b8135611a1b81614285565b600060208284031215613cc4578081fd5b8151611a1b81614285565b60008060408385031215613ce1578081fd5b8235613cec81614285565b91506020830135613cfc81614285565b809150509250929050565b600080600080600080600080600060c08a8c031215613d24578485fd5b8935613d2f81614285565b985060208a0135613d3f81614285565b975060408a0135613d4f81614285565b965060608a013567ffffffffffffffff80821115613d6b578687fd5b818c0191508c601f830112613d7e578687fd5b813581811115613d8c578788fd5b8d60208083028501011115613d9f578788fd5b6020830198508097505060808c0135915080821115613dbc578586fd5b613dc88d838e01613c57565b909650945060a08c0135915080821115613de0578384fd5b50613ded8c828d01613c57565b915080935050809150509295985092959850929598565b600080600060608486031215613e18578283fd5b8335613e2381614285565b92506020840135613e3381614285565b929592945050506040919091013590565b60008060408385031215613e56578182fd5b8235613e6181614285565b946020939093013593505050565b600080600060608486031215613e83578283fd5b8335613e8e81614285565b9250602084013591506040840135613ea581614285565b809150509250925092565b600080600060608486031215613ec4578283fd5b8335613ecf81614285565b95602085013595506040909401359392505050565b60008060008060808587031215613ef9578384fd5b8435613f0481614285565b935060208501359250604085013591506060850135613f2281614285565b939692955090935050565b60006020808385031215613f3f578182fd5b825167ffffffffffffffff80821115613f56578384fd5b818501915085601f830112613f69578384fd5b815181811115613f7557fe5b8381029150613f85848301614261565b8181528481019084860184860187018a1015613f9f578788fd5b8795505b83861015613fc1578051835260019590950194918601918601613fa3565b5098975050505050505050565b600060208284031215613fdf578081fd5b81518015158114611a1b578182fd5b600060208284031215613fff578081fd5b5035919050565b600060208284031215614017578081fd5b5051919050565b60008060408385031215614030578182fd5b50508035926020909101359150565b60008060008060808587031215614054578182fd5b505082516020840151604085015160609095015191969095509092509050565b6000815180845260208085019450808401835b838110156140ac5781516001600160a01b031687529582019590820190600101614087565b509495945050505050565b600082848337506e2053686f7274696e672050726f787960881b9101908152600f01919050565b6000602d60f81b8252828460018401379101600101908152919050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b039390931683526020830191909152604082015260600190565b901515815260200190565b6000602080835283518082850152825b818110156141a557858101830151858201604001528201614189565b818111156141b65783604083870101525b50601f01601f1916929092016040019392505050565b90815260200190565b600083825260406020830152611be76040830184614074565b918252602082015260400190565b600086825285602083015260a0604083015261421b60a0830186614074565b6001600160a01b0394909416606083015250608001529392505050565b93845260208401929092526040830152606082015260800190565b60ff91909116815260200190565b60405181810167ffffffffffffffff8111828210171561427d57fe5b604052919050565b6001600160a01b0381168114611e6f57600080fdfe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f20616464726573735472616e7366657248656c7065723a3a73616665417070726f76653a20617070726f7665206661696c656445524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735472616e7366657248656c7065723a3a736166655472616e736665723a207472616e73666572206661696c656445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f56657273696f6e65643a207265766973696f6e20697320746f6f206c6f7720746f20757064617465a26469706673582212206e23a4fb6c1b1d206c95af51d999dc67f75ad1e29ee6484f35e9f85e9dd99d2664736f6c63430007040033a2646970667358221220d3ee804fa6631d8c0941efee20a324a73bfa1ec5ec95309bf64894f7a6247f7464736f6c63430007040033";

export class ShortingPairDeployer__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShortingPairDeployer> {
    return super.deploy(overrides || {}) as Promise<ShortingPairDeployer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ShortingPairDeployer {
    return super.attach(address) as ShortingPairDeployer;
  }
  connect(signer: Signer): ShortingPairDeployer__factory {
    return super.connect(signer) as ShortingPairDeployer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShortingPairDeployerInterface {
    return new utils.Interface(_abi) as ShortingPairDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShortingPairDeployer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ShortingPairDeployer;
  }
}

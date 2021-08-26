import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { XWOW, XWOWInterface } from "../XWOW";
export declare class XWOW__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<XWOW>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): XWOW;
    connect(signer: Signer): XWOW__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612acc806100206000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c806395d89b41116100f9578063b32890bc11610097578063dfabb4d711610071578063dfabb4d71461036f578063f21f3c0814610377578063f2fde38b1461038a578063fda49eb41461039d576101a9565b8063b32890bc14610341578063dd62ed3e14610354578063dde43cba14610367576101a9565b8063a4ce93c9116100d3578063a4ce93c9146102f5578063a9059cbb14610308578063ac9e520c1461031b578063ade8d43c1461032e576101a9565b806395d89b41146102c75780639e097dcb146102cf578063a457c2d7146102e2576101a9565b806348782a1311610166578063715018a611610140578063715018a61461027757806382dda22d1461027f5780638af86cfa1461029f5780638da5cb5b146102b2576101a9565b806348782a131461023c5780634f079e5d1461025157806370a0823114610264576101a9565b806306fdde03146101ae578063095ea7b3146101cc57806318160ddd146101ec57806323b872dd14610201578063313ce567146102145780633950935114610229575b600080fd5b6101b66103a5565b6040516101c391906127fb565b60405180910390f35b6101df6101da3660046126c7565b61043c565b6040516101c391906127f0565b6101f461045a565b6040516101c3919061286f565b6101df61020f36600461268c565b610461565b61021c6104e9565b6040516101c39190612878565b6101df6102373660046126c7565b6104f3565b61024f61024a366004612722565b610542565b005b61024f61025f366004612567565b610617565b6101f461027236600461251b565b610841565b61024f610861565b61029261028d366004612535565b61090d565b6040516101c3919061284e565b61024f6102ad36600461251b565b610965565b6102ba61097b565b6040516101c391906127c3565b6101b661098a565b61024f6102dd3660046126c7565b6109ec565b6101df6102f03660046126c7565b610a5c565b6101f46103033660046126c7565b610ac5565b6101df6103163660046126c7565b610ad8565b61024f61032936600461264a565b610aec565b61024f61033c36600461251b565b610f01565b6101f461034f3660046126f0565b610f86565b6101f4610362366004612535565b610f9b565b6101f4610fc7565b6102ba610fcc565b61024f610385366004612535565b610fdc565b61024f61039836600461251b565b6112aa565b6102ba6113ad565b6101698054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104325780601f1061040757610100808354040283529160200191610432565b820191906000526020600020905b81548152906001019060200180831161041557829003601f168201915b5050505050905090565b60006104506104496113bd565b84846113c1565b5060015b92915050565b6101685490565b600061046e8484846114ae565b6104df8461047a6113bd565b6104da856040518060600160405280602881526020016129bf602891396001600160a01b038a16600090815261016760205260408120906104b96113bd565b6001600160a01b0316815260208101919091526040016000205491906114f9565b6113c1565b5060019392505050565b61016b5460ff1690565b60006104506105006113bd565b846104da8561016760006105126113bd565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611590565b61054a6113bd565b6001600160a01b031661055b61097b565b6001600160a01b0316146105a4576040805162461bcd60e51b815260206004820181905260248201526000805160206129e7833981519152604482015290519081900360640190fd5b610611848480806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506040805160208088028281018201909352878252909350879250869182918501908490808284376000920191909152506115ea92505050565b50505050565b600054610100900460ff16806106305750610630611842565b8061063e575060005460ff16155b6106795760405162461bcd60e51b815260040180806020018281038252602e815260200180612970602e913960400191505060405180910390fd5b600054610100900460ff161580156106a4576000805460ff1961ff0019909116610100171660011790555b6106ac611853565b6106ee6040518060400160405280600481526020016378574f5760e01b8152506040518060400160405280600481526020016378574f5760e01b815250611904565b60408051606081019091526029808252898814919061291e6020830139906107325760405162461bcd60e51b815260040161072991906127fb565b60405180910390fd5b5060005b888110156107825761077a8a8a8381811061074d57fe5b9050602002016020810190610762919061251b565b89898481811061076e57fe5b905060200201356119b9565b600101610736565b506107f0858580806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506040805160208089028281018201909352888252909350889250879182918501908490808284376000920191909152506115ea92505050565b61019880546001600160a01b03808e166001600160a01b03199283161790925561019e8054928d16929091169190911790558015610834576000805461ff00191690555b5050505050505050505050565b6001600160a01b038116600090815261016660205260409020545b919050565b6108696113bd565b6001600160a01b031661087a61097b565b6001600160a01b0316146108c3576040805162461bcd60e51b815260206004820181905260248201526000805160206129e7833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6109156123a2565b506001600160a01b03918216600090815261019960209081526040808320939094168252918252829020825160608101845281548152600182015492810192909252600201549181019190915290565b610978816109716113bd565b60006113c1565b50565b6033546001600160a01b031690565b61016a8054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104325780601f1061040757610100808354040283529160200191610432565b6109f46113bd565b6001600160a01b0316610a0561097b565b6001600160a01b031614610a4e576040805162461bcd60e51b815260206004820181905260248201526000805160206129e7833981519152604482015290519081900360640190fd5b610a5882826119b9565b5050565b6000610450610a696113bd565b846104da85604051806060016040528060258152602001612a72602591396101676000610a946113bd565b6001600160a01b03908116825260208083019390935260409182016000908120918d168152925290205491906114f9565b6000610ad183836119e3565b9392505050565b6000610450610ae56113bd565b84846114ae565b81610af961019a82611b15565b6040518060600160405280602981526020016129476029913990610b305760405162461bcd60e51b815260040161072991906127fb565b50610b396123a2565b506001600160a01b038085166000908152610199602090815260408083209387168352928152908290208251606081018452815481526001820154928101929092526002015491810182905290610b908630610f9b565b101560405180604001604052806013815260200172125b9d985b1a59081e15d3d5c8185b5bdd5b9d606a1b81525090610bdc5760405162461bcd60e51b815260040161072991906127fb565b506000610bfa610bf361ffff861662015180611b2a565b4290611590565b90508160200151811015604051806060016040528060268152602001612a286026913990610c3b5760405162461bcd60e51b815260040161072991906127fb565b506000610c4787610841565b1115610cb15761019e546040516377329f3560e01b81526001600160a01b03909116906377329f3590610c7e9089906004016127c3565b600060405180830381600087803b158015610c9857600080fd5b505af1158015610cac573d6000803e3d6000fd5b505050505b6040516370a0823160e01b81526000906001600160a01b038716906370a0823190610ce09030906004016127c3565b60206040518083038186803b158015610cf857600080fd5b505afa158015610d0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3091906127ab565b6001600160a01b038716600090815261019d602052604081205491925090610d59908390611b83565b6040850151855191925090610d6e9083611590565b808652610d7d90899089611bc5565b6040860181905260208601859052811015610db757610db289610dad838860400151611b8390919063ffffffff16565b611c9e565b610de3565b8085604001511015610de357610de389610dde876040015184611b8390919063ffffffff16565b611d94565b6001600160a01b03808a166000908152610199602090815260408083208c85168452825280832089518155828a01516001820155818a015160029091015561019d9091529081902085905561019e549051632210724360e11b8152911690634420e48690610e55908c906004016127c3565b600060405180830381600087803b158015610e6f57600080fd5b505af1158015610e83573d6000803e3d6000fd5b50506101a054604051633b68ccdb60e01b81526001600160a01b039091169250633b68ccdb9150610eb8908c906004016127c3565b600060405180830381600087803b158015610ed257600080fd5b505af1158015610ee6573d6000803e3d6000fd5b50505050610ef6893060006113c1565b505050505050505050565b610f096113bd565b6001600160a01b0316610f1a61097b565b6001600160a01b031614610f63576040805162461bcd60e51b815260206004820181905260248201526000805160206129e7833981519152604482015290519081900360640190fd5b6101a080546001600160a01b0319166001600160a01b0392909216919091179055565b6000610f93848484611bc5565b949350505050565b6001600160a01b0391821660009081526101676020908152604080832093909416825291909152205490565b601581565b6101a0546001600160a01b031690565b610fe46123a2565b506001600160a01b03808316600090815261019960209081526040808320938516835292815290829020825160608082018552825482526001830154828501819052600290930154828601528451908101909452602d80855290934290921115926128f1908301399061106a5760405162461bcd60e51b815260040161072991906127fb565b50806040015161107a8430610f9b565b101560405180604001604052806013815260200172125b9d985b1a59081e15d3d5c8185b5bdd5b9d606a1b815250906110c65760405162461bcd60e51b815260040161072991906127fb565b5061019e546040516377329f3560e01b81526001600160a01b03909116906377329f35906110f89086906004016127c3565b600060405180830381600087803b15801561111257600080fd5b505af1158015611126573d6000803e3d6000fd5b50505050611138838260400151611d94565b805160405163a9059cbb60e01b81526001600160a01b0384169163a9059cbb916111669187916004016127d7565b602060405180830381600087803b15801561118057600080fd5b505af1158015611194573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b8919061278b565b5080516001600160a01b038316600090815261019d60205260409020546111de91611b83565b6001600160a01b03808416600081815261019d602090815260408083209590955584516060810186528281528082018381528187018481528a87168552610199845287852095855294909252918590209151825551600182015590516002909101556101a0549151633b68ccdb60e01b8152911690633b68ccdb906112679086906004016127c3565b600060405180830381600087803b15801561128157600080fd5b505af1158015611295573d6000803e3d6000fd5b505050506112a5833060006113c1565b505050565b6112b26113bd565b6001600160a01b03166112c361097b565b6001600160a01b03161461130c576040805162461bcd60e51b815260206004820181905260248201526000805160206129e7833981519152604482015290519081900360640190fd5b6001600160a01b0381166113515760405162461bcd60e51b81526004018080602001828103825260268152602001806128a96026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b61019e546001600160a01b031690565b3390565b6001600160a01b0383166114065760405162461bcd60e51b8152600401808060200182810382526024815260200180612a4e6024913960400191505060405180910390fd5b6001600160a01b03821661144b5760405162461bcd60e51b81526004018080602001828103825260228152602001806128cf6022913960400191505060405180910390fd5b6001600160a01b0380841660008181526101676020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b604080518082018252601881527f78574f57206973206e6f74207472616e7366657261626c6500000000000000006020820152905162461bcd60e51b815261072991906004016127fb565b600081848411156115885760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561154d578181015183820152602001611535565b50505050905090810190601f16801561157a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610ad1576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b8151815181146115f957600080fd5b61160661019f60006123c3565b60005b600182038110156117315761019f604051806080016040528086848151811061162e57fe5b602002602001015161ffff16815260200186846001018151811061164e57fe5b602002602001015161ffff16815260200185848151811061166b57fe5b60200260200101516001600160701b0316815260200185846001018151811061169057fe5b6020908102919091018101516001600160701b0390811690925283546001808201865560009586529482902084519101805492850151604086015160609096015161ffff1990941661ffff9384161763ffff0000191662010000939091169290920291909117640100000000600160901b03191664010000000094841694909402939093176001600160901b0316600160901b919092160217905501611609565b5061019f604051806080016040528085600185038151811061174f57fe5b602002602001015161ffff16815260200160001961ffff16815260200184600185038151811061177b57fe5b60200260200101516001600160701b031681526020018460018503815181106117a057fe5b6020908102919091018101516001600160701b03908116909252835460018101855560009485529381902083519401805491840151604085015160609095015161ffff1990931661ffff9687161763ffff0000191662010000969091169590950294909417640100000000600160901b03191664010000000093831693909302929092176001600160901b0316600160901b9290911691909102179055505050565b600061184d30611e94565b15905090565b600054610100900460ff168061186c575061186c611842565b8061187a575060005460ff16155b6118b55760405162461bcd60e51b815260040180806020018281038252602e815260200180612970602e913960400191505060405180910390fd5b600054610100900460ff161580156118e0576000805460ff1961ff0019909116610100171660011790555b6118e8611e9a565b6118f0611f3a565b8015610978576000805461ff001916905550565b600054610100900460ff168061191d575061191d611842565b8061192b575060005460ff16155b6119665760405162461bcd60e51b815260040180806020018281038252602e815260200180612970602e913960400191505060405180910390fd5b600054610100900460ff16158015611991576000805460ff1961ff0019909116610100171660011790555b611999611e9a565b6119a38383612033565b80156112a5576000805461ff0019169055505050565b6119c561019a8361210e565b506001600160a01b03909116600090815261019c6020526040902055565b610198546000906001600160a01b0384811691161415611a04575080610454565b610ad1836001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015611a4057600080fd5b505afa158015611a54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a7891906127ab565b610198546040516370a0823160e01b8152611b0f91600291611b09916001600160a01b0316906370a0823190611ab2908b906004016127c3565b60206040518083038186803b158015611aca57600080fd5b505afa158015611ade573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b0291906127ab565b8790611b2a565b90611b2a565b90612123565b6000610ad1836001600160a01b038416612165565b600082611b3957506000610454565b82820282848281611b4657fe5b0414610ad15760405162461bcd60e51b815260040180806020018281038252602181526020018061299e6021913960400191505060405180910390fd5b6000610ad183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506114f9565b6000611bcf6123e1565b611bd88361217d565b90506000611c5d611c49611c05846000015161ffff16856020015161ffff16611b8390919063ffffffff16565b8451611b0f90611c1c9061ffff8a81169116611b83565b611b0987604001516001600160701b031688606001516001600160701b0316611b8390919063ffffffff16565b60408401516001600160701b031690611590565b6001600160a01b038716600090815261019c6020526040902054909150611c94906305f5e10090611b0f90611b0985818c8c6119e3565b9695505050505050565b6001600160a01b038216611cf9576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611d05600083836112a5565b61016854611d139082611590565b610168556001600160a01b03821660009081526101666020526040902054611d3b9082611590565b6001600160a01b0383166000818152610166602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b038216611dd95760405162461bcd60e51b8152600401808060200182810382526021815260200180612a076021913960400191505060405180910390fd5b611de5826000836112a5565b611e2381604051806060016040528060228152602001612887602291396001600160a01b0385166000908152610166602052604090205491906114f9565b6001600160a01b0383166000908152610166602052604090205561016854611e4b9082612296565b610168556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b3b151590565b600054610100900460ff1680611eb35750611eb3611842565b80611ec1575060005460ff16155b611efc5760405162461bcd60e51b815260040180806020018281038252602e815260200180612970602e913960400191505060405180910390fd5b600054610100900460ff161580156118f0576000805460ff1961ff0019909116610100171660011790558015610978576000805461ff001916905550565b600054610100900460ff1680611f535750611f53611842565b80611f61575060005460ff16155b611f9c5760405162461bcd60e51b815260040180806020018281038252602e815260200180612970602e913960400191505060405180910390fd5b600054610100900460ff16158015611fc7576000805460ff1961ff0019909116610100171660011790555b6000611fd16113bd565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610978576000805461ff001916905550565b600054610100900460ff168061204c575061204c611842565b8061205a575060005460ff16155b6120955760405162461bcd60e51b815260040180806020018281038252602e815260200180612970602e913960400191505060405180910390fd5b600054610100900460ff161580156120c0576000805460ff1961ff0019909116610100171660011790555b82516120d490610169906020860190612408565b5081516120e99061016a906020850190612408565b5061016b805460ff1916601217905580156112a5576000805461ff0019169055505050565b6000610ad1836001600160a01b0384166122f3565b6000610ad183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061233d565b60009081526001919091016020526040902054151590565b6121856123e1565b61019f60008154811061219457fe5b6000918252602091829020015460408051808201909152601b81527f5374616b696e6720706572696f6420697320746f6f2073686f727400000000009281019290925261ffff90811690841610156121ff5760405162461bcd60e51b815260040161072991906127fb565b5061019f5460005b8181101561228f5761019f818154811061221d57fe5b600091825260209182902060408051608081018252919092015461ffff808216835262010000820481169483018590526001600160701b036401000000008304811694840194909452600160901b909104909216606082015294508516101561228757505061085c565b600101612207565b5050919050565b6000828211156122ed576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60006122ff8383612165565b61233557508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610454565b506000610454565b6000818361238c5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561154d578181015183820152602001611535565b50600083858161239857fe5b0495945050505050565b60405180606001604052806000815260200160008152602001600081525090565b50805460008255906000526020600020908101906109789190612494565b60408051608081018252600080825260208201819052918101829052606081019190915290565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261243e5760008555612484565b82601f1061245757805160ff1916838001178555612484565b82800160010185558215612484579182015b82811115612484578251825591602001919060010190612469565b50612490929150612494565b5090565b5b808211156124905760008155600101612495565b80356001600160a01b038116811461085c57600080fd5b60008083601f8401126124d1578182fd5b50813567ffffffffffffffff8111156124e8578182fd5b602083019150836020808302850101111561250257600080fd5b9250929050565b803561ffff8116811461085c57600080fd5b60006020828403121561252c578081fd5b610ad1826124a9565b60008060408385031215612547578081fd5b612550836124a9565b915061255e602084016124a9565b90509250929050565b60008060008060008060008060008060c08b8d031215612585578586fd5b61258e8b6124a9565b995061259c60208c016124a9565b985060408b013567ffffffffffffffff808211156125b8578788fd5b6125c48e838f016124c0565b909a50985060608d01359150808211156125dc578788fd5b6125e88e838f016124c0565b909850965060808d0135915080821115612600578586fd5b61260c8e838f016124c0565b909650945060a08d0135915080821115612624578384fd5b506126318d828e016124c0565b915080935050809150509295989b9194979a5092959850565b60008060006060848603121561265e578283fd5b612667846124a9565b9250612675602085016124a9565b915061268360408501612509565b90509250925092565b6000806000606084860312156126a0578283fd5b6126a9846124a9565b92506126b7602085016124a9565b9150604084013590509250925092565b600080604083850312156126d9578182fd5b6126e2836124a9565b946020939093013593505050565b600080600060608486031215612704578283fd5b61270d846124a9565b92506020840135915061268360408501612509565b60008060008060408587031215612737578384fd5b843567ffffffffffffffff8082111561274e578586fd5b61275a888389016124c0565b90965094506020870135915080821115612772578384fd5b5061277f878288016124c0565b95989497509550505050565b60006020828403121561279c578081fd5b81518015158114610ad1578182fd5b6000602082840312156127bc578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6000602080835283518082850152825b818110156128275785810183015185820160400152820161280b565b818111156128385783604083870101525b50601f01601f1916929092016040019392505050565b81518152602080830151908201526040918201519181019190915260600190565b90815260200190565b60ff9190911681526020019056fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e63654f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f2061646472657373556e61626c6520746f20756e7374616b652066756e647320647572696e67207374616b696e6720706572696f6450726f766964656420696e636f6e73697374656e7420696e697469616c697a6174696f6e206461746150726f76696465642061646472657373206973206e6f742061207374616b6561626c6520746f6b656e496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657245524332303a206275726e2066726f6d20746865207a65726f20616464726573735374616b696e6720706572696f642073686f756c64206e6f742062652064656372656173656445524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220e9a53d66ad3cddf403eb652aeeac250495ad437bf047b188aa393f17a7c6925d64736f6c63430007040033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): XWOWInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): XWOW;
}
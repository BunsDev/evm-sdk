import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Treasurer, TreasurerInterface } from "../Treasurer";
export declare class Treasurer__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Treasurer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Treasurer;
    connect(signer: Signer): Treasurer__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506133c7806100206000396000f3fe608060405234801561001057600080fd5b50600436106102f15760003560e01c806377329f351161019d578063b32b53ab116100e9578063dde43cba116100a2578063e56b22ba1161007c578063e56b22ba146105d0578063f2fde38b146105d8578063fb4de68f146105eb578063fbde721d146105fe576102f1565b8063dde43cba1461059f578063decebbce146105a7578063df62497d146105c8576102f1565b8063b32b53ab14610543578063b3ae65d714610556578063bb5b5a6a1461055e578063c4ccc25d14610566578063c9997aa914610579578063d7c41c791461058c576102f1565b80639657002311610156578063a57f309a11610130578063a57f309a1461050d578063a6e549f814610515578063ade8d43c14610528578063b10f04b01461053b576102f1565b806396570023146104d157806399d01294146104e45780639f7a3adf146104ec576102f1565b806377329f35146104725780637895538f146104855780637dc6583014610498578063846374b8146104a057806388ffc76a146104a85780638da5cb5b146104c9576102f1565b80633acf41481161025c5780635c7cdf1211610215578063607b625a116101ef578063607b625a1461043c5780636cbe28ea1461044f578063715018a61461045757806376b9a19a1461045f576102f1565b80635c7cdf12146104195780635d830fbe14610421578063603f2f0c14610429576102f1565b80633acf4148146103bd5780634420e486146103d0578063465b78b7146103e357806348a23784146103f6578063499dff19146103fe57806349b8739714610406576102f1565b806323bf2705116102ae57806323bf2705146103775780632552317c1461037f5780632730bcb71461038757806327e235e31461038f5780632fee582f146103a257806337b09dbe146103aa576102f1565b806304fe5081146102f657806307b50a3614610314578063152bfa841461031c5780631e597e0314610331578063217e41d71461035157806321c0b34214610364575b600080fd5b6102fe610611565b60405161030b9190613167565b60405180910390f35b6102fe610643565b61032f61032a366004612dfc565b61064a565b005b61034461033f366004612ed9565b6106c0565b60405161030b91906130ba565b61032f61035f36600461301f565b6106e9565b61032f610372366004612e34565b610736565b6103446107cf565b6102fe6107df565b6102fe6107e6565b6102fe61039d366004612dfc565b6107ed565b6102fe610800565b61032f6103b8366004612dfc565b610807565b6102fe6103cb366004612dfc565b61088c565b61032f6103de366004612dfc565b61089f565b61032f6103f1366004612ed9565b610aa2565b6102fe610be3565b610344610be8565b61032f610414366004612e34565b610bf8565b6102fe61110f565b610344611116565b6102fe610437366004612dfc565b611126565b6102fe61044a366004612dfc565b611139565b6102fe611198565b61032f61119f565b61032f61046d366004612dfc565b61124b565b61032f610480366004612dfc565b6112d0565b610344610493366004612ed9565b61139b565b6103446113c2565b6102fe6113d2565b6104bb6104b6366004612e34565b6113d9565b60405161030b9291906131c3565b610344611485565b61032f6104df366004612ed9565b611494565b61032f611569565b6104ff6104fa366004612dfc565b6115a3565b60405161030b9291906130ce565b6102fe6117b3565b61032f610523366004612f04565b6117ba565b61032f610536366004612dfc565b611858565b6103446118dd565b6102fe610551366004612dfc565b6118ed565b6102fe611900565b6102fe611907565b6102fe610574366004612e34565b61190e565b6102fe610587366004612ed9565b61192c565b61032f61059a366004612e6c565b61194a565b6102fe611a5f565b6105ba6105b5366004612dfc565b611a64565b60405161030b92919061312e565b6102fe611b28565b610344611b2f565b61032f6105e6366004612dfc565b611b3f565b61032f6105f936600461304f565b611c42565b6102fe61060c36600461301f565b611cc4565b600080610637610175546106316101765443611cd790919063ffffffff16565b90611d20565b61017454901c91505090565b61017a5490565b6060610654611d62565b905060005b81518110156106bb577011d3d5915493905390d157d49155d05491607a1b82828151811061068357fe5b60200260200101511415610696576106b3565b6106b3838383815181106106a657fe5b6020026020010151610aa2565b600101610659565b505050565b6001600160a01b03918216600090815261017b6020908152604080832093835292905220541690565b61271081111560405180606001604052806030815260200161329e603091399061072f5760405162461bcd60e51b81526004016107269190613170565b60405180910390fd5b5061017a55565b610166546040516370a0823160e01b81526000916001600160a01b0316906370a08231906107689086906004016130ba565b60206040518083038186803b15801561078057600080fd5b505afa158015610794573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b89190613037565b90506107c5838383611e51565b6106bb8382611f1c565b610166546001600160a01b031681565b6101775481565b6101755481565b61016e6020526000908152604090205481565b61017c5481565b61080f611ff5565b6001600160a01b0316610820611485565b6001600160a01b031614610869576040805162461bcd60e51b8152602060048201819052602482015260008051602061331d833981519152604482015290519081900360640190fd5b61017880546001600160a01b0319166001600160a01b0392909216919091179055565b6101736020526000908152604090205481565b610166546001600160a01b03166108b4611ff5565b6001600160a01b0316146040518060600160405280602d815260200161324b602d9139906108f55760405162461bcd60e51b81526004016107269190613170565b50600061090361016a611ff9565b90506000805b828110156109595761091d61016a82612004565b6001600160a01b03808216600090815261016f60209081526040808320546101708352818420948a168452939091529020559150600101610909565b50610166546040516370a0823160e01b8152610a7591610a70916001600160a01b03909116906370a08231906109939088906004016130ba565b60206040518083038186803b1580156109ab57600080fd5b505afa1580156109bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e39190613037565b61016660009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a3257600080fd5b505afa158015610a46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6a9190613037565b90611cd7565b612010565b6101728190556001600160a01b039093166000908152610173602052604090209290925550504361017755565b6001600160a01b03808316600081815261016c6020908152604080832086845282528083205493835261017b82528083208684529091529020549091168115801590610af657506001600160a01b03811615155b15610bdd5761016e6000856001600160a01b03166001600160a01b03168152602001908152602001600020548211156040518060400160405280602081526020017f42616c616e6365206f6620746f6b656e206973206e6f7420657870656374656481525090610b795760405162461bcd60e51b81526004016107269190613170565b506001600160a01b038416600081815261016c60209081526040808320878452825280832083905592825261016e90522054610bb59083611cd7565b6001600160a01b038516600081815261016e6020526040902091909155610bdd9082846120fc565b50505050565b603881565b610178546001600160a01b031681565b6101675460408051808201909152601c81527f556e61626c6520746f206469737472696275746520574f5720666565000000006020820152906001600160a01b0384811691161415610c5d5760405162461bcd60e51b81526004016107269190613170565b5061017854604051630a65984f60e31b81526001600160a01b039091169063532cc27890610c8f9085906004016130ba565b60206040518083038186803b158015610ca757600080fd5b505afa158015610cbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cdf9190612fff565b6040518060600160405280602b8152602001613367602b913990610d165760405162461bcd60e51b81526004016107269190613170565b50610d2361016a8361214e565b506040516370a0823160e01b81526000906001600160a01b038416906370a0823190610d539030906004016130ba565b60206040518083038186803b158015610d6b57600080fd5b505afa158015610d7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da39190613037565b6001600160a01b038416600090815261016e602052604081205491925090610dcc908390611cd7565b90506000610de661017a548361216390919063ffffffff16565b90506000610df48383611cd7565b905060608061017960009054906101000a90046001600160a01b03166001600160a01b031663752f77f16040518163ffffffff1660e01b815260040160006040518083038186803b158015610e4857600080fd5b505afa158015610e5c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e849190810190612f45565b915091506000808490506060845167ffffffffffffffff81118015610ea857600080fd5b50604051908082528060200260200182016040528015610ed2578160200160208202803683370190505b50905060005b8551811015610f82577011d3d5915493905390d157d49155d05491607a1b868281518110610f0257fe5b60200260200101511415610f14578093505b610f3a858281518110610f2357fe5b60200260200101518861216390919063ffffffff16565b828281518110610f4657fe5b602002602001018181525050610f78828281518110610f6157fe5b602002602001015184611cd790919063ffffffff16565b9250600101610ed8565b50610fa982828581518110610f9357fe5b602002602001015161224190919063ffffffff16565b818481518110610fb557fe5b602002602001018181525050610fde8b828581518110610fd157fe5b6020026020010151611494565b60005b85518110156110c3576000828281518110610ff857fe5b602002602001015111156110bb5761107682828151811061101557fe5b602002602001015161016c60008f6001600160a01b03166001600160a01b03168152602001908152602001600020600089858151811061105157fe5b602002602001015181526020019081526020016000205461224190919063ffffffff16565b6001600160a01b038d16600090815261016c6020526040812088519091908990859081106110a057fe5b60200260200101518152602001908152602001600020819055505b600101610fe1565b506110ce8988611cd7565b6001600160a01b038c16600090815261016e60205260409020558615611102576111026001600160a01b038c168b896120fc565b5050505050505050505050565b61017d5481565b610167546001600160a01b031681565b6101716020526000908152604090205481565b6001600160a01b038116600081815261016e60205260408082205490516370a0823160e01b81529192611192926370a082319061117a9030906004016130ba565b60206040518083038186803b158015610a3257600080fd5b92915050565b61017e5481565b6111a7611ff5565b6001600160a01b03166111b8611485565b6001600160a01b031614611201576040805162461bcd60e51b8152602060048201819052602482015260008051602061331d833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b611253611ff5565b6001600160a01b0316611264611485565b6001600160a01b0316146112ad576040805162461bcd60e51b8152602060048201819052602482015260008051602061331d833981519152604482015290519081900360640190fd5b61018080546001600160a01b0319166001600160a01b0392909216919091179055565b610166546040516370a0823160e01b81526000916001600160a01b0316906370a08231906113029085906004016130ba565b60206040518083038186803b15801561131a57600080fd5b505afa15801561132e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113529190613037565b9050600061136161016a611ff9565b90506000805b828110156113905761137b61016a82612004565b9150611388858386611e51565b600101611367565b50610bdd8484611f1c565b61017b6020908152600092835260408084209091529082529020546001600160a01b031681565b610180546001600160a01b031681565b61017f5481565b610166546040516370a0823160e01b8152600091829182916001600160a01b0316906370a082319061140f9088906004016130ba565b60206040518083038186803b15801561142757600080fd5b505afa15801561143b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145f9190613037565b905061146c85858361229b565b925061147885826122f1565b9396939550929350505050565b6033546001600160a01b031690565b61016654604080516318160ddd60e01b815290516000926001600160a01b0316916318160ddd916004808301926020929190829003018186803b1580156114da57600080fd5b505afa1580156114ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115129190613037565b905080156106bb5761154a61152a82610631856123b9565b6001600160a01b038516600090815261016f602052604090205490612241565b6001600160a01b038416600090815261016f6020526040902055505050565b600061157661016a611ff9565b90506000805b828110156106bb5761159061016a82612004565b915061159b8261064a565b60010161157c565b610166546040516370a0823160e01b815260609182916000916001600160a01b0316906370a08231906115da9087906004016130ba565b60206040518083038186803b1580156115f257600080fd5b505afa158015611606573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061162a9190613037565b9050600061163961016a611ff9565b90508060010167ffffffffffffffff8111801561165557600080fd5b5060405190808252806020026020018201604052801561167f578160200160208202803683370190505b5093508060010167ffffffffffffffff8111801561169c57600080fd5b506040519080825280602002602001820160405280156116c6578160200160208202803683370190505b50925060005b81811015611749576116e061016a82612004565b8582815181106116ec57fe5b60200260200101906001600160a01b031690816001600160a01b03168152505061172a8686838151811061171c57fe5b60200260200101518561229b565b84828151811061173657fe5b60209081029190910101526001016116cc565b506101675484516001600160a01b039091169085908390811061176857fe5b60200260200101906001600160a01b031690816001600160a01b03168152505061179285836122f1565b90508382815181106117a057fe5b6020026020010181815250505050915091565b6101725481565b6117c2611ff5565b6001600160a01b03166117d3611485565b6001600160a01b03161461181c576040805162461bcd60e51b8152602060048201819052602482015260008051602061331d833981519152604482015290519081900360640190fd5b6001600160a01b03928316600090815261017b602090815260408083209483529390529190912080546001600160a01b03191691909216179055565b611860611ff5565b6001600160a01b0316611871611485565b6001600160a01b0316146118ba576040805162461bcd60e51b8152602060048201819052602482015260008051602061331d833981519152604482015290519081900360640190fd5b61017980546001600160a01b0319166001600160a01b0392909216919091179055565b610178546001600160a01b031690565b61016f6020526000908152604090205481565b6101765481565b6101745481565b61017060209081526000928352604080842090915290825290205481565b61016c60209081526000928352604080842090915290825290205481565b600054610100900460ff16806119635750611963612438565b80611971575060005460ff16155b6119ac5760405162461bcd60e51b815260040180806020018281038252602e8152602001806132ce602e913960400191505060405180910390fd5b600054610100900460ff161580156119d7576000805460ff1961ff0019909116610100171660011790555b6119df612449565b61017880546001600160a01b038088166001600160a01b031992831617909255610166805489841690831617905561016780548a841690831617905561017980549287169290911691909117905543610176819055610177556101748390556101758290558015611a56576000805461ff00191690555b50505050505050565b601581565b606080611a6f611d62565b9150815167ffffffffffffffff81118015611a8957600080fd5b50604051908082528060200260200182016040528015611ab3578160200160208202803683370190505b50905060005b8251811015611b22576001600160a01b038416600090815261016c602052604081208451909190859084908110611aec57fe5b6020026020010151815260200190815260200160002054828281518110611b0f57fe5b6020908102919091010152600101611ab9565b50915091565b61017a5481565b610179546001600160a01b031681565b611b47611ff5565b6001600160a01b0316611b58611485565b6001600160a01b031614611ba1576040805162461bcd60e51b8152602060048201819052602482015260008051602061331d833981519152604482015290519081900360640190fd5b6001600160a01b038116611be65760405162461bcd60e51b81526004018080602001828103825260268152602001806132786026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b611c4a611ff5565b6001600160a01b0316611c5b611485565b6001600160a01b031614611ca4576040805162461bcd60e51b8152602060048201819052602482015260008051602061331d833981519152604482015290519081900360640190fd5b61017c84905561017d83905561017e82905561017f819055610bdd6124fb565b61016d6020526000908152604090205481565b6000611d1983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612688565b9392505050565b6000611d1983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506126e2565b60408051600580825260c082019092526060916020820160a0803683370190505090507011d3d5915493905390d157d49155d05491607a1b81600081518110611da757fe5b6020026020010181815250506a111155915313d41351539560aa1b81600181518110611dcf57fe5b60200260200101818152505068494e535552414e434560b81b81600281518110611df557fe5b602002602001018181525050664348415249545960c81b81600381518110611e1957fe5b6020026020010181815250506b212aacafa0a7222fa12aa92760a11b81600481518110611e4257fe5b60200260200101818152505090565b6000611e5e84848461229b565b90508015610bdd576001600160a01b03808416600081815261016f60209081526040808320546101708352818420958a168452948252808320949094559181526101719091522054611eb09082612241565b6001600160a01b03841660008181526101716020526040902091909155611ed89085836120fc565b6001600160a01b038316600090815261016e6020526040902054611efc9082611cd7565b6001600160a01b038416600090815261016e602052604090205550505050565b600080611f2984846122f1565b610167546040516370a0823160e01b81529294509092506001600160a01b0316906370a0823190611f5e9030906004016130ba565b60206040518083038186803b158015611f7657600080fd5b505afa158015611f8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fae9190613037565b8111611fed576001600160a01b0380851660009081526101736020526040902083905561016754611fe1911685836120fc565b61017282905543610177555b610bdd6124fb565b3390565b600061119282612747565b6000611d19838361274b565b6101755461017754610174546101765460009392919084612035856106318685611cd7565b90506000612047866106314386611cd7565b90506000828211156120a957600061206985612063858b6127af565b90612241565b90506120a161209c61208c88861c6120866001610a6a4388611cd7565b906127af565b61206389881c612086868d611cd7565b6123b9565b9150506120bf565b6120bc61209c86841c612086438a611cd7565b90505b88156120e1576120dc6120d2828b611d20565b6101725490612241565b6120ef565b610172546120ef9082612241565b9998505050505050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526106bb908490612808565b6000611d19836001600160a01b0384166129c0565b6000821580612170575081155b1561217d57506000611192565b81611388198161218957fe5b04831115604051806040016040528060038152602001624d4d4f60e81b815250906122325760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156121f75781810151838201526020016121df565b50505050905090810190601f1680156122245780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50506127109102611388010490565b600082820183811015611d19576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6001600160a01b0380831660008181526101706020908152604080832094881683529381528382205492825261016f9052918220546122e9916122e49185916120869190611cd7565b612a0a565b949350505050565b60008061237e61016660009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561234657600080fd5b505afa15801561235a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a709190613037565b6001600160a01b038516600090815261017360205260409020549092506123b0906122e4908590612086908690611cd7565b90509250929050565b6000633b9aca00828102908390820414604051806040016040528060038152602001624d4d4f60e81b815250906124315760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156121f75781810151838201526020016121df565b5092915050565b600061244330612a8f565b15905090565b600054610100900460ff16806124625750612462612438565b80612470575060005460ff16155b6124ab5760405162461bcd60e51b815260040180806020018281038252602e8152602001806132ce602e913960400191505060405180910390fd5b600054610100900460ff161580156124d6576000805460ff1961ff0019909116610100171660011790555b6124de612a95565b6124e6612b35565b80156124f8576000805461ff00191690555b50565b6000603861017c54141561253d576000612513612c2e565b905061017f5481116125325761017f5461252d9082611cd7565b612535565b60005b915050612637565b610179546040516321f8a72160e01b81526001600160a01b03909116906321f8a721906125749062574f5760e81b90600401613167565b60206040518083038186803b15801561258c57600080fd5b505afa1580156125a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125c49190612e18565b6001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156125fc57600080fd5b505afa158015612610573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126349190613037565b90505b6000808211612647576000612671565b61017f5461266861017d5461208661017e54866127af90919063ffffffff16565b8161266f57fe5b045b9050806101745414612684576101748190555b5050565b600081848411156126da5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156121f75781810151838201526020016121df565b505050900390565b600081836127315760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156121f75781810151838201526020016121df565b50600083858161273d57fe5b0495945050505050565b5490565b8154600090821061278d5760405162461bcd60e51b81526004018080602001828103825260228152602001806132296022913960400191505060405180910390fd5b82600001828154811061279c57fe5b9060005260206000200154905092915050565b6000826127be57506000611192565b828202828482816127cb57fe5b0414611d195760405162461bcd60e51b81526004018080602001828103825260218152602001806132fc6021913960400191505060405180910390fd5b61281a826001600160a01b0316612d3d565b61286b576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106128a95780518252601f19909201916020918201910161288a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461290b576040519150601f19603f3d011682016040523d82523d6000602084013e612910565b606091505b509150915081612967576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b805115610bdd5780806020019051602081101561298357600080fd5b5051610bdd5760405162461bcd60e51b815260040180806020018281038252602a81526020018061333d602a913960400191505060405180910390fd5b60006129cc8383612d76565b612a0257508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155611192565b506000611192565b6040805180820190915260038152624d414f60e81b6020820152600090631dcd6500908382019082821015612a805760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156121f75781810151838201526020016121df565b50633b9aca0090049392505050565b3b151590565b600054610100900460ff1680612aae5750612aae612438565b80612abc575060005460ff16155b612af75760405162461bcd60e51b815260040180806020018281038252602e8152602001806132ce602e913960400191505060405180910390fd5b600054610100900460ff161580156124e6576000805460ff1961ff00199091166101001716600117905580156124f8576000805461ff001916905550565b600054610100900460ff1680612b4e5750612b4e612438565b80612b5c575060005460ff16155b612b975760405162461bcd60e51b815260040180806020018281038252602e8152602001806132ce602e913960400191505060405180910390fd5b600054610100900460ff16158015612bc2576000805460ff1961ff0019909116610100171660011790555b6000612bcc611ff5565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35080156124f8576000805461ff001916905550565b610179546040516321f8a72160e01b81526000916001600160a01b0316906321f8a72190612c669062574f5760e81b90600401613167565b60206040518083038186803b158015612c7e57600080fd5b505afa158015612c92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cb69190612e18565b610180546040516370a0823160e01b81526001600160a01b03928316926370a0823192612ce8929116906004016130ba565b60206040518083038186803b158015612d0057600080fd5b505afa158015612d14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d389190613037565b905090565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906122e9575050151592915050565b60009081526001919091016020526040902054151590565b600082601f830112612d9e578081fd5b8151612db1612dac826131f5565b6131d1565b818152915060208083019084810181840286018201871015612dd257600080fd5b60005b84811015612df157815184529282019290820190600101612dd5565b505050505092915050565b600060208284031215612e0d578081fd5b8135611d1981613213565b600060208284031215612e29578081fd5b8151611d1981613213565b60008060408385031215612e46578081fd5b8235612e5181613213565b91506020830135612e6181613213565b809150509250929050565b60008060008060008060c08789031215612e84578182fd5b8635612e8f81613213565b95506020870135612e9f81613213565b94506040870135612eaf81613213565b93506060870135612ebf81613213565b9598949750929560808101359460a0909101359350915050565b60008060408385031215612eeb578182fd5b8235612ef681613213565b946020939093013593505050565b600080600060608486031215612f18578283fd5b8335612f2381613213565b9250602084013591506040840135612f3a81613213565b809150509250925092565b60008060408385031215612f57578182fd5b825167ffffffffffffffff80821115612f6e578384fd5b818501915085601f830112612f81578384fd5b8151612f8f612dac826131f5565b80828252602080830192508086018a828387028901011115612faf578889fd5b8896505b84871015612fd1578051845260019690960195928101928101612fb3565b508801519096509350505080821115612fe8578283fd5b50612ff585828601612d8e565b9150509250929050565b600060208284031215613010578081fd5b81518015158114611d19578182fd5b600060208284031215613030578081fd5b5035919050565b600060208284031215613048578081fd5b5051919050565b60008060008060808587031215613064578384fd5b5050823594602084013594506040840135936060013592509050565b6000815180845260208085019450808401835b838110156130af57815187529582019590820190600101613093565b509495945050505050565b6001600160a01b0391909116815260200190565b604080825283519082018190526000906020906060840190828701845b828110156131105781516001600160a01b0316845292840192908401906001016130eb565b505050838103828501526131248186613080565b9695505050505050565b604080825283519082018190526000906020906060840190828701845b828110156131105781518452928401929084019060010161314b565b90815260200190565b6000602080835283518082850152825b8181101561319c57858101830151858201604001528201613180565b818111156131ad5783604083870101525b50601f01601f1916929092016040019392505050565b918252602082015260400190565b60405181810167ffffffffffffffff811182821017156131ed57fe5b604052919050565b600067ffffffffffffffff82111561320957fe5b5060209081020190565b6001600160a01b03811681146124f857600080fdfe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e647354686973206f7065726174696f6e206973206f6e6c7920616c6c6f77656420746f2078574f57206d696e7465724f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737346656520646973747269627574696f6e207265776172642073686f756c64206265206c657373207468616e2031303025496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564556e61626c6520746f206469737472696275746520756e7265676973746572656420746f6b656e20666565a26469706673582212206745c210bbff169e8e17eff59ead1f97c81465fcae0173365728e154fcb2f64664736f6c63430007040033";
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
    })[];
    static createInterface(): TreasurerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Treasurer;
}

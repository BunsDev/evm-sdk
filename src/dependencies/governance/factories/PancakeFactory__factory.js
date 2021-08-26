"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PancakeFactory__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_feeToSetter",
                type: "address",
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
                name: "token0",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token1",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "pair",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "PairCreated",
        type: "event",
    },
    {
        inputs: [],
        name: "INIT_CODE_PAIR_HASH",
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
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "allPairs",
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
        name: "allPairsLength",
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
                name: "tokenA",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenB",
                type: "address",
            },
        ],
        name: "createPair",
        outputs: [
            {
                internalType: "address",
                name: "pair",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "feeTo",
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
        name: "feeToSetter",
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
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "getPair",
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
        name: "pairHashcode",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_feeTo",
                type: "address",
            },
        ],
        name: "setFeeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_feeToSetter",
                type: "address",
            },
        ],
        name: "setFeeToSetter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50604051612a62380380612a628339818101604052602081101561003357600080fd5b5051600180546001600160a01b0319166001600160a01b039092169190911790556129ff806100636000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806376ebd19e1161006657806376ebd19e1461010e578063a2e74af614610116578063c9c653961461013e578063e6a439051461016c578063f46901ed1461019a5761009e565b8063017e7e58146100a3578063094b7415146100c75780631e3dd18b146100cf578063574f2ba3146100ec5780635855a25a14610106575b600080fd5b6100ab6101c0565b604080516001600160a01b039092168252519081900360200190f35b6100ab6101cf565b6100ab600480360360208110156100e557600080fd5b50356101de565b6100f4610208565b60408051918252519081900360200190f35b6100f461020e565b6100f46102a1565b61013c6004803603602081101561012c57600080fd5b50356001600160a01b03166102d3565b005b6100ab6004803603604081101561015457600080fd5b506001600160a01b0381358116916020013516610349565b6100ab6004803603604081101561018257600080fd5b506001600160a01b038135811691602001351661066a565b61013c600480360360208110156101b057600080fd5b50356001600160a01b0316610690565b6000546001600160a01b031681565b6001546001600160a01b031681565b600381815481106101ee57600080fd5b6000918252602090912001546001600160a01b0316905081565b60035490565b60405161021d60208201610706565b6020820181038252601f19601f820116604052506040516020018082805190602001908083835b602083106102635780518252601f199092019160209182019101610244565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012081565b6000604051806020016102b390610706565b6020820181038252601f19601f8201166040525080519060200120905090565b6001546001600160a01b03163314610327576040805162461bcd60e51b81526020600482015260126024820152712830b731b0b5b29d102327a92124a22222a760711b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000816001600160a01b0316836001600160a01b031614156103b2576040805162461bcd60e51b815260206004820152601c60248201527f50616e63616b653a204944454e544943414c5f41444452455353455300000000604482015290519081900360640190fd5b600080836001600160a01b0316856001600160a01b0316106103d55783856103d8565b84845b90925090506001600160a01b038216610430576040805162461bcd60e51b815260206004820152601560248201527450616e63616b653a205a45524f5f4144445245535360581b604482015290519081900360640190fd5b6001600160a01b038281166000908152600260209081526040808320858516845290915290205416156104a1576040805162461bcd60e51b815260206004820152601460248201527350616e63616b653a20504149525f45584953545360601b604482015290519081900360640190fd5b6060604051806020016104b390610706565b6020820181038252601f19601f8201166040525090506000838360405160200180836001600160a01b031660601b8152601401826001600160a01b031660601b815260140192505050604051602081830303815290604052805190602001209050808251602084016000f59450846001600160a01b031663485cc95585856040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b0316815260200192505050600060405180830381600087803b15801561058057600080fd5b505af1158015610594573d6000803e3d6000fd5b505050506001600160a01b0384811660008181526002602081815260408084208987168086529083528185208054978d166001600160a01b031998891681179091559383528185208686528352818520805488168517905560038054600181018255958190527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90950180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a35050505092915050565b60026020908152600092835260408084209091529082529020546001600160a01b031681565b6001546001600160a01b031633146106e4576040805162461bcd60e51b81526020600482015260126024820152712830b731b0b5b29d102327a92124a22222a760711b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6122b6806107148339019056fe60806040526001600c5534801561001557600080fd5b50604080518082018252600b81526a50616e63616b65204c507360a81b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fe87cb5a4dc26cf9451529a20899fcee996799afd48d7c0db7c25e150b364661d818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355600580546001600160a01b031916331790556121ad806101096000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610534578063d505accf1461053c578063dd62ed3e1461058d578063fff6cae9146105bb576101a9565b8063ba9a7a56146104fe578063bc25cf7714610506578063c45a01551461052c576101a9565b80637ecebe00116100d35780637ecebe001461046557806389afcb441461048b57806395d89b41146104ca578063a9059cbb146104d2576101a9565b80636a6278421461041157806370a08231146104375780637464fc3d1461045d576101a9565b806323b872dd116101665780633644e515116101405780633644e515146103cb578063485cc955146103d35780635909c0d5146104015780635a3d549314610409576101a9565b806323b872dd1461036f57806330adf81f146103a5578063313ce567146103ad576101a9565b8063022c0d9f146101ae57806306fdde031461023c5780630902f1ac146102b9578063095ea7b3146102f15780630dfe16811461033157806318160ddd14610355575b600080fd5b61023a600480360360808110156101c457600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156101fb57600080fd5b82018360208201111561020d57600080fd5b8035906020019184600183028401116401000000008311171561022f57600080fd5b5090925090506105c3565b005b610244610adb565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027e578181015183820152602001610266565b50505050905090810190601f1680156102ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c1610b02565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61031d6004803603604081101561030757600080fd5b506001600160a01b038135169060200135610b2c565b604080519115158252519081900360200190f35b610339610b43565b604080516001600160a01b039092168252519081900360200190f35b61035d610b52565b60408051918252519081900360200190f35b61031d6004803603606081101561038557600080fd5b506001600160a01b03813581169160208101359091169060400135610b58565b61035d610bec565b6103b5610c10565b6040805160ff9092168252519081900360200190f35b61035d610c15565b61023a600480360360408110156103e957600080fd5b506001600160a01b0381358116916020013516610c1b565b61035d610c9d565b61035d610ca3565b61035d6004803603602081101561042757600080fd5b50356001600160a01b0316610ca9565b61035d6004803603602081101561044d57600080fd5b50356001600160a01b0316610f83565b61035d610f95565b61035d6004803603602081101561047b57600080fd5b50356001600160a01b0316610f9b565b6104b1600480360360208110156104a157600080fd5b50356001600160a01b0316610fad565b6040805192835260208301919091528051918290030190f35b61024461133f565b61031d600480360360408110156104e857600080fd5b506001600160a01b038135169060200135611362565b61035d61136f565b61023a6004803603602081101561051c57600080fd5b50356001600160a01b0316611375565b6103396114e5565b6103396114f4565b61023a600480360360e081101561055257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611503565b61035d600480360360408110156105a357600080fd5b506001600160a01b0381358116916020013516611703565b61023a611720565b600c5460011461060c576040805162461bcd60e51b815260206004820152600f60248201526e14185b98d85ad94e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c558415158061061f5750600084115b61065a5760405162461bcd60e51b815260040180806020018281038252602381526020018061212f6023913960400191505060405180910390fd5b600080610665610b02565b5091509150816001600160701b03168710801561068a5750806001600160701b031686105b6106db576040805162461bcd60e51b815260206004820152601f60248201527f50616e63616b653a20494e53554646494349454e545f4c495155494449545900604482015290519081900360640190fd5b60065460075460009182916001600160a01b039182169190811690891682148015906107195750806001600160a01b0316896001600160a01b031614155b610760576040805162461bcd60e51b815260206004820152601360248201527250616e63616b653a20494e56414c49445f544f60681b604482015290519081900360640190fd5b8a1561077157610771828a8d611880565b891561078257610782818a8c611880565b861561083457886001600160a01b03166384800812338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561081b57600080fd5b505af115801561082f573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561087a57600080fd5b505afa15801561088e573d6000803e3d6000fd5b505050506040513d60208110156108a457600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108f057600080fd5b505afa158015610904573d6000803e3d6000fd5b505050506040513d602081101561091a57600080fd5b5051925060009150506001600160701b0385168a9003831161093d57600061094c565b89856001600160701b03160383035b9050600089856001600160701b0316038311610969576000610978565b89856001600160701b03160383035b905060008211806109895750600081115b6109c45760405162461bcd60e51b81526004018080602001828103825260228152602001806120e76022913960400191505060405180910390fd5b60006109e66109d4846002611a1a565b6109e0876103e8611a1a565b90611a7d565b905060006109f86109d4846002611a1a565b9050610a1d620f4240610a176001600160701b038b8116908b16611a1a565b90611a1a565b610a278383611a1a565b1015610a67576040805162461bcd60e51b815260206004820152600a60248201526950616e63616b653a204b60b01b604482015290519081900360640190fd5b5050610a7584848888611acd565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280600b81526020016a50616e63616b65204c507360a81b81525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b39338484611c8a565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610bd7576001600160a01b0384166000908152600260209081526040808320338452909152902054610bb29083611a7d565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610be2848484611cec565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610c6f576040805162461bcd60e51b81526020600482015260126024820152712830b731b0b5b29d102327a92124a22222a760711b604482015290519081900360640190fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610cf4576040805162461bcd60e51b815260206004820152600f60248201526e14185b98d85ad94e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c81905580610d04610b02565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610d5857600080fd5b505afa158015610d6c573d6000803e3d6000fd5b505050506040513d6020811015610d8257600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610dd557600080fd5b505afa158015610de9573d6000803e3d6000fd5b505050506040513d6020811015610dff57600080fd5b505190506000610e18836001600160701b038716611a7d565b90506000610e2f836001600160701b038716611a7d565b90506000610e3d8787611d9a565b60005490915080610e7457610e606103e86109e0610e5b8787611a1a565b611eda565b9850610e6f60006103e8611f2c565b610eb7565b610eb46001600160701b038916610e8b8684611a1a565b81610e9257fe5b046001600160701b038916610ea78685611a1a565b81610eae57fe5b04611fb6565b98505b60008911610ef65760405162461bcd60e51b81526004018080602001828103825260268152602001806121526026913960400191505060405180910390fd5b610f008a8a611f2c565b610f0c86868a8a611acd565b8115610f3657600854610f32906001600160701b0380821691600160701b900416611a1a565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c54600114610ff9576040805162461bcd60e51b815260206004820152600f60248201526e14185b98d85ad94e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c81905580611009610b02565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b15801561106557600080fd5b505afa158015611079573d6000803e3d6000fd5b505050506040513d602081101561108f57600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b1580156110dd57600080fd5b505afa1580156110f1573d6000803e3d6000fd5b505050506040513d602081101561110757600080fd5b5051306000908152600160205260408120549192506111268888611d9a565b600054909150806111378487611a1a565b8161113e57fe5b049a508061114c8486611a1a565b8161115357fe5b04995060008b118015611166575060008a115b6111a15760405162461bcd60e51b81526004018080602001828103825260268152602001806121096026913960400191505060405180910390fd5b6111ab3084611fce565b6111b6878d8d611880565b6111c1868d8c611880565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b15801561120757600080fd5b505afa15801561121b573d6000803e3d6000fd5b505050506040513d602081101561123157600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b15801561127d57600080fd5b505afa158015611291573d6000803e3d6000fd5b505050506040513d60208110156112a757600080fd5b505193506112b785858b8b611acd565b81156112e1576008546112dd906001600160701b0380821691600160701b900416611a1a565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b60405180604001604052806007815260200166043616b652d4c560cc1b81525081565b6000610b39338484611cec565b6103e881565b600c546001146113be576040805162461bcd60e51b815260206004820152600f60248201526e14185b98d85ad94e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b0394851694909316926114679285928792611462926001600160701b03169185916370a0823191602480820192602092909190829003018186803b15801561143057600080fd5b505afa158015611444573d6000803e3d6000fd5b505050506040513d602081101561145a57600080fd5b505190611a7d565b611880565b6114db81846114626008600e9054906101000a90046001600160701b03166001600160701b0316856001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561143057600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b4284101561154b576040805162461bcd60e51b815260206004820152601060248201526f14185b98d85ad94e881156141254915160821b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa158015611666573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061169c5750886001600160a01b0316816001600160a01b0316145b6116ed576040805162461bcd60e51b815260206004820152601a60248201527f50616e63616b653a20494e56414c49445f5349474e4154555245000000000000604482015290519081900360640190fd5b6116f8898989611c8a565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c54600114611769576040805162461bcd60e51b815260206004820152600f60248201526e14185b98d85ad94e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b81523060048201529051611879926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156117ba57600080fd5b505afa1580156117ce573d6000803e3d6000fd5b505050506040513d60208110156117e457600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561183157600080fd5b505afa158015611845573d6000803e3d6000fd5b505050506040513d602081101561185b57600080fd5b50516008546001600160701b0380821691600160701b900416611acd565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b6020831061192d5780518252601f19909201916020918201910161190e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461198f576040519150601f19603f3d011682016040523d82523d6000602084013e611994565b606091505b50915091508180156119c25750805115806119c257508080602001905160208110156119bf57600080fd5b50515b611a13576040805162461bcd60e51b815260206004820152601860248201527f50616e63616b653a205452414e534645525f4641494c45440000000000000000604482015290519081900360640190fd5b5050505050565b6000811580611a3557505080820282828281611a3257fe5b04145b610b3d576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610b3d576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160701b038411801590611aeb57506001600160701b038311155b611b30576040805162461bcd60e51b815260206004820152601160248201527050616e63616b653a204f564552464c4f5760781b604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611b6057506001600160701b03841615155b8015611b7457506001600160701b03831615155b15611bdf578063ffffffff16611b9c85611b8d86612060565b6001600160e01b031690612072565b600980546001600160e01b03929092169290920201905563ffffffff8116611bc784611b8d87612060565b600a80546001600160e01b0392909216929092020190555b600880546dffffffffffffffffffffffffffff19166001600160701b03888116919091176dffffffffffffffffffffffffffff60701b1916600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611d0f9082611a7d565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611d3e9082612097565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611deb57600080fd5b505afa158015611dff573d6000803e3d6000fd5b505050506040513d6020811015611e1557600080fd5b5051600b546001600160a01b038216158015945091925090611ec6578015611ec1576000611e52610e5b6001600160701b03888116908816611a1a565b90506000611e5f83611eda565b905080821115611ebe576000611e81611e788484611a7d565b60005490611a1a565b90506000611e9a83611e94866003611a1a565b90612097565b90506000818381611ea757fe5b0490508015611eba57611eba8782611f2c565b5050505b50505b611ed2565b8015611ed2576000600b555b505092915050565b60006003821115611f1d575080600160028204015b81811015611f1757809150600281828581611f0657fe5b040181611f0f57fe5b049050611eef565b50611f27565b8115611f27575060015b919050565b600054611f399082612097565b60009081556001600160a01b038316815260016020526040902054611f5e9082612097565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000818310611fc55781611fc7565b825b9392505050565b6001600160a01b038216600090815260016020526040902054611ff19082611a7d565b6001600160a01b038316600090815260016020526040812091909155546120189082611a7d565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161208f57fe5b049392505050565b80820182811015610b3d576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe50616e63616b653a20494e53554646494349454e545f494e5055545f414d4f554e5450616e63616b653a20494e53554646494349454e545f4c49515549444954595f4255524e454450616e63616b653a20494e53554646494349454e545f4f55545055545f414d4f554e5450616e63616b653a20494e53554646494349454e545f4c49515549444954595f4d494e544544a26469706673582212209a1dfb077c627dbb8f4f65d10727c9c7c4cff71b26ba50a4bcafdefa7fad1a7064736f6c63430007040033a264697066735822122061874bd276a1dd8969428eae297a01814bd4c8f74f7cff808b94c298915f4a4164736f6c63430007040033";
class PancakeFactory__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_feeToSetter, overrides) {
        return super.deploy(_feeToSetter, overrides || {});
    }
    getDeployTransaction(_feeToSetter, overrides) {
        return super.getDeployTransaction(_feeToSetter, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.PancakeFactory__factory = PancakeFactory__factory;
PancakeFactory__factory.bytecode = _bytecode;
PancakeFactory__factory.abi = _abi;
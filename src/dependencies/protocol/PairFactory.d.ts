/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface PairFactoryInterface extends ethers.utils.Interface {
  functions: {
    "REVISION()": FunctionFragment;
    "getAllProxyLendables()": FunctionFragment;
    "getAllShortables()": FunctionFragment;
    "getAllTradables()": FunctionFragment;
    "getOrCreatePair(address,address)": FunctionFragment;
    "getOrCreateRoutablePair(address,address,address)": FunctionFragment;
    "getOrCreateRoutableShortingPair(address,address,address)": FunctionFragment;
    "getOrCreateShortingPair(address,address)": FunctionFragment;
    "getPair(address,address)": FunctionFragment;
    "getPairDeployer()": FunctionFragment;
    "getRoutablePair(address,address,address)": FunctionFragment;
    "getRoutableShortingPair(address,address,address)": FunctionFragment;
    "getShortingPair(address,address)": FunctionFragment;
    "getShortingPairDeployer()": FunctionFragment;
    "initialize(address,address,address,address,address)": FunctionFragment;
    "isPair(address)": FunctionFragment;
    "isRegisteredShortable(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "registerProxyLendable(address)": FunctionFragment;
    "registerProxyLendables(address[])": FunctionFragment;
    "registerShortable(address)": FunctionFragment;
    "registerShortables(address[])": FunctionFragment;
    "registerTradable(address)": FunctionFragment;
    "registerTradables(address[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPairDeployer(address)": FunctionFragment;
    "setShortingPairDeployer(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgrade()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "REVISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAllProxyLendables",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllShortables",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllTradables",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOrCreatePair",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrCreateRoutablePair",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrCreateRoutableShortingPair",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrCreateShortingPair",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPair",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPairDeployer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoutablePair",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoutableShortingPair",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getShortingPair",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getShortingPairDeployer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "isPair", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isRegisteredShortable",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerProxyLendable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerProxyLendables",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "registerShortable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerShortables",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "registerTradable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerTradables",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPairDeployer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setShortingPairDeployer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "upgrade", values?: undefined): string;

  decodeFunctionResult(functionFragment: "REVISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllProxyLendables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllShortables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllTradables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrCreatePair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrCreateRoutablePair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrCreateRoutableShortingPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrCreateShortingPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPairDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoutablePair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoutableShortingPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getShortingPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getShortingPairDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isRegisteredShortable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerProxyLendable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerProxyLendables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerShortable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerShortables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerTradable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerTradables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPairDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setShortingPairDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class PairFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PairFactoryInterface;

  functions: {
    REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAllProxyLendables(overrides?: CallOverrides): Promise<[string[]]>;

    getAllShortables(overrides?: CallOverrides): Promise<[string[]]>;

    getAllTradables(overrides?: CallOverrides): Promise<[string[]]>;

    getOrCreatePair(
      lendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getOrCreateRoutablePair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getOrCreateRoutableShortingPair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getOrCreateShortingPair(
      lendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPair(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPairDeployer(overrides?: CallOverrides): Promise<[string]>;

    getRoutablePair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoutableShortingPair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getShortingPair(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getShortingPairDeployer(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      reserveFactory: string,
      paramProviderFactory: string,
      pairDeployer: string,
      treasurer: string,
      wow: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isPair(pair: string, overrides?: CallOverrides): Promise<[boolean]>;

    isRegisteredShortable(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    registerProxyLendable(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerProxyLendables(
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerShortable(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerShortables(
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerTradable(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerTradables(
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPairDeployer(
      pairDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setShortingPairDeployer(
      shortingPairDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  getAllProxyLendables(overrides?: CallOverrides): Promise<string[]>;

  getAllShortables(overrides?: CallOverrides): Promise<string[]>;

  getAllTradables(overrides?: CallOverrides): Promise<string[]>;

  getOrCreatePair(
    lendable: string,
    tradable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getOrCreateRoutablePair(
    lendable: string,
    proxyLendable: string,
    tradable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getOrCreateRoutableShortingPair(
    lendable: string,
    proxyLendable: string,
    tradable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getOrCreateShortingPair(
    lendable: string,
    tradable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPair(
    lendable: string,
    tradable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getPairDeployer(overrides?: CallOverrides): Promise<string>;

  getRoutablePair(
    lendable: string,
    proxyLendable: string,
    tradable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoutableShortingPair(
    lendable: string,
    proxyLendable: string,
    tradable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getShortingPair(
    lendable: string,
    tradable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getShortingPairDeployer(overrides?: CallOverrides): Promise<string>;

  initialize(
    reserveFactory: string,
    paramProviderFactory: string,
    pairDeployer: string,
    treasurer: string,
    wow: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isPair(pair: string, overrides?: CallOverrides): Promise<boolean>;

  isRegisteredShortable(
    token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  registerProxyLendable(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerProxyLendables(
    tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerShortable(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerShortables(
    tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerTradable(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerTradables(
    tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPairDeployer(
    pairDeployer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setShortingPairDeployer(
    shortingPairDeployer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgrade(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    getAllProxyLendables(overrides?: CallOverrides): Promise<string[]>;

    getAllShortables(overrides?: CallOverrides): Promise<string[]>;

    getAllTradables(overrides?: CallOverrides): Promise<string[]>;

    getOrCreatePair(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getOrCreateRoutablePair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getOrCreateRoutableShortingPair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getOrCreateShortingPair(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getPair(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getPairDeployer(overrides?: CallOverrides): Promise<string>;

    getRoutablePair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoutableShortingPair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getShortingPair(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getShortingPairDeployer(overrides?: CallOverrides): Promise<string>;

    initialize(
      reserveFactory: string,
      paramProviderFactory: string,
      pairDeployer: string,
      treasurer: string,
      wow: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isPair(pair: string, overrides?: CallOverrides): Promise<boolean>;

    isRegisteredShortable(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    registerProxyLendable(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    registerProxyLendables(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    registerShortable(token: string, overrides?: CallOverrides): Promise<void>;

    registerShortables(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    registerTradable(token: string, overrides?: CallOverrides): Promise<void>;

    registerTradables(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setPairDeployer(
      pairDeployer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setShortingPairDeployer(
      shortingPairDeployer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgrade(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    getAllProxyLendables(overrides?: CallOverrides): Promise<BigNumber>;

    getAllShortables(overrides?: CallOverrides): Promise<BigNumber>;

    getAllTradables(overrides?: CallOverrides): Promise<BigNumber>;

    getOrCreatePair(
      lendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getOrCreateRoutablePair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getOrCreateRoutableShortingPair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getOrCreateShortingPair(
      lendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPair(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPairDeployer(overrides?: CallOverrides): Promise<BigNumber>;

    getRoutablePair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoutableShortingPair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getShortingPair(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getShortingPairDeployer(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      reserveFactory: string,
      paramProviderFactory: string,
      pairDeployer: string,
      treasurer: string,
      wow: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isPair(pair: string, overrides?: CallOverrides): Promise<BigNumber>;

    isRegisteredShortable(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    registerProxyLendable(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerProxyLendables(
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerShortable(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerShortables(
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerTradable(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerTradables(
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPairDeployer(
      pairDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setShortingPairDeployer(
      shortingPairDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllProxyLendables(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllShortables(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllTradables(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOrCreatePair(
      lendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getOrCreateRoutablePair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getOrCreateRoutableShortingPair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getOrCreateShortingPair(
      lendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPair(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPairDeployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoutablePair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoutableShortingPair(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getShortingPair(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getShortingPairDeployer(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      reserveFactory: string,
      paramProviderFactory: string,
      pairDeployer: string,
      treasurer: string,
      wow: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isPair(
      pair: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isRegisteredShortable(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerProxyLendable(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerProxyLendables(
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerShortable(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerShortables(
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerTradable(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerTradables(
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPairDeployer(
      pairDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setShortingPairDeployer(
      shortingPairDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

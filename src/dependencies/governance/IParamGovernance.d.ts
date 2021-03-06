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

interface IParamGovernanceInterface extends ethers.utils.Interface {
  functions: {
    "getAddress(bytes32)": FunctionFragment;
    "getFeeDistribution()": FunctionFragment;
    "getParam(bytes32)": FunctionFragment;
    "getParams()": FunctionFragment;
    "getVotes(address)": FunctionFragment;
    "revote(address)": FunctionFragment;
    "setAddress(bytes32,address)": FunctionFragment;
    "setParamBounds(bytes32,uint256,uint256)": FunctionFragment;
    "setParamsBounds(bytes32[],uint256[],uint256[])": FunctionFragment;
    "voteForFeeDistribution(address,tuple)": FunctionFragment;
    "voteForParam(address,bytes32,uint256)": FunctionFragment;
    "voteForParams(address,bytes32[],uint256[])": FunctionFragment;
    "xWOW()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getFeeDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getParam", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "getParams", values?: undefined): string;
  encodeFunctionData(functionFragment: "getVotes", values: [string]): string;
  encodeFunctionData(functionFragment: "revote", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setParamBounds",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setParamsBounds",
    values: [BytesLike[], BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "voteForFeeDistribution",
    values: [
      string,
      {
        governanceReward: BigNumberish;
        development: BigNumberish;
        insurance: BigNumberish;
        charity: BigNumberish;
        buyAndBurn: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "voteForParam",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voteForParams",
    values: [string, BytesLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "xWOW", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFeeDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getParam", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getParams", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setParamBounds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setParamsBounds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteForFeeDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteForParam",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteForParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "xWOW", data: BytesLike): Result;

  events: {};
}

export class IParamGovernance extends BaseContract {
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

  interface: IParamGovernanceInterface;

  functions: {
    getAddress(name: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getFeeDistribution(
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { funds: string[]; percentages: BigNumber[] }
    >;

    getParam(name: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;

    getParams(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getVotes(
      holder: string,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { names: string[]; values: BigNumber[] }
    >;

    revote(
      holder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAddress(
      name: BytesLike,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setParamBounds(
      parameter: BytesLike,
      minValue: BigNumberish,
      maxValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setParamsBounds(
      parameters: BytesLike[],
      minValues: BigNumberish[],
      maxValues: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    voteForFeeDistribution(
      holder: string,
      distribution: {
        governanceReward: BigNumberish;
        development: BigNumberish;
        insurance: BigNumberish;
        charity: BigNumberish;
        buyAndBurn: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    voteForParam(
      holder: string,
      name: BytesLike,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    voteForParams(
      holder: string,
      names: BytesLike[],
      values: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    xWOW(overrides?: CallOverrides): Promise<[string]>;
  };

  getAddress(name: BytesLike, overrides?: CallOverrides): Promise<string>;

  getFeeDistribution(
    overrides?: CallOverrides
  ): Promise<
    [string[], BigNumber[]] & { funds: string[]; percentages: BigNumber[] }
  >;

  getParam(name: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  getParams(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getVotes(
    holder: string,
    overrides?: CallOverrides
  ): Promise<
    [string[], BigNumber[]] & { names: string[]; values: BigNumber[] }
  >;

  revote(
    holder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAddress(
    name: BytesLike,
    value: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setParamBounds(
    parameter: BytesLike,
    minValue: BigNumberish,
    maxValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setParamsBounds(
    parameters: BytesLike[],
    minValues: BigNumberish[],
    maxValues: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  voteForFeeDistribution(
    holder: string,
    distribution: {
      governanceReward: BigNumberish;
      development: BigNumberish;
      insurance: BigNumberish;
      charity: BigNumberish;
      buyAndBurn: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  voteForParam(
    holder: string,
    name: BytesLike,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  voteForParams(
    holder: string,
    names: BytesLike[],
    values: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  xWOW(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getAddress(name: BytesLike, overrides?: CallOverrides): Promise<string>;

    getFeeDistribution(
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { funds: string[]; percentages: BigNumber[] }
    >;

    getParam(name: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getParams(
      overrides?: CallOverrides
    ): Promise<
      ([string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        name: string;
        value: BigNumber;
        amount: BigNumber;
        minValue: BigNumber;
        maxValue: BigNumber;
      })[]
    >;

    getVotes(
      holder: string,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { names: string[]; values: BigNumber[] }
    >;

    revote(holder: string, overrides?: CallOverrides): Promise<void>;

    setAddress(
      name: BytesLike,
      value: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setParamBounds(
      parameter: BytesLike,
      minValue: BigNumberish,
      maxValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setParamsBounds(
      parameters: BytesLike[],
      minValues: BigNumberish[],
      maxValues: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    voteForFeeDistribution(
      holder: string,
      distribution: {
        governanceReward: BigNumberish;
        development: BigNumberish;
        insurance: BigNumberish;
        charity: BigNumberish;
        buyAndBurn: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    voteForParam(
      holder: string,
      name: BytesLike,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    voteForParams(
      holder: string,
      names: BytesLike[],
      values: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    xWOW(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getAddress(name: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getFeeDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    getParam(name: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getParams(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getVotes(holder: string, overrides?: CallOverrides): Promise<BigNumber>;

    revote(
      holder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAddress(
      name: BytesLike,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setParamBounds(
      parameter: BytesLike,
      minValue: BigNumberish,
      maxValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setParamsBounds(
      parameters: BytesLike[],
      minValues: BigNumberish[],
      maxValues: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    voteForFeeDistribution(
      holder: string,
      distribution: {
        governanceReward: BigNumberish;
        development: BigNumberish;
        insurance: BigNumberish;
        charity: BigNumberish;
        buyAndBurn: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    voteForParam(
      holder: string,
      name: BytesLike,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    voteForParams(
      holder: string,
      names: BytesLike[],
      values: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    xWOW(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAddress(
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFeeDistribution(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getParam(
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getParams(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getVotes(
      holder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    revote(
      holder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAddress(
      name: BytesLike,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setParamBounds(
      parameter: BytesLike,
      minValue: BigNumberish,
      maxValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setParamsBounds(
      parameters: BytesLike[],
      minValues: BigNumberish[],
      maxValues: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    voteForFeeDistribution(
      holder: string,
      distribution: {
        governanceReward: BigNumberish;
        development: BigNumberish;
        insurance: BigNumberish;
        charity: BigNumberish;
        buyAndBurn: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    voteForParam(
      holder: string,
      name: BytesLike,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    voteForParams(
      holder: string,
      names: BytesLike[],
      values: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    xWOW(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

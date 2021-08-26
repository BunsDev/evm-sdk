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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ChainlinkPriceFeedInterface extends ethers.utils.Interface {
  functions: {
    "REVISION()": FunctionFragment;
    "getAmountOut(uint256,bool)": FunctionFragment;
    "getPrice(bool)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "REVISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "getPrice", values: [boolean]): string;

  decodeFunctionResult(functionFragment: "REVISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;

  events: {};
}

export class ChainlinkPriceFeed extends BaseContract {
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

  interface: ChainlinkPriceFeedInterface;

  functions: {
    REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAmountOut(
      amountIn: BigNumberish,
      sell: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    getPrice(
      sell: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { price: BigNumber }>;
  };

  REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  getAmountOut(
    amountIn: BigNumberish,
    sell: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPrice(sell: boolean, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountOut(
      amountIn: BigNumberish,
      sell: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(sell: boolean, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountOut(
      amountIn: BigNumberish,
      sell: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(sell: boolean, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAmountOut(
      amountIn: BigNumberish,
      sell: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      sell: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
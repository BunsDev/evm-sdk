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

interface INewPriceGuardFactoryInterface extends ethers.utils.Interface {
  functions: {
    "getGuard(bytes32)": FunctionFragment;
    "getGuardIdentity(uint8,uint8,tuple[])": FunctionFragment;
    "getOrCreateGuard(uint8,uint8,tuple[])": FunctionFragment;
    "knownGuard(bytes32)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getGuard", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getGuardIdentity",
    values: [BigNumberish, BigNumberish, { feed: string; sell: boolean }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrCreateGuard",
    values: [BigNumberish, BigNumberish, { feed: string; sell: boolean }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "knownGuard",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "getGuard", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGuardIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrCreateGuard",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "knownGuard", data: BytesLike): Result;

  events: {};
}

export class INewPriceGuardFactory extends BaseContract {
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

  interface: INewPriceGuardFactoryInterface;

  functions: {
    getGuard(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { guard: string }>;

    getGuardIdentity(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feed: string; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<[string] & { identity: string }>;

    getOrCreateGuard(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feed: string; sell: boolean }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    knownGuard(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { known: boolean }>;
  };

  getGuard(identity: BytesLike, overrides?: CallOverrides): Promise<string>;

  getGuardIdentity(
    src: BigNumberish,
    dest: BigNumberish,
    feeds: { feed: string; sell: boolean }[],
    overrides?: CallOverrides
  ): Promise<string>;

  getOrCreateGuard(
    src: BigNumberish,
    dest: BigNumberish,
    feeds: { feed: string; sell: boolean }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  knownGuard(identity: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    getGuard(identity: BytesLike, overrides?: CallOverrides): Promise<string>;

    getGuardIdentity(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feed: string; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<string>;

    getOrCreateGuard(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feed: string; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<string>;

    knownGuard(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getGuard(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGuardIdentity(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feed: string; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrCreateGuard(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feed: string; sell: boolean }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    knownGuard(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getGuard(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGuardIdentity(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feed: string; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrCreateGuard(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feed: string; sell: boolean }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    knownGuard(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

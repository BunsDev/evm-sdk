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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IPairInterface extends ethers.utils.Interface {
  functions: {
    "calcProfitFee(uint256,uint256)": FunctionFragment;
    "closePosition(address,uint256)": FunctionFragment;
    "closePositionWithReferrer(address,uint256,address)": FunctionFragment;
    "getAmountOut(uint256)": FunctionFragment;
    "getBorrowLimit()": FunctionFragment;
    "getDeposit(address)": FunctionFragment;
    "getLiquidationCost(uint256)": FunctionFragment;
    "getLoan(address)": FunctionFragment;
    "getRateMultiplier(uint256)": FunctionFragment;
    "getReserve()": FunctionFragment;
    "getTerminationConditions(address)": FunctionFragment;
    "getTotalDeposit()": FunctionFragment;
    "getTotalLoan()": FunctionFragment;
    "initialize(address,address,address,address[],string,string)": FunctionFragment;
    "isActive()": FunctionFragment;
    "liquidatePosition(address,address)": FunctionFragment;
    "positionCosts(address)": FunctionFragment;
    "setTerminationConditions(address,(uint256,uint256,uint256,(uint8,bytes32,bytes32)))": FunctionFragment;
    "terminatePosition(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calcProfitFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closePosition",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closePositionWithReferrer",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBorrowLimit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getDeposit", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getLiquidationCost",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getLoan", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getRateMultiplier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTerminationConditions",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalLoan",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string[], string, string]
  ): string;
  encodeFunctionData(functionFragment: "isActive", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "liquidatePosition",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "positionCosts",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTerminationConditions",
    values: [
      string,
      {
        stopLossPercentage: BigNumberish;
        takeProfitPercentage: BigNumberish;
        deadline: BigNumberish;
        signature: { v: BigNumberish; r: BytesLike; s: BytesLike };
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "terminatePosition",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "calcProfitFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closePositionWithReferrer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBorrowLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidationCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getLoan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRateMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReserve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTerminationConditions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isActive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidatePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "positionCosts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTerminationConditions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "terminatePosition",
    data: BytesLike
  ): Result;

  events: {
    "ChangedPosition(address,uint256,uint256,uint256,uint256)": EventFragment;
    "Liquidated(address,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedPosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Liquidated"): EventFragment;
}

export type ChangedPositionEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
  trader: string;
  amount: BigNumber;
  loan: BigNumber;
  cost: BigNumber;
  liquidationCost: BigNumber;
}
  >;

export type LiquidatedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
  trader: string;
  amount: BigNumber;
  loanPaid: BigNumber;
  cost: BigNumber;
  liquidationCost: BigNumber;
}
  >;

export class IPair extends BaseContract {
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

  interface: IPairInterface;

  functions: {
    calcProfitFee(
      amount: BigNumberish,
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { profit: BigNumber; fee: BigNumber }>;

    closePosition(
      trader: string,
      amountOutMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    closePositionWithReferrer(
      trader: string,
      amountOutMin: BigNumberish,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAmountOut(
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBorrowLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    getDeposit(trader: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getLiquidationCost(
      currentDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLoan(trader: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getRateMultiplier(
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getReserve(overrides?: CallOverrides): Promise<[string]>;

    getTerminationConditions(
      trader: string,
      overrides?: CallOverrides
    ): Promise<
      [
          [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        }
      ]
      >;

    getTotalDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalLoan(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      reserve: string,
      paramProvider: string,
      wow: string,
      path: string[],
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isActive(overrides?: CallOverrides): Promise<[boolean]>;

    liquidatePosition(
      trader: string,
      liquidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    positionCosts(
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTerminationConditions(
      trader: string,
      request: {
        stopLossPercentage: BigNumberish;
        takeProfitPercentage: BigNumberish;
        deadline: BigNumberish;
        signature: { v: BigNumberish; r: BytesLike; s: BytesLike };
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    terminatePosition(
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  calcProfitFee(
    amount: BigNumberish,
    deposit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { profit: BigNumber; fee: BigNumber }>;

  closePosition(
    trader: string,
    amountOutMin: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  closePositionWithReferrer(
    trader: string,
    amountOutMin: BigNumberish,
    referrer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAmountOut(
    amountIn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getBorrowLimit(overrides?: CallOverrides): Promise<BigNumber>;

  getDeposit(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

  getLiquidationCost(
    currentDebt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLoan(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

  getRateMultiplier(
    leverageFactor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getReserve(overrides?: CallOverrides): Promise<string>;

  getTerminationConditions(
    trader: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
    expirationDate: BigNumber;
    stopLossPercentage: BigNumber;
    takeProfitPercentage: BigNumber;
    terminationReward: BigNumber;
  }
    >;

  getTotalDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalLoan(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    reserve: string,
    paramProvider: string,
    wow: string,
    path: string[],
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isActive(overrides?: CallOverrides): Promise<boolean>;

  liquidatePosition(
    trader: string,
    liquidator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  positionCosts(
    trader: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTerminationConditions(
    trader: string,
    request: {
      stopLossPercentage: BigNumberish;
      takeProfitPercentage: BigNumberish;
      deadline: BigNumberish;
      signature: { v: BigNumberish; r: BytesLike; s: BytesLike };
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  terminatePosition(
    trader: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calcProfitFee(
      amount: BigNumberish,
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { profit: BigNumber; fee: BigNumber }>;

    closePosition(
      trader: string,
      amountOutMin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closePositionWithReferrer(
      trader: string,
      amountOutMin: BigNumberish,
      referrer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountOut(
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBorrowLimit(overrides?: CallOverrides): Promise<BigNumber>;

    getDeposit(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidationCost(
      currentDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLoan(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    getRateMultiplier(
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserve(overrides?: CallOverrides): Promise<string>;

    getTerminationConditions(
      trader: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
      expirationDate: BigNumber;
      stopLossPercentage: BigNumber;
      takeProfitPercentage: BigNumber;
      terminationReward: BigNumber;
    }
      >;

    getTotalDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalLoan(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      reserve: string,
      paramProvider: string,
      wow: string,
      path: string[],
      name: string,
      symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isActive(overrides?: CallOverrides): Promise<boolean>;

    liquidatePosition(
      trader: string,
      liquidator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    positionCosts(
      trader: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
      currentCost: BigNumber;
      liquidationCost: BigNumber;
    }
      >;

    setTerminationConditions(
      trader: string,
      request: {
        stopLossPercentage: BigNumberish;
        takeProfitPercentage: BigNumberish;
        deadline: BigNumberish;
        signature: { v: BigNumberish; r: BytesLike; s: BytesLike };
      },
      overrides?: CallOverrides
    ): Promise<void>;

    terminatePosition(trader: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ChangedPosition(address,uint256,uint256,uint256,uint256)"(
      trader?: string | null,
      amount?: null,
      loan?: null,
      cost?: null,
      liquidationCost?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        trader: string;
        amount: BigNumber;
        loan: BigNumber;
        cost: BigNumber;
        liquidationCost: BigNumber;
      }
      >;

    ChangedPosition(
      trader?: string | null,
      amount?: null,
      loan?: null,
      cost?: null,
      liquidationCost?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        trader: string;
        amount: BigNumber;
        loan: BigNumber;
        cost: BigNumber;
        liquidationCost: BigNumber;
      }
      >;

    "Liquidated(address,uint256,uint256,uint256,uint256)"(
      trader?: string | null,
      amount?: null,
      loanPaid?: null,
      cost?: null,
      liquidationCost?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        trader: string;
        amount: BigNumber;
        loanPaid: BigNumber;
        cost: BigNumber;
        liquidationCost: BigNumber;
      }
      >;

    Liquidated(
      trader?: string | null,
      amount?: null,
      loanPaid?: null,
      cost?: null,
      liquidationCost?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        trader: string;
        amount: BigNumber;
        loanPaid: BigNumber;
        cost: BigNumber;
        liquidationCost: BigNumber;
      }
      >;
  };

  estimateGas: {
    calcProfitFee(
      amount: BigNumberish,
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closePosition(
      trader: string,
      amountOutMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    closePositionWithReferrer(
      trader: string,
      amountOutMin: BigNumberish,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAmountOut(
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getBorrowLimit(overrides?: CallOverrides): Promise<BigNumber>;

    getDeposit(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidationCost(
      currentDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLoan(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    getRateMultiplier(
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserve(overrides?: CallOverrides): Promise<BigNumber>;

    getTerminationConditions(
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalLoan(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      reserve: string,
      paramProvider: string,
      wow: string,
      path: string[],
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isActive(overrides?: CallOverrides): Promise<BigNumber>;

    liquidatePosition(
      trader: string,
      liquidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    positionCosts(
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTerminationConditions(
      trader: string,
      request: {
        stopLossPercentage: BigNumberish;
        takeProfitPercentage: BigNumberish;
        deadline: BigNumberish;
        signature: { v: BigNumberish; r: BytesLike; s: BytesLike };
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    terminatePosition(
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calcProfitFee(
      amount: BigNumberish,
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closePosition(
      trader: string,
      amountOutMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    closePositionWithReferrer(
      trader: string,
      amountOutMin: BigNumberish,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAmountOut(
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getBorrowLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeposit(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidationCost(
      currentDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLoan(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRateMultiplier(
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTerminationConditions(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalLoan(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      reserve: string,
      paramProvider: string,
      wow: string,
      path: string[],
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidatePosition(
      trader: string,
      liquidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    positionCosts(
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTerminationConditions(
      trader: string,
      request: {
        stopLossPercentage: BigNumberish;
        takeProfitPercentage: BigNumberish;
        deadline: BigNumberish;
        signature: { v: BigNumberish; r: BytesLike; s: BytesLike };
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    terminatePosition(
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

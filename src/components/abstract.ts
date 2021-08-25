import { HardhatRuntimeEnvironment } from 'hardhat/types';

export type Context<TParams = {}, TDependencies = {}> = {
  readonly hre: HardhatRuntimeEnvironment;
  readonly params: TParams;
} & TDependencies;

export type InferContext<T> = T extends AbstractComponent<
  infer TParams,
  infer TDependencies
>
  ? Context<TParams, TDependencies>
  : never;

export type InferParams<T> = T extends AbstractComponent<infer TParams, any>
  ? TParams
  : never;

export type InferDeps<T> = T extends AbstractComponent<any, infer TDeps>
  ? TDeps
  : never;

export abstract class AbstractComponent<TParams = {}, TDependencies = {}> {
  constructor(protected context: Context<TParams, TDependencies>) {}

  protected get hre() {
    return this.context.hre;
  }
  protected get params() {
    return this.context.params;
  }
}

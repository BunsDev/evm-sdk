import '@nomiclabs/hardhat-ethers';
import { BaseContract } from 'ethers';
import { Multisender } from '../helpers/multisender';
import { AbstractComponent, InferContext } from './abstract';
import { Provider } from '@ethersproject/abstract-provider';

type GenericFactory<T> = {
  connect(address: string, provider: Provider): T;
};

export type CoreAddresses = typeof Core.REQUIRED_ADDRESSES[number];

export class Core extends AbstractComponent<{
  contracts: Record<CoreAddresses, string>;
}> {
  public static REQUIRED_ADDRESSES = ['multicall'] as const;

  public sender: Multisender;
  constructor(context: InferContext<Core>) {
    super(context);

    this.sender = new Multisender(
      this.hre.ethers.provider,

      this.params.contracts.multicall
    );
  }

  useProvider() {
    return this.hre.ethers.provider;
  }

  useContracts() {
    return this.params.contracts;
  }

  useCall<T extends BaseContract, TMethod extends keyof T['functions']>(
    contract: T,
    method: TMethod,
    ...args: Parameters<T['functions'][TMethod]>
  ) {
    return this.useCallWithBlock(contract, method, ...args).then(
      ({ result }) => result
    );
  }

  useCallWithBlock<
    T extends BaseContract,
    TMethod extends keyof T['functions']
  >(
    contract: T,
    method: TMethod,
    ...args: Parameters<T['functions'][TMethod]>
  ) {
    return this.sender.callWithBlock(contract, method, ...args);
  }

  useNonce(address: string) {
    return this.hre.ethers.provider.getTransactionCount(address);
  }

  useSigners() {
    return this.hre.ethers.getSigners();
  }

  useNetwork() {
    return this.hre.ethers.provider.getNetwork();
  }

  useContract<T extends BaseContract>(
    factory: GenericFactory<T>,
    address: string
  ) {
    if (!address || this.hre.ethers.constants.AddressZero === address) {
      throw new Error('Undefined address');
    }
    return factory.connect(address, this.useProvider());
  }
}

export abstract class CoreRelevant<
  TParams = {},
  TDeps = {}
> extends AbstractComponent<TParams, TDeps & { readonly core: Core }> {
  protected get core() {
    return this.context.core;
  }
}

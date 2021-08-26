import { AddressZero } from '@ethersproject/constants';
import { MemoryCache } from 'ts-method-cache';
import {
  Reserve,
  ReserveFactory__factory,
  Reserve__factory,
} from '../contracts/protocol/types';
import { byteToAddress, mapAll } from '../helpers/utils';
import { BlockTag } from '../types';
import { InferContext } from './abstract';
import { CoreRelevant } from './core';

export class Reserves extends CoreRelevant<{
  contracts: Record<typeof Reserves.REQUIRED_ADDRESSES[number], string>;
}> {
  public static REQUIRED_ADDRESSES = ['reserveFactory'] as const;

  constructor(context: InferContext<Reserves>) {
    super(context);
  }

  @MemoryCache()
  useReserveFactory() {
    return this.core.useContract(
      ReserveFactory__factory,
      this.params.contracts.reserveFactory
    );
  }

  @MemoryCache()
  private _useAllCached(block: number) {
    console.log(`getting new lendables on ${block}`);
    return this.core
      .useCall(this.useReserveFactory(), 'getAllLendables')
      .then(mapAll(byteToAddress));
  }

  @MemoryCache()
  private _useReserveCached(lendable: string): Promise<string> {
    const call = this.core.useCall;
    const factory = this.useReserveFactory();
    return call(factory, 'getReserve', lendable);
  }

  useAllLendables(blockTag?: BlockTag) {
    // TODO: More clever update cache
    const block = typeof blockTag === 'number' ? blockTag : Math.random();
    return this._useAllCached(block);
  }

  useReserve(lendable: string): Promise<Reserve | undefined> {
    return this._useReserveCached(lendable).then((address) =>
      address === AddressZero
        ? undefined
        : this.core.useContract(Reserve__factory, address)
    );
  }
}

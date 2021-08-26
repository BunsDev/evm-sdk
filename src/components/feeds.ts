import { Signer } from '@ethersproject/abstract-signer';
import { MemoryCache } from 'ts-method-cache';
import {
  PriceFeed,
  PriceFeedFactory__factory,
  PriceFeed__factory,
} from '../dependencies/price-feed';
import '../helpers/math';
import { amount, BN, toBN } from '../helpers/math';
import { InferContext } from './abstract';
import { CoreRelevant } from './core';
import { AddressZero } from '@ethersproject/constants';

export class PriceFeeds extends CoreRelevant<{
  contracts: Record<typeof PriceFeeds.REQUIRED_ADDRESSES[number], string>;
}> {
  public static REQUIRED_ADDRESSES = ['priceFeedFactory'] as const;

  constructor(context: InferContext<PriceFeeds>) {
    super(context);
  }

  @MemoryCache()
  useFactory() {
    return this.core.useContract(
      PriceFeedFactory__factory,
      this.params.contracts.priceFeedFactory
    );
  }

  async useLatestPrice(left: string, right: string): Promise<BN | undefined>;
  async useLatestPrice(feed: PriceFeed): Promise<BN | undefined>;
  async useLatestPrice(
    feedOrLeft: string | PriceFeed,
    right?: string
  ): Promise<BN | undefined> {
    let feed =
      typeof feedOrLeft === 'string'
        ? typeof right === 'string'
          ? await this.useFeed(feedOrLeft, right)
          : undefined
        : feedOrLeft;

    if (!feed) {
      throw new Error('Unexpected arguments');
    }

    return feed
      .getCurrentPrice()
      .then(({ currentPrice }) => amount(1).wadDiv(toBN(currentPrice)));
  }

  async useFeed(
    left: string,
    right: string,
    creator: Signer
  ): Promise<PriceFeed>;

  async useFeed(left: string, right: string): Promise<PriceFeed>;
  async useFeed(
    left: string,
    right: string,
    creator?: Signer
  ): Promise<PriceFeed | undefined> {
    const factory = await this.useFactory();

    let feed = await this.core
      .useCall(factory, 'getPriceFeed', left, right)
      .then((feed) =>
        feed === AddressZero
          ? undefined
          : this.core.useContract(PriceFeed__factory, feed)
      );

    if (!feed && creator) {
      await factory
        .connect(creator)
        .getOrCreatePriceFeed(left, right)
        .then((tx) => tx.wait());
      feed = await factory
        .getPriceFeed(left, right)
        .then((feed) => this.core.useContract(PriceFeed__factory, feed));
    }

    return feed;
  }
}

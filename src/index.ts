import { HardhatRuntimeEnvironment } from 'hardhat/types';
import hre from 'hardhat';

import {
  Tokens,
  Core,
  Pairs,
  Reserves,
  PriceFeeds,
  Guards,
} from './components';
import { InferParams } from './components/abstract';

export class Context {
  readonly tokens: Tokens;
  readonly core: Core;
  readonly feeds: PriceFeeds;
  readonly guards: Guards;
  readonly pairs: Pairs;
  readonly reserves: Reserves;

  constructor(
    public readonly hre: HardhatRuntimeEnvironment,
    public readonly params: InferParams<Core> &
      InferParams<Tokens> &
      InferParams<PriceFeeds> &
      InferParams<Guards> &
      InferParams<Pairs> &
      InferParams<Reserves>
  ) {
    this.core = new Core(this);
    this.tokens = new Tokens(this);
    this.feeds = new PriceFeeds(this);
    this.guards = new Guards(this);
    this.pairs = new Pairs(this);
    this.reserves = new Reserves(this);
  }
}

export async function test() {
  const zero = hre.ethers.constants.AddressZero;
  const ctx = new Context(hre, {
    contracts: {
      multicall: zero,
      native: zero,
      usd: zero,
      guardsFactory: zero,
      pairFactory: zero,
      priceFeedFactory: zero,
      reserveFactory: zero,
    },
  });

  const details = await ctx.tokens.useDetails('test');

  console.log(details);
}

import { JsonRpcProvider } from '@ethersproject/providers';
import {
  Core, Guards, Pairs, PriceFeeds, Reserves, Tokens
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
    public readonly provider: JsonRpcProvider,
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

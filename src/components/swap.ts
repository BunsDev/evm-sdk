import { pack, keccak256 } from "@ethersproject/solidity"
import { getCreate2Address } from 'ethers/lib/utils';
import { PancakePair__factory } from '../dependencies/protocol';
import { InferContext } from './abstract';
import { CoreRelevant } from './core';
import { Reserves } from './reserves';
import { toBN } from '../helpers/math';
import BigNumber from 'bignumber.js';

export class Swap extends CoreRelevant<
  {
  contracts: Record<typeof Swap.REQUIRED_ADDRESSES[number], string>;
  },
  {
    reserves: Reserves;
  }
> {
  public static REQUIRED_ADDRESSES = ['swapFactory', 'swapCodehash'] as const;

  constructor(context: InferContext<Swap>) {
    super(context);
  }

  async useReserves(
    tokenA: string,
    tokenB: string
  ): Promise<{ pair: string, left: BigNumber, right: BigNumber }> {
    const [left, right] = tokenA.toLowerCase() < tokenB.toLowerCase() ? [tokenA, tokenB] : [tokenB, tokenA]

    const pairAddress = getCreate2Address(
      this.params.contracts.swapFactory,
      keccak256(["bytes"], [pack(["address", "address"], [left, right])]),
      this.params.contracts.swapCodehash
    )

    const pair = this.core.useContract(PancakePair__factory, pairAddress)

    const [reserveA, reserveB] = await this.core.useCall(pair, "getReserves").catch((e) => {
      console.log(`Failed get reserve of ${left} ${right} \n \tError: ${e}`)
      return [0, 0]
    })

    return {
      pair: pairAddress,
      left: toBN(reserveA),
      right: toBN(reserveB)
    }
  }
}

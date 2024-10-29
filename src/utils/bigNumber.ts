import BigNumber from 'bignumber.js';
import { BigNumber as ethBigNumber } from '@ethersproject/bignumber';

export const BIG_ZERO = new BigNumber(0);
export const BIG_ONE = new BigNumber(1);
export const BIG_NINE = new BigNumber(9);
export const BIG_TEN = new BigNumber(10);

export const BIG_MAX_UNIT128 = ethBigNumber.from(
    '0xffffffffffffffffffffffffffffffff'
);

export const BIG_MAX_UNIT256 = ethBigNumber.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
);

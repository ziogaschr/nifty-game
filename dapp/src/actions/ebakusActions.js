import * as types from '../constants/actionTypes';

export const ebakusAccountAction = account => ({
  type: types.EBAKUS_ACCOUNT,
  account,
});

export const ebakusNetworkAction = network => ({
  type: types.EBAKUS_NETWORK,
  network,
});

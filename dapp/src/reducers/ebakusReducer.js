import initialState from './initialState';
import * as types from '../constants/actionTypes';

const fetchAccount = (state, action) => {
  return { account: action.account, network: state.network };
};

const fetchNetwork = (state, action) => {
  return { account: state.account, network: action.network };
};

export default function(state = initialState.ebakus, action) {
  switch (action.type) {
    case types.EBAKUS_ACCOUNT:
      return fetchAccount(state, action);
    case types.EBAKUS_NETWORK:
      return fetchNetwork(state, action);
    default:
      return state;
  }
}

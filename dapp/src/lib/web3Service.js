export const getProvider = networkId => {
  switch (networkId) {
    case '1':
      return 'https://mainnet.infura.io/';
    case '3':
      return 'https://ropsten.infura.io/';
    case '4':
      return 'https://rinkeby.infura.io/';
    case '42':
      return 'https://kovan.infura.io/';
    case 101:
      return 'wss://node.ebakus.com/';
    default:
      return 'http://localhost:8545/';
  }
};

export const getRPCProvider = networkId => {
  switch (networkId) {
    case 101:
      return 'https://noderpc.ebakus.com';
    default:
      return getProvider(networkId);
  }
};

export const getSimpleTokenAddress = networkId => {
  switch (networkId) {
    case '1':
      return '0x0';
    case '3':
      return '0x131855dda0aaff096f6854854c55a4debf61077a';
    case '4':
      return '0x0';
    case '42':
      return '0x0';
    default:
      return '0x0';
  }
};

export const getCryptoHerosTokenAddress = networkId => {
  switch (networkId) {
    case '1':
      return '0x0';
    case '3':
      return '0xa82Bc392bF65d03A796E1666d27594fB31De4B93';
    case '4':
      return '0x0';
    case '42':
      return '0x0';
    case 101:
      return '0x4E8A985Bf89D860fADef5C6D2E51f37799Fd66f9';
    default:
      return '0x0';
  }
};

export const getCryptoHerosGameAddress = networkId => {
  switch (networkId) {
    case '1':
      return '0x0';
    case '3':
      return '0xb4FF27d8cD1C5b1e3D4BD8A8FFEBdA9BE9517a4b';
    case '4':
      return '0x0';
    case '42':
      return '0x0';
    case 101:
      return '0x77ac86E20C6C3911Be000b190c2FC8FeE34D7abC';
    default:
      return '0x0';
  }
};

export const getCurrentAddress = web3 => {
  if (web3 === null) return;
  return web3.eth.accounts[0];
};

export const getCurrentNetwork = web3 => {
  if (web3 === null) return;
  return web3.version.network;
};

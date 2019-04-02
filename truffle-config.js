require('babel-register')({
  ignore: /node_modules\/(?!zeppelin-solidity)/,
});
require('babel-polyfill');

module.exports = {
  compilers: {
    solc: {
      version: '0.4.23',
    },
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gas: 6000000,
    },
  },
};

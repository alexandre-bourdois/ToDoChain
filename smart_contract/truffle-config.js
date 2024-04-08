const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonic = '';
const nodeEndpoint = 'http://localhost:24012/rpc';

module.exports = {
  compilers: {
    solc: {
      version: '0.8.19',
    },
  },
  networks: {
    development: {
    },
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, nodeEndpoint),
      network_id: 11155111,
      gas: 4000000
    }
  }
};

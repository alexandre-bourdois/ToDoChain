require('dotenv').config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

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
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.NODE_ENDPOINT),
      network_id: 11155111,
      gas: 4000000
    }
  }
};

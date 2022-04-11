require("@nomiclabs/hardhat-waffle");

require('dotenv').config();
const { ALCHEMY_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },

    mumbai: {
      // Infura
      url: `https://eth-ropsten.alchemyapi.io/v2/28iV0KKpjyWg2qFZu_XRg_gRS-BEAYM9`,
      // url: "https://rpc-mumbai.matic.today",
      accounts: [PRIVATE_KEY],
      chainId:3,
    },


  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};


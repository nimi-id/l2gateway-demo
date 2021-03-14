const { usePlugin } = require('@nomiclabs/buidler/config');

usePlugin("@nomiclabs/buidler-waffle");
usePlugin("@nomiclabs/buidler-ethers");

require('@eth-optimism/ovm-toolchain/build/src/buidler-plugins/buidler-ovm-compiler');
require('@eth-optimism/ovm-toolchain/build/src/buidler-plugins/buidler-ovm-node');

module.exports = {
  networks: {
    integration: {
      url: "http://localhost:8545/"
    }
  },
  namedAccounts: {
    deployer: {
      default: 0
    }
  },
  solc: {
    version: "0.6.8",
  },
};

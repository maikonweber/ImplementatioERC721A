require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
const fs = require("fs");
const path = require("path");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


const secret1 = fs.readFileSync(path.join(__dirname, ".account1"), "utf8");

const secret2 = fs.readFileSync(path.join(__dirname, ".account2"), "utf8");

const secret3 = fs.readFileSync(path.join(__dirname, ".account3"), "utf8");
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const projectId = 1
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.12",
  paths: {
    artifacts: "./artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/c056df343fe04736a91539be468b87ff`,
      accounts: [secret1, secret2, secret3]
    },
    mainnet : {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [secret1, secret2, secret3]
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

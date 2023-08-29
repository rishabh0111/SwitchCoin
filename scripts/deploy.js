const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const TokenName = "SwitchCoin";
  const TokenSymbol = "SWC";
  const InitialSupply = ethers.parseEther("1000");

  const SwitchCoin = await ethers.getContractFactory("SwitchCoin");
  const switchCoin = await SwitchCoin.deploy(TokenName, TokenSymbol, InitialSupply);

  await switchCoin.waitForDeployment();

  console.log("SwitchCoin deployed to:", switchCoin.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

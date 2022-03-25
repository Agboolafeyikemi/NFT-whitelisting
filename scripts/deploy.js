import { ethers } from "hardhat";

async function main() {
  // We get the contract to deploy
  const owner = (await ethers.getSigners())[0].address;

  const staking = await ethers.getContractFactory("BoaredApe");
  const deployStaking = await staking.deploy("BoredApe", "BRT");

  await deployStaking.deployed();
  console.log("staking address", deployStaking.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

// Open .Secret file and get the private key
async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  // Abi interation
  
  const accounts = await hre.ethers.getSigners();
  const deployer = accounts[0].address;
  const nftFactory = await hre.ethers.getContractFactory("yourNFT");
  const nft = await nftFactory.deploy(
    "NFT",
    "NFT",
    100, 
    25
    , "https://pinata.cloud/ipfs/"
    , [accounts[1].address, accounts[2].address, accounts[3].address]
  )

   console.log("Started deploying NFT contract");
    console.log("Deployer:", deployer);
    console.log(nft)
    console.log('------------------------------------------------------------------------------')
    console.log("NFT contract address:", nft.address);
    console.log("NFT contract ABI:", nft.interface.abi);
    console.log('------------------------------------------------------------------------------')
    console.log("NFT contract deployed successfully");
    console.log('------------------------------------------------------------------------------')
    console.log(await nft.seeArtictsArray())
    console.log('------------------------------------------------------------------------------')
    const mint = await nft.mint(accounts[2].address, 50)

    console.log(mint)
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------')
    console.log(await nft.isArtist(accounts[1].address))
    console.log('------------------------------------------------------------------------------')
    console.log(await nft.baseURI())
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------')
    console.log(mint)
    console.log('------------------------------------------------------------------------------')
    console.log(await nft.balanceOf(accounts[1].address), '---' , 'Quantidade de Tokens')
    console.log(await nft.balanceOf(accounts[2].address), '---' , 'Quantidade de Tokens')
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------')
    console.log(await nft.ownerOf(1))
    console.log('------------------------------------------------------------------------------')
    // Transfer 
    console.log(
      await nft.royaltyInfo(1, 10000) , '---' , 'Royalties', accounts[0].address
    )

    // Get balance of acounts 0x5FbDB2315678afecb367f032d93F642f64180aa3
    console.log(await nft.balanceOf(accounts[0].address), '---' , 'Quantidade de Tokens')
    // get balance of accounts in wallet
    console.log(await nft.balanceOf(accounts[1].address), '---' , 'Quantidade de Tokens')
    console.log(await nft.balanceOf(accounts[2].address), '---' , 'Quantidade de Tokens')
    console.log(await nft.balanceOf(accounts[3].address), '---' , 'Quantidade de Tokens')
    console.log(await nft.balanceOf(accounts[4].address), '---' , 'Quantidade de Tokens')
    console.log(await nft.balanceOf(accounts[5].address), '---' , 'Quantidade de Tokens')
    console.log(await nft.balanceOf(accounts[1].address), '---' , 'Quantidade de Tokens')
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------') 
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------')
    // Confim aproval of transfer
    const aprove = await nft.setApprovalForAll(nft.address, true)
    console.log(aprove)
    console.log('------------------------------------------------------------------------------')
    console.log(await nft.isApprovedForAll(accounts[2].address, nft.address))
    console.log('------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------')
    await nft['safeTransferFrom(address,address,uint256)'](
      accounts[2].address,
      accounts[1].address,
      1
    )
    await nft['safeTransferFrom(address,address,uint256)'](
      accounts[2].address,
      accounts[1].address,
      2
    )
    const t = await nft.balanceOf(accounts[2].address)
    const th = await nft.balanceOf(accounts[1].address)

    console.log(t)
    console.log(th)
    console.log('------------------------------------------------------------------------------')
    // Get balance in ethers of deployer
    console.log(await accounts[0].getBalance())
  }

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

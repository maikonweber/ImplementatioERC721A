var chai = require("chai");
const { ethers, waffle } = require("hardhat");
const expect = chai.expect;
const assert = chai.assert;

describe("NFT TEST ", function () {
  it("Should deploy NFT contract", async function () {
      let account =  await hre.ethers.getSigners();
      let token, nft;
  
    })
  it("Deploy Contract", async function () {
    let account =  await hre.ethers.getSigners();
    const NFT = await ethers.getContractFactory('yourNFT')
    token = await NFT.deploy(
      'NFT',
      'NFT',
      10,
      25,
      "https://pinata.cloud/ipfs/"
    , [account[1].address, account[2].address, account[3].address]
    );

    await token.deployed();
  })

  it('Mint and See Artist', async function () {
    let account =  await hre.ethers.getSigners();
    const NFT = await ethers.getContractFactory('yourNFT')
    token = await NFT.deploy(
      'NFT',
      'NFT',
      10,
      25,
      "https://pinata.cloud/ipfs/"
    , [account[1].address, account[2].address, account[3].address]
    );

    await token.deployed();
    console.log(token)
   const articst = await token.seeArtictsArray()
   console.log(articst)
  const mint = await token.mint(account[2].address, 50)

  })
  it('Transfer With Royaltics', async function ( ) {
    let account =  await hre.ethers.getSigners();
    const NFT = await ethers.getContractFactory('yourNFT')
    token = await NFT.deploy(
      'NFT',
      'NFT',
      10,
      25,
      "https://pinata.cloud/ipfs/"
    , [account[1].address, account[2].address, account[3].address]
    )

    await token.deployed()
    const test = await token.connect(account[0])
     console.log(test) 
     const mint = await token.mint(account[2].address, 50)
   
     await token['safeTransferFrom(address,address,uint256)'](
      account[2].address,
      account[1].address,
      1
   )

   await token['safeTransferFrom(address,address,uint256)'](
    account[2].address,
    account[1].address,
    3
 )
 await token['safeTransferFrom(address,address,uint256)'](
  account[2].address,
  account[1].address,
  2
)
await token['safeTransferFrom(address,address,uint256)'](
  account[2].address,
  account[1].address,
  5
)
await token['safeTransferFrom(address,address,uint256)'](
  account[2].address,
  account[1].address,
  6
)
await token['safeTransferFrom(address,address,uint256)'](
  account[2].address,
  account[1].address,
  7
)
await token['safeTransferFrom(address,address,uint256)'](
  account[2].address,
  account[1].address,
  8
)







     const amount = await token.balanceOf(account[1].address)
     console.log(amount)
    const ow = await token.owner()
    const balance1 = await token.balanceOf(ow)
    console.log(balance1)
    const provider = waffle.provider;
      const balanceETH = await provider.getBalance('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9');
      console.log(balanceETH)
    })


  })


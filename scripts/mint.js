async function main() {
    const [deployer] = await ethers.getSigners()
    console.log('Minting to account:', deployer.address)
    const Token = await ethers.getContractFactory("MyyNFT")
    const contract = require("../artifacts/contracts/NFT.sol/MyyNFT.json");
    const myyNFTContract = new ethers.Contract(
        "0x8CEEA50fde56B63142fDbafD370658753569fcc0",
        contract.abi,
        deployer
      );
    let txn = await myyNFTContract.safeMint(deployer.address,"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fc%2FMoneyyApp&psig=AOvVaw2pbd8NRdeAfF4bMUkibmJL&ust=1649668504968000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjTkJ-UifcCFQAAAAAdAAAAABAD");
    await txn.wait()
    console.log('Minted to successfull to account:', deployer.address)
    const balance = await token.balanceOf(deployer.address);
    console.log(balance.toString());

    
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })



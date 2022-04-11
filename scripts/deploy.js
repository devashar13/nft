async function main() {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying contracts with the account:', deployer.address)
  const Token = await ethers.getContractFactory("MyyNFT")
      const token = await Token.deploy()
      await token.deployed()
      console.log('Token address:', token.address)
}
console.log()

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Contract", function () {
  let Token, addr1, addr2, owner;
  let decimals = 10 ** 18;
  beforeEach(async function () {
    Token = await ethers.getContractFactory("MyyNFT");
    token = await Token.deploy();
    [owner, addr1, addr2, _] = await ethers.getSigners();
  });
  describe("deployment", function () {

    it("mint the nft", async () => {
      await token.safeMint(owner.address,"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fc%2FMoneyyApp&psig=AOvVaw2pbd8NRdeAfF4bMUkibmJL&ust=1649668504968000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjTkJ-UifcCFQAAAAAdAAAAABAD");

      const balance = await token.balanceOf(owner.address);
      console.log(balance.toString());
    });
    // get uri of the nft
    it("get uri of the nft", async () => {
      await token.safeMint(owner.address,"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fc%2FMoneyyApp&psig=AOvVaw2pbd8NRdeAfF4bMUkibmJL&ust=1649668504968000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjTkJ-UifcCFQAAAAAdAAAAABAD");
      const uri = await token.tokenURI(0);
      console.log(uri);
    }
    );
    
  });

});

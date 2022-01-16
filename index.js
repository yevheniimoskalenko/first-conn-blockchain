const Web3 = require("web3");

const url = "https://mainnet.infura.io/v3/8bb5b9a07de64d298e6485ef7df5b4b0";

// const address = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e";
// const web3 = new Web3(url);

// const getBalance = web3.eth.getBalance(address);

// getBalance.then((balance) => {
//   // convert to wei
//   return console.log(web3.utils.fromWei(balance, "ether"));
// });

// create account

// console.log(web3.eth.accounts.create());

const web3 = new Web3("http://127.0.0.1:8545");

web3.eth
  .getBalance("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266")
  .then((r) => console.log(web3.utils.fromWei(r, "ether")));

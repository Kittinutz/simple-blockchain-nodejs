const BlockChain = require('./Class/BlockChain').BlockChain

const CILCoin = new BlockChain();

const sender = process.env.SENDER || 'kittinut'
const reciver = process.env.RECEIVER || 'Alice'
const amout = process.env.AMOUNT || 100

CILCoin.addBlock({ sender: "Bruce wayne", reciver: "Tony stark", amount: 100 });

CILCoin.addBlock({ sender: "Harrison wells", reciver: "Han solo", amount: 50 });

CILCoin.addBlock({ sender: "Tony stark", reciver: "Ned stark", amount: 75 });
CILCoin.addBlock({ sender: "Tony stark", reciver: "Ned stark", amount: 75 });
CILCoin.addBlock({ sender: sender, reciver: reciver, amount: amout });


console.log(JSON.stringify(CILCoin, null, 4));

console.log("Validity: ", CILCoin.chainIsValid());
CILCoin.chain[0].data.reciver = "Joker";
console.log('change data index 0 receiver Tony stark to joker')
console.log("Validity: ", CILCoin.chainIsValid());
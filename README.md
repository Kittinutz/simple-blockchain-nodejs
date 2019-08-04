# Basic BlockChain

## Introduction to block chain 101

### BlockChain.js
```
const Block = require('./Block').Block

class BlockChain {
  constructor() {
    this.chain = [];
  }
  addBlock(data) {
    let index = this.chain.length;

    let prevHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].hash : 0;

    let block = new Block(index, data, prevHash);

    this.chain.push(block);
  }
  chainIsValid() {
    for (var i = 0; i < this.chain.length; i++) {
      if (this.chain[i].hash !== this.chain[i].getHash())
        return false;
      if (i > 0 && this.chain[i].prevHash !== this.chain[i - 1].hash)
        return false;
    }
    return true;
  }
}
exports.BlockChain = BlockChain
```
#### BlockChain will include addBlock for create `transection` and `chainIsValid` will check the `BlockChain` it will `correct` 
#### BlockChain Will contain the block include `data`, `preveHash` and `index of data`


```
var sha = require('sha256')

class Block {
  constructor(index, data, prevHash) {

    this.index = index;

    this.timestamp = Math.floor(Date.now() / 1000);

    this.data = data;

    this.prevHash = prevHash;

    this.hash = this.getHash();
  }
  getHash() {
    return sha(JSON.stringify(this.data) + this.prevHash + this.index + this.timestamp);
  }

}
exports.Block = Block
```

# chainIsValid
## it will checking data for each block check about self hash value and check prevHash on with hash value on previouse array

```
yarn 
or
npm install
SENDER=John RECEIVER=Alice AMOUNT=1000 node index.js
```

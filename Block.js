class Block {
    constructor(data, previousHash) {
        this.data = data;
        this.hash = "";
        this.previoushash = previousHash;
        this.timestamp = new Date();
        this.pow = 0;
    }
}


const Jump = require('./Jump');

class Move {
    constructor(toIndex) {
        this.jumpSequence = [];

        if (toIndex)
            this.jumpSequence.push(new Jump(toIndex));
    }

    addJump(jump) {
        this.jumpSequence.push(jump);
        return this;
    }

    hasMultipleJumps() {
        return this.jumpSequence.length > 1;
    }
};

module.exports = Move;
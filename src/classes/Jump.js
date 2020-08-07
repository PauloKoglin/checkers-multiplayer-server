class Jump {
    constructor(toIndex, captureIndex) {
        this.toIndex = toIndex;
        this.captureIndex = captureIndex;
    }

    isCaptureJump() {
        return this.captureIndex;
    }
}

module.exports = Jump;
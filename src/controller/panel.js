class Panel {
    constructor(power, length, width) {
        this.power = power;
        this.length = length;
        this.width = width;
    }

    getPower() {
        return this.power
    }

    getLength() {
        return this.length
    }

    getWidth() {
        return this.width
    }
};

export default Panel;
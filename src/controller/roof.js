class Roof {
    constructor(panelLength, panelWidth) {
        this.panelLength = panelLength;
        this.panelWidth = panelWidth;
    }

    calculateRoofLength(numPanels) {
        return numPanels * this.panelLength
    }

    calculateRoofArea(numPanels) {
        return numPanels * this.panelLength * this.panelWidth
    }
}

export default Roof;
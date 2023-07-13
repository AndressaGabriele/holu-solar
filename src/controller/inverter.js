class Inverter {
    constructor(panelsPerInverter) {
        this.panelsPerInverter = panelsPerInverter;
    }
    
    calculateInverterPerPanels(numPanels) {
        return numPanels / this.panelsPerInverter;
    }
};

export default Inverter;
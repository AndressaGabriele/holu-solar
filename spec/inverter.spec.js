import Inverter from "../src/controller/inverter"

describe("Test inverter class", () => {
    const inverterTest = new Inverter(2)

    it("Test calculate inverter per panels", () => {
        expect(inverterTest.calculateInverterPerPanels(2)).toBe(1)
    })
})
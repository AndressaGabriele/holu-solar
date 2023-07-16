import Roof from "../src/controller/roof";

describe("Test roof class", () => {
    const roofTest = new Roof(2, 3)
    console.log(roofTest)

    it("Test calculate roof Length", () => {
        expect(roofTest.calculateRoofLength(2)).toBe(4)
    })

    it("Test calculate roof Area", () => {
        expect(roofTest.calculateRoofArea(2)).toBe(12)
    })
} )
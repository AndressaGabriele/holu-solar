import Panel from "../src/controller/panel";

describe("Test panel class", () => {
    const panelTest = new Panel (550, 1.95, 1.1)

    it("Test getPower", () => {
        expect(panelTest.getPower()).toBe(550)
    })

    it("test getLength", () => {
        expect(panelTest.getLength()).toBe(1.95)
    })

    it("test getWidth", () => {
        expect(panelTest.getWidth()).toBe(1.1)
    })
})
import {expect} from "chai";

describe("truth", () => {
    it("true should be true", () => {
        expect(true).to.be.true;
    });

    it("false should equal false", () => {
        expect(false).to.be.false;
    });
});
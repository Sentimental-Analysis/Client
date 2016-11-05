import {expect} from "chai";
import * as enzyme from "enzyme";
import * as React from "react";
import {App} from "./app";

describe("<App />", () => {
    it("should contain h1 tag", () => {
        const wrapper = enzyme.shallow(<App></App>);
        expect(wrapper.contains(<h1>Hello World</h1>)).to.be.true;
    });
});
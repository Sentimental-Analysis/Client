import {expect} from "chai";
import * as enzyme from "enzyme";
import * as React from "react";
import {Trend} from "./trend";

describe("<Trend />", () => {
    it("should contain increasing trend", () => {
        const wrapper = enzyme.shallow(<Trend kind="Increasing" ></Trend>);
        expect(wrapper.contains(<h2>Increasing</h2>)).to.be.true;
    });

    it("should contain increasing trend", () => {
        const wrapper = enzyme.shallow(<Trend kind="Stable" ></Trend>);
        expect(wrapper.contains(<h2>Stable</h2>)).to.be.true;
    });

    it("should contain decreasing trend", () => {
        const wrapper = enzyme.shallow(<Trend kind="Decreasing" ></Trend>);
        expect(wrapper.contains(<h2>Decreasing</h2>)).to.be.true;
    });
});
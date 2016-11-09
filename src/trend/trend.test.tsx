import {expect} from "chai";
import * as enzyme from "enzyme";
import * as React from "react";
import {Trend} from "./trend";

describe("<Trend />", () => {
    it("should contain increasing trend", () => {
        const wrapper = enzyme.shallow(<Trend data={[{sentiment: 1} as any, {sentiment: 2} as any, {sentiment: 3} as any]}></Trend>);
        expect(wrapper.contains(<p>Increasing</p>)).to.be.true;
    });

    it("should contain increasing trend", () => {
        const wrapper = enzyme.shallow(<Trend data={[{sentiment: 1} as any, {sentiment: 1} as any, {sentiment: 1} as any]}></Trend>);
        expect(wrapper.contains(<p>Stable</p>)).to.be.true;
    });

    it("should contain decreasing trend", () => {
        const wrapper = enzyme.shallow(<Trend data={[{sentiment: 3} as any, {sentiment: 2} as any, {sentiment: 1} as any]}></Trend>);
        expect(wrapper.contains(<p>Decreasing</p>)).to.be.true;
    });
});
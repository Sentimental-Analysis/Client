import {expect} from "chai";
import * as enzyme from "enzyme";
import * as React from "react";
import {Details} from "./details";

describe("<Details />", () => {
    it("should be not empty", () => {
        const wrapper = enzyme.shallow(<Details trend={{kind: "Stable"}} value={0} ></Details>);
        expect(wrapper.isEmpty()).to.be.false;
    });
});

import {expect} from "chai";
import * as enzyme from "enzyme";
import * as React from "react";
import {SubmitButton} from "./submitButton";

describe("<SubmitButton />", () => {
    it("should contain h1 tag", () => {
        const wrapper = enzyme.shallow(<SubmitButton value="Szukaj" isDisabled={true} ></SubmitButton>);
        expect(wrapper.find("input")).to.be.not.empty;
    });
});

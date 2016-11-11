import {expect} from "chai";
import * as enzyme from "enzyme";
import * as React from "react";
import {Emotion} from "./emotion";

describe("<Emotion />", () => {
    it("should contain h1 tag with NEUTRALNY message", () => {
        const wrapper = enzyme.shallow(<Emotion value={0.0}></Emotion>);
        expect(wrapper.contains(<h1>NEUTRALNY</h1>)).to.be.true;
    });
});

describe("<Emotion />", () => {
    it("should contain h1 tag with POZYTYWNY message", () => {
        const wrapper = enzyme.shallow(<Emotion value={1.0}></Emotion>);
        expect(wrapper.contains(<h1>POZYTYWNY</h1>)).to.be.true;
    });
});

describe("<Emotion />", () => {
    it("should contain h1 tag with NEGATYWNY message", () => {
        const wrapper = enzyme.shallow(<Emotion value={-1.0}></Emotion>);
        expect(wrapper.contains(<h1>NEGATYWNY</h1>)).to.be.true;
    });
});

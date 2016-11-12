import {expect} from "chai";
import * as enzyme from "enzyme";
import * as React from "react";
import {Emotion} from "./emotion";

describe("<Emotion />", () => {
    it("should contain h1 tag with NEUTRALNE message", () => {
        const wrapper = enzyme.shallow(<Emotion value={0.0}></Emotion>);
        expect(wrapper.contains(<h2>NEUTRALNE</h2>)).to.be.true;
    });
});

describe("<Emotion />", () => {
    it("should contain h1 tag with POZYTYWNE message", () => {
        const wrapper = enzyme.shallow(<Emotion value={1.0}></Emotion>);
        expect(wrapper.contains(<h2>POZYTYWNY</h2>)).to.be.true;
    });
});

describe("<Emotion />", () => {
    it("should contain h1 tag with NEGATYWNE message", () => {
        const wrapper = enzyme.shallow(<Emotion value={-1.0}></Emotion>);
        expect(wrapper.contains(<h1>NEGATYWNE</h1>)).to.be.true;
    });
});

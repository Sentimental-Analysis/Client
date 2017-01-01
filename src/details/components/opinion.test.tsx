import { expect } from "chai";
import * as enzyme from "enzyme";
import * as React from "react";
import Opinion from "./opinion";

describe("<Opinion>", () => {
  describe("Nagative", () => {
    it("Sholud be rendered", () => {
      const wreaper = enzyme.shallow(<Opinion negativeOpinionQuantity={2} positiveOpinionQuantity={1} sentiment="Negatywny"/>);
      expect(wreaper.find("#sentiment-result").text()).eq("Negatywny");
    });
  });
  describe("Neutral", () => {
    it("Sholud be rendered", () => {
      const wreaper = enzyme.shallow(<Opinion negativeOpinionQuantity={1} positiveOpinionQuantity={1} sentiment="Neutralny"/>);
      expect(wreaper.find("#sentiment-result").text()).eq("Neutralny");
    });
  });
  describe("Positive", () => {
    it("Sholud be rendered", () => {
      const wreaper = enzyme.shallow(<Opinion negativeOpinionQuantity={1} positiveOpinionQuantity={2} sentiment="Pozytywny"/>);
      expect(wreaper.find("#sentiment-result").text()).eq("Pozytywny");
    });
  });
});

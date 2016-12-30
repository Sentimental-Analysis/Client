import { expect } from "chai";
import * as enzyme from "enzyme";
import * as React from "react";
import Key from "./key";

describe("<Key>", () => {
    it("should be ok", () => {
        const wraper = enzyme.shallow(<Key query="dotnet" />);
        expect(wraper.find("#key-dotnet").text()).eq("Klucz: DOTNET");
    });
});

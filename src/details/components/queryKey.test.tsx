import { expect } from "chai";
import * as enzyme from "enzyme";
import * as React from "react";
import QueryKey from "./queryKey";

describe("<QueryKey>", () => {
    it("should be ok", () => {
        const wraper = enzyme.shallow(<QueryKey query="dotnet" />);
        expect(wraper.find("#key-dotnet").text()).eq("Klucz: DOTNET");
    });
});

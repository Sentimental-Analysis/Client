import { KeyWord } from '../../global/model';
import { expect } from "chai";
import * as enzyme from "enzyme";
import * as React from "react";
import { KeyWordList } from "./keywordList";
describe("<KeyWordList>", () => {
    describe("keywords property has elements", () => {
        it("should have one element in list", () => {
            const keyWords: KeyWord[] = [{ key: "test", quantity: 1 }];
            const wreaper = enzyme.shallow(<KeyWordList keywords={keyWords}></KeyWordList>)
            expect(wreaper.find(".list-group li").length).eq(1);
        });

        it("should have two element in list", () => {
            const keyWords: KeyWord[] = [{ key: "test", quantity: 1 }, { key: "test1", quantity: 2 }];
            const wreaper = enzyme.shallow(<KeyWordList keywords={keyWords}></KeyWordList>)
            expect(wreaper.find(".list-group li").length).eq(2);
        });
    });
});
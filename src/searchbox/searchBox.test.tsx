import { INITIAL_SCORE } from "../global/constants";
import { searchBoxReducer } from "./searchBoxReducer";
import { Action } from "../global/actionTypes";
import { Score } from "../global/model";
import { expect } from "chai";

describe("searchBox reducer", () => {
    describe("action payload not equal SEARCH_FULFILLED", () => {
        it("should equal default state", () => {
            const state: Score = INITIAL_SCORE;
            const action: Action = { type: "SEARCH", payload: null };
            expect(searchBoxReducer(state, action)).to.deep.equal(INITIAL_SCORE);
        });
        it("should equal default state", () => {
            const state: Score = INITIAL_SCORE;
            const action: Action = { type: "SEARCH_PENDING" };
            expect(searchBoxReducer(state, action)).to.deep.equal(INITIAL_SCORE);
        });
        it("should equal default state", () => {
            const state: Score = INITIAL_SCORE;
            const action: Action = { type: "SEARCH_REJECTED" };
            expect(searchBoxReducer(state, action)).to.deep.equal(INITIAL_SCORE);
        });
    });

    describe("action payload equal SEARCH_FULFILLED", () => {
        describe("isSuccess equal false", () => {
            it("should equal default state", () => {
                const state: Score = INITIAL_SCORE;
                const action: Action = { type: "SEARCH_FULFILLED", payload: { data: { isSuccess: false, value: null } } as any };
                expect(searchBoxReducer(state, action)).to.deep.equal(INITIAL_SCORE);
            });
        });
        describe("isSuccess equal true", () => {
            it("should equal new state", () => {
                const state: Score = INITIAL_SCORE;
                const action: Action = { type: "SEARCH_FULFILLED", payload: { data: { isSuccess: true, value: [{ sentiment: 2 } as any] } } as any };
                const testResult = searchBoxReducer(state, action);
                expect(state).not.deep.equal(testResult);
                expect(testResult).to.deep.equal([{ sentiment: 2 } as any]);
            });
        });
    });
});

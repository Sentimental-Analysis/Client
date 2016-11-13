import { ITrend } from '../global/model';
import { scoreReducer, trendReducer } from './scoreReducers';
import { Action } from '../global/actionTypes';
import { expect } from 'chai';

describe("reducers", () => {
    describe("scoreReducer", () => {
        describe("action type any", () => {
            it("should return default score", () => {
                const state = 0;
                const action: Action = { type: "SEARCH", payload: null };
                expect(scoreReducer(state, action)).to.eq(0);
            });

            it("should return default score", () => {
                const state = 0;
                const action: Action = { type: "SEARCH_REJECTED" };
                expect(scoreReducer(state, action)).to.eq(0);
            });

            it("should return default score", () => {
                const state = 0;
                const action: Action = { type: "SEARCH_PENDING" };
                expect(scoreReducer(state, action)).to.eq(0);
            });
        });

        describe("action type SEARCH_FULFILLED", () => {
            it("isSuccess is true should return 1.0", () => {
                const state = 0;
                const action: Action = { type: "SEARCH_FULFILLED", payload: { data: { isSuccess: true, value: [{ sentiment: 2 } as any] } } as any };
                expect(scoreReducer(state, action)).to.eq(2);
            });

            it("isSuccess is false should return 0.0", () => {
                const state = 0;
                const action: Action = { type: "SEARCH_FULFILLED", payload: { data: { isSuccess: false, value: [{ sentiment: 2 } as any] } } as any };
                expect(scoreReducer(state, action)).to.eq(0);
            });
        });
    });

    describe("trend Reducer", () => {
        describe("action type any", () => {
            it("should return default trend", () => {
                const state: ITrend = { kind: "Stable" };
                const action: Action = { type: "SEARCH", payload: null };
                expect(trendReducer(state, action)).to.deep.equal({ kind: "Stable" });
            });

            it("should return default trend", () => {
                const state: ITrend = { kind: "Stable" };
                const action: Action = { type: "SEARCH_REJECTED" };
                expect(trendReducer(state, action)).to.deep.equal({ kind: "Stable" });
            });

            it("should return default trend", () => {
                const state: ITrend = { kind: "Stable" };
                const action: Action = { type: "SEARCH_PENDING" };
                expect(trendReducer(state, action)).to.deep.equal({ kind: "Stable" });
            });
        });

        describe("action type SEARCH_FULFILLED", () => {
            it("isSuccess is true should return Increasing", () => {
                const state: ITrend = { kind: "Stable" };
                const action: Action = { type: "SEARCH_FULFILLED", payload: { data: { isSuccess: true, value: [{ sentiment: 1 } as any, { sentiment: 2 } as any, { sentiment: 3 } as any] } } as any };
                expect(trendReducer(state, action)).to.deep.equal({ kind: "Increasing" });
            });

            it("isSuccess is true should return Decreasing", () => {
                const state: ITrend = { kind: "Stable" };
                const action: Action = { type: "SEARCH_FULFILLED", payload: { data: { isSuccess: true, value: [{ sentiment: 3 } as any, { sentiment: 2 } as any, { sentiment: 1 } as any] } } as any };
                expect(trendReducer(state, action)).to.deep.equal({ kind: "Decreasing" });
            });

            it("isSuccess is true should return Stable", () => {
                const state: ITrend = { kind: "Stable" };
                const action: Action = { type: "SEARCH_FULFILLED", payload: { data: { isSuccess: true, value: [{ sentiment: 2 } as any, { sentiment: 2 } as any, { sentiment: 2 } as any] } } as any };
                expect(trendReducer(state, action)).to.deep.equal({ kind: "Stable" });
            });

            it("isSuccess is false should return Stable", () => {
                const state: ITrend = { kind: "Stable" }
                const action: Action = { type: "SEARCH_FULFILLED", payload: { data: { isSuccess: false, value: null} } as any };
                expect(trendReducer(state, action)).to.deep.equal({ kind: "Stable" });
            });
        });
    });
});
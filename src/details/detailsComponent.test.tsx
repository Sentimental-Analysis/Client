import { expect } from "chai";
import * as enzyme from "enzyme";
import * as React from "react";
import {Action} from "../global/actionTypes";
import { Sentiment, Trend } from '../global/model';
import {sentimentReducer, trendReducer} from "./detailReducers";

describe("<Details>", () => {
    describe("detailsReducers", () => {
        describe("sentimentReducer", () => {
            it("action is fulfilled", () => {
                const action: Action = {type: "SEARCH_FULFILLED", payload: { status: 200, data: { isSuccess: true, value: { sentiment: Sentiment.Positive} } } as any };
                const result = sentimentReducer("Neutralny", action);
                expect(result).eq("Pozytywny");
            });
        });
        describe("trendReducer", () => {
            it("action is fulfilled", () => {
                const action: Action = {type: "SEARCH_FULFILLED", payload: { status: 200, data: { isSuccess: true, value: { trend: Trend.Increasing} } } as any };
                const result =  trendReducer("Stabilny", action);
                expect(result).eq("Rosnący");
            });
        });
    });
});

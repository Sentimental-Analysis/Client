import { expect } from "chai";
import * as Sentiment from "./sentiment";

describe("sentiment rating tests", () => {
    it("trend should be equal 2", () => {
        const sentiment = Sentiment.rateSentiment([{ sentiment: 2 } as any, { sentiment: 2 } as any]);
        expect(sentiment).to.eq(2);
    });

    it("trend should be equal 1", () => {
        const sentiment = Sentiment.rateSentiment([{ sentiment: 2 } as any, { sentiment: 0 } as any]);
        expect(sentiment).to.eq(1);
    });

    it("trend should be equal 0", () => {
        const sentiment = Sentiment.rateSentiment([{ sentiment: 0 } as any, { sentiment: 0 } as any]);
        expect(sentiment).to.eq(0);
    });

    it("trend should be equal 0", () => {
        const sentiment = Sentiment.rateSentiment([]);
        expect(sentiment).to.eq(0);
    });
});
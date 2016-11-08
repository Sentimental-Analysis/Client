import {expect} from "chai";
import * as Math from "./math";

describe("truth", () => {
    it("trend should be stable", () => {
        const trend = Math.rateTrend([{ sentiment: 2} as any, { sentiment: 2 } as any]);
        expect(trend.kind).to.eq("Stable");
    });

    it("trend should be increasing", () => {
        const trend = Math.rateTrend([{ sentiment: 1 } as any, { sentiment: 2 } as any, { sentiment: 3 } as any, { sentiment: 4 } as any]);
        expect(trend.kind).to.eq("Increasing");
    });

    it("trend should be decreasing", () => {
        const trend = Math.rateTrend([{ sentiment: 4 } as any, { sentiment: 3 } as any, { sentiment: 2 } as any, { sentiment: 1 } as any]);
        expect(trend.kind).to.eq("Decreasing");
    });
});
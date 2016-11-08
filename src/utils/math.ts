import {Tweet} from "../global/model";
import * as Ramda from "ramda";

export interface ITrend {
    kind: "Decreasing" | "Increasing" | "Stable";
}

function arrayGenerator(from: number, to: number) {
    const emptyArray:number[] = [];
    for (var index = from; index <= to; index++) {
        emptyArray.push(index);
    }
    return emptyArray;
}

function arrayArithmeticAverage(arr: any[]) {
    const length = arr.length;
    const sum = arr.reduce((acc, x) => {
        return acc + x;
    }, 0);
    return sum / length;
}

function getAParameter(tweets: Tweet[]) {
    const t = arrayGenerator(0, tweets.length);
    const y = tweets.map((tweet: Tweet) => tweet.sentiment);
    const averageT = arrayArithmeticAverage(t);
    const averageY = arrayArithmeticAverage(y);
    const tmta = t.map(x => x - averageT);
    const ymya = y.map(x => x - averageY);
    const numerator = Ramda.zipWith((x: number, y: number) => [x, y])(tmta, ymya).map(([x, y]: number[]) => x * y).reduce((acc, x) => acc + x, 0);
    const denominator = tmta.map(x => x ** 2).reduce((acc, x) => acc + x, 0);
    return numerator / denominator;
}

export function rateTrend(tweets: Tweet[]): ITrend {
    if(tweets.length > 0){
        const trend = getAParameter(tweets);
        if(trend === 0) {
            return { kind: "Stable" };
        } else if(trend > 0) {
            return { kind: "Increasing" };
        } else {
            return { kind: "Decreasing" };
        }
    } else {
        return {kind: "Stable"};
    }

}


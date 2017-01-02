import { Action } from "../global/actionTypes";
import { Sentiment, SentimentWord, Trend, TrendWord } from "../global/model";

export function sentimentReducer(state: SentimentWord = "Neutralny", action: Action): SentimentWord {
    if (action.type === "SEARCH_FULFILLED") {
        if (action.payload.status === 200 && action.payload.data.isSuccess) {
            const sentiment = action.payload.data.value.sentiment;
            switch (sentiment) {
                case Sentiment.Neutral:
                    return "Neutralny";
                case Sentiment.Negative:
                    return "Negatywny";
                case Sentiment.Positive:
                    return "Pozytywny";
                default:
                    return "Neutralny";
            }
        }
    }
    return state;
}


export function trendReducer(state: TrendWord = "Stabilny", action: Action): TrendWord {
    if (action.type === "SEARCH_FULFILLED") {
        if (action.payload.status === 200 && action.payload.data.isSuccess) {
            const trend = action.payload.data.value.trend;
            switch (trend) {
                case Trend.Stable:
                    return "Stabilny";
                case Trend.Increasing:
                    return "Rosnący";
                case Trend.Decreasing:
                    return "Malejący";
                default:
                    return "Stabilny";
            }
        }
    }
    return state;
}
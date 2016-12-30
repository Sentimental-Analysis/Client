import {Action} from "../global/actionTypes";
import {SentimentWord, Sentiment} from "../global/model";

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

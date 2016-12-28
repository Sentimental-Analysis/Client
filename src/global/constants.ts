import { Score, Sentiment } from './model';

export const ENTER_KEY = 13;
export const ESCAPE_KEY = 27;

export const INITIAL_SCORE: Score = {
    key: "",
    keyWords: [],
    localizations: [],
    negativeTweetsQuantity: 0,
    positiveTweetsQuantity: 0,
    sentiment: Sentiment.Neutral,
};
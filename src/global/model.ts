import * as axios from "Axios";

export type Nullable<T> = T | null;
export type SentimentWord = "Neutralny" | "Pozytywny" | "Negatywny";

export interface Response<T> {
    readonly data: T;
    readonly status: number;
    readonly statusText: string;
    readonly headers: any;
    readonly config: axios.AxiosRequestConfig;
}

export interface Result<T> {
    readonly value: Nullable<T>;
    readonly isSuccess: boolean;
    readonly messages: Nullable<string[]>;
}
export const enum Sentiment {
    Negative,
    Neutral,
    Positive,
}

export interface Localization {
    readonly latitude: number;
    readonly longitude: number;
}

export interface KeyWord {
    readonly key: string;
    readonly quantity: number;
}

export interface Score {
    readonly keyWords: KeyWord[];
    readonly negativeTweetsQuantity: number;
    readonly positiveTweetsQuantity: number;
    readonly sentiment: Sentiment;
    readonly localizations: Localization[];
    readonly key: string;
}

export interface AppState {
    readonly sentiment: SentimentWord;
    readonly score: Score;
    readonly isSearching: boolean;
    readonly error: string;
}

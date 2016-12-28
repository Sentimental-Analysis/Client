import * as axios from 'Axios';

export type Nullable<T> = T | null;

export interface Response<T> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: axios.AxiosRequestConfig;
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
    score: Score;
    isSearching: boolean;
    error: string;
}

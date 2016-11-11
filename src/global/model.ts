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

export interface Tweet {
    readonly id: number;
    readonly tweetIdentifier: string;
    readonly text: string;
    readonly key: string;
    readonly date: Date;
    readonly lang: string;
    readonly longitude: number;
    readonly latitude: number;
    readonly sentiment: number;
}

export interface Tweets {
    readonly data: Tweet[];
}

export interface ITrend {
    kind: "Decreasing" | "Increasing" | "Stable";
}

export interface AppState {
    tweets: Tweet[];
    isSearching: boolean;
    error: string;
    sentiment: number;
    trend: ITrend;
}


export interface Result<T> {
    readonly value: T | null;
    readonly isSuccess: boolean;
    readonly messages: string[] | null;
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

export interface Action<T> {
    readonly type: string;
    readonly payload: T;
    error?: boolean;
    meta?: any;
}

export interface AppState {
    tweets: Tweet[];
}

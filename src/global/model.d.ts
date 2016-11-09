
export interface Result<T> {
    readonly value: T | null;
    readonly isSuccess: boolean;
    readonly messages: string[] | null;
}

export interface Tweet {
    id: number;
    tweetIdentifier: string;
    text: string;
    key: string;
    date: Date;
    lang: string;
    longitude: number;
    latitude: number;
    sentiment: number;
}

export interface Tweets {
    data: Tweet[];
}

export interface AppState {
    tweets: Tweets;
}
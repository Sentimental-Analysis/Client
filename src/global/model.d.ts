
export interface Result<T> {
    readonly value: T;
    readonly isSuccess: boolean;
    readonly messages: string[] | null;
}

export interface Tweet {
    idStr: string;
    text: string;
    key: string;
    date: Date;
    lang: string;
    longitude: number;
    latitude: number;
    sentiment: number;
}

export interface AppState {
}
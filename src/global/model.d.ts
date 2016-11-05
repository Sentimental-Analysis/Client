
export interface Result<T> {
    readonly value: T;
    readonly isSuccess: boolean;
    readonly messages: string[] | null;
}

export interface AppState {
}
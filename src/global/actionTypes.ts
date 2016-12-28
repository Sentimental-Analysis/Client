import { Response, Result, Score } from './model';

export type Action = { type: "SEARCH", payload: any } | { type: "SEARCH_PENDING" } | { type: "SEARCH_REJECTED", payload?: any } | {type: "SEARCH_FULFILLED", payload: Response<Result<Score>>}
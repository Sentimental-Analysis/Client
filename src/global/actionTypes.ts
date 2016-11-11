import {Response, Result, Tweet} from "./model";

export type Action = { type: "SEARCH", payload: any } | { type: "SEARCH_PENDING" } | { type: "SEARCH_REJECTED", payload?: any } | {type: "SEARCH_FULFILLED", payload: Response<Result<Tweet[]>>}
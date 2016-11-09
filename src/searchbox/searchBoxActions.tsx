import * as axios from "axios";
import { Result, Tweet, Action } from "../global/model";
import { BASE_URL, GET_TWEETS_BY_KEY } from "../global/urls";
import { SEARCH } from "../global/actionTypes";

export function searchTweetByKey(key: string) : Action<any> {
    return {
        type: SEARCH,
        payload: axios.get(`${BASE_URL}${GET_TWEETS_BY_KEY(key)}`)
    };
};
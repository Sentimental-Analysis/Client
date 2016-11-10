import * as axios from "axios";
import { BASE_URL, GET_TWEETS_BY_KEY } from "../global/urls";
import {Action} from "../global/actionTypes";

export function searchTweetByKey(key: string) : Action {
    return {
        type: "SEARCH",
        payload: axios.get(`${BASE_URL}${GET_TWEETS_BY_KEY(key)}`)
    };
}
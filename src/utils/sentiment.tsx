import { Tweet } from '../global/model';

export function rateSentiment(tweets: Tweet[] = []) {
    const tweetsLength = tweets!.length;
    if(tweetsLength === 0){
        return 0;
    } else {
        const sum = tweets.reduce((acc, x) => acc + x.sentiment, 0);
        return sum / tweetsLength;
    }
}
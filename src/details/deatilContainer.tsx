import { KeyWordList } from "./components/keywordList";
import * as React from "react";
import { Score, SentimentWord, TrendWord } from "../global/model";
import Opinion from "./components/opinion";
import "./details.scss";
import QueryKey from "./components/queryKey";

interface IDetailsProps {
  score: Score;
  sentiment: SentimentWord;
  trend: TrendWord;
}

class Details extends React.Component<IDetailsProps, any> {
  public render() {
    return (<div className="details">
      <div>
        <QueryKey query={this.props.score.key} />
      </div>
      <div>
        <Opinion negativeOpinionQuantity={this.props.score.negativeTweetsQuantity} positiveOpinionQuantity={this.props.score.positiveTweetsQuantity} sentiment={this.props.sentiment} trend={this.props.trend} />
        <KeyWordList keywords={this.props.score.keyWords}/>
      </div>
    </div>);
  };
}

export default Details;

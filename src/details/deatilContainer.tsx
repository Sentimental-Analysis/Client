import { KeyWordList } from "./components/keywordList";
import * as React from "react";
import {Score, SentimentWord} from "../global/model";
import Opinion from "./components/opinion";
import "./details.scss";

interface IDetailsProps {
  score: Score;
  sentiment: SentimentWord;
}

class Details extends React.Component<IDetailsProps, any> {
  public render() {
    return (<div className="details">
      <div>
        <h1 className="text">{this.props.score.key.toUpperCase()}</h1>
      </div>
      <div>
        <Opinion negativeOpinionQuantity={this.props.score.negativeTweetsQuantity} positiveOpinionQuantity={this.props.score.positiveTweetsQuantity} sentiment={this.props.sentiment}/>
        <KeyWordList keywords={this.props.score.keyWords}/>
      </div>
    </div>);
  };
}

export default Details;

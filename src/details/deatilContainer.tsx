import { KeyWordList } from "./components/keywordList";
import * as React from "react";
import { Score } from "../global/model";
import Opinion from "./components/opinion";
interface IDetailsProps {
  score: Score;
}

class Details extends React.Component<IDetailsProps, any> {
  public render() {
    return (<div class="details">
      <h1 className="text">{this.props.score.key}</h1>
      <div>
        <Opinion negativeOpinionQuantity={this.props.score.negativeTweetsQuantity} positiveOpinionQuantity={this.props.score.positiveTweetsQuantity} sentiment={this.props.score.sentiment}></Opinion>
        <KeyWordList keywords={this.props.score.keyWords}></KeyWordList>
      </div>
    </div>);
  };
}

export default Details;

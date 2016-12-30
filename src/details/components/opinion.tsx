import {SentimentWord} from "../../global/model";
import * as React from "react";

interface IOpinionProps {
  negativeOpinionQuantity: number;
  positiveOpinionQuantity: number;
  sentiment: SentimentWord;
}

interface IOpinionState {
}

class Opinion extends React.Component<IOpinionProps, IOpinionState> {
  public render(): JSX.Element {
    return (<div className="score">
        <div className="row text">
          <div className="col-md-4 well nopadding scoreBox">
            <h1>Ilość pozytywnych opini</h1>
            <h1 id="positive-quantity">{this.props.positiveOpinionQuantity}</h1>
          </div>
          <div className="col-md-4 well nopadding scoreBox">
            <h1 id="sentiment-result">{this.props.sentiment}</h1>
          </div>
          <div className="col-md-4 well nopadding scoreBox">
            <h1>Ilość negatywnych opini</h1>
            <h1 id="negative-quantity" >{this.props.negativeOpinionQuantity}</h1>
          </div>
        </div>
      </div>);
  }
}

export default Opinion;

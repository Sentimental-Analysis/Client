import { link } from "fs";
import { render } from "enzyme";
import { KeyWord } from "../../global/model";
import * as React from "react";
import { List } from "immutable";

export interface KeyWordListProps {
  keywords: KeyWord[];
}

export class KeyWordList extends React.Component<KeyWordListProps, any> {
  public render() {
        const tmp = List.of(...this.props.keywords).take(10);
        return <ul className="list-group" >
            {tmp.map(keyword => {
                return <li key={`${keyword.key}-${keyword.quantity}`} className="list-group-item" >
                    {keyword.key}
                    <span className="badge" >{keyword.quantity}</span>
                </li>
            }).toArray()}
        </ul>
    }
}
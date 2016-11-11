import { Action } from '../global/actionTypes';
import * as React from "react";

export interface ISearchBoxProps {
    Search: (value: string) => Action;
}

export class SearchBox extends React.Component<ISearchBoxProps, any> {
    public render() {
        return <div className="searchBox" ><h1>Elo</h1></div>;
    }
}
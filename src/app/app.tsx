import * as React from "react";
import { connect } from "react-redux";

interface IAppProps {

}

interface IAppState {
    
}

@connect()
export class App extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        return <h1>Hello World</h1>;
    }
}
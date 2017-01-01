import * as React from "react";

interface KeyProps {
    readonly query: string;
}

class QueryKey extends React.Component<KeyProps, any> {
    public render() {
        return <h1 id={`key-${this.props.query}`} className="text">Klucz: {this.props.query.toUpperCase()}</h1>;
    }
}

export default QueryKey;

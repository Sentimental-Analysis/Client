import { TextInput } from './componnets/textInput';
import { Action } from '../global/actionTypes';
import * as React from 'react';

export interface ISearchBoxProps {
    Search: (value: string) => Action;
}

export class SearchBox extends React.Component<ISearchBoxProps, any> {
    public render() {
        return <div className="searchBox row">
                    <div className="col-lg-12" >
                        <TextInput text={""} placeholder="Wpisz fraze" search={true} onSearch={this.props.Search} ></TextInput>
                    </div>
               </div>;
    }
}
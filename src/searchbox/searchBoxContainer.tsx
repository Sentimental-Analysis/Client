import { SubmitButton } from './componnets/submitButton';
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
                        <div className="input-group input-group-lg" >
                            <TextInput text={""} placeholder="Wpisz fraze" search={true} onSearch={this.props.Search} ></TextInput>
                            <span className="input-group-btn" >
                                <SubmitButton value="Szukaj" ></SubmitButton>
                            </span>
                        </div>                       
                    </div>
               </div>;
    }
}
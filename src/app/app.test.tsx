import * as React from 'react'
import * as TestUtils from 'react-addons-test-utils'
import {expect} from "chai";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {reducers} from "../global/reducers";
import {combineReducers} from "redux";
import {App} from "./app";

describe("<App />", () => {

    function renderElement (el: React.ReactElement<{}>) {
        return TestUtils.renderIntoDocument(el) as React.Component<{}, {}>
    }

    function findComponentByType(root: React.Component<{}, {}>, type: any): React.Component<{}, {}> {
        return TestUtils.findRenderedComponentWithType(root, type)
    }

    function setup (): React.Component<{}, {}> {
        const store = createStore(combineReducers(reducers));
        const wrapper = renderElement(
            <Provider store={store}>
                <App />
            </Provider>);
        const app = findComponentByType(wrapper, App);
        return app;
    }


    it('Start App', () => {
        const app = setup();
        const searchBox = TestUtils.findRenderedDOMComponentWithClass(app, "searchBox")
        expect(searchBox).to.be.not.empty;
    })
});
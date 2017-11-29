import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/Store';

import MainComponentNavigator from './MainComponentNavigator';

const store = configureStore();

export default class MainComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainComponentNavigator/>
            </Provider>
        );
    }
}


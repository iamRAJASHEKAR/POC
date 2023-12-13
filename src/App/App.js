import React, { useCallback } from 'react';
import AppNavigator from './AppWrapper';
import { Provider, useDispatch } from 'react-redux';
import store from '../Redux/Store';

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator ></AppNavigator>
        </Provider>
    );
}

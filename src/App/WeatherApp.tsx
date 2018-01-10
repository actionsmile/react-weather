import * as React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { saveSettings as settingsReducer } from 'Core/Reducers/TempReducers';

export class WeatherApp extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={ createStore(settingsReducer) }>
                <div>
                    <h1>Aloha</h1>
                </div>
            </Provider>
        );
    }
}

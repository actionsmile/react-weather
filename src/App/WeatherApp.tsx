import * as React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { AppReducers } from 'Core/Reducers/AppReducers';
import { WeatherWidget } from 'Modules/Widget/WeatherWidget';

export class WeatherApp extends React.Component<{}, {}> {
    private store = createStore(AppReducers);

    public render(): JSX.Element {
        return (
            <Provider store={ this.store }>
                <WeatherWidget />
            </Provider>
        );
    }
}

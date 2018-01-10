import * as React from 'react';
import { Provider } from 'react-redux'
import {
    IWeatherProps,
    IWeatherState
} from 'Core/Models';

export class WeatherApp extends React.Component<IWeatherProps, IWeatherState> {
    render() {
        return (
            <Provider>
                <div>
                    <h1>Aloha</h1>
                </div>
            </Provider>
        );
    }
}

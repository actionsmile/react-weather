import * as React from 'react';
import {
    IWeatherProps,
    IWeatherState
} from 'Core/Models';

export class WeatherApp extends React.Component<IWeatherProps, IWeatherState> {
    render() {
        return (
            <div>
                <h1>Aloha</h1>
            </div>
        );
    }
}

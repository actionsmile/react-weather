import * as React from 'react';

interface IWeatherProps {
}

interface IWeatherState {
}

export class WeatherApp extends React.Component<IWeatherProps, IWeatherState> {
    render() {
        return (
            <div className="application-container">
                <div className="application-container__background" />
                <h1>Aloha</h1>
            </div>
        );
    }
}

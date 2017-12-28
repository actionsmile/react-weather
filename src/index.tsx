import * as React from 'react';
import { render } from 'react-dom';
import { WeatherApp } from './App/WeatherApp';

render (
    <WeatherApp />,
    document.getElementById('weather-app') as HTMLElement
);

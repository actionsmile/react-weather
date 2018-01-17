import * as React from 'react';
import { render } from 'react-dom';
import { WeatherApp } from 'App/WeatherApp';

import 'assets/styles/IndexPage.scss';

render (
    <WeatherApp />,
    document.getElementById('weather-app') as HTMLElement
);

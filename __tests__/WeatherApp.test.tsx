import * as React from 'react';
import { render } from 'react-dom';
import { WeatherApp } from './../src/App/WeatherApp';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<WeatherApp />, div);
});

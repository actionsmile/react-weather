import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WeatherApp } from './../App/WeatherApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherApp />, div);
});
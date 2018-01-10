import * as React from 'react';
import { render } from 'react-dom';

import { WeatherApp } from 'App/WeatherApp';

describe('Render app', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<WeatherApp />, div);
    });
});

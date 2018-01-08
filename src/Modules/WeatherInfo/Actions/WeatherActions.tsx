import * as React from 'react';
import { Dispatch } from 'react-redux';
import { IWeatherInfo } from 'Core/Models';
import {
    IWeatherActions,
    IWeatherService
} from './../Models';

class WeatherActions extends React.Component <{}, {}> implements IWeatherActions {
    constructor(private dispatch: Dispatch<IWeatherInfo>, private service: IWeatherService) {
        super();
    }

    getCurrentWeather = (city: String): Promise<IWeatherInfo> => {
        return null;
    }
}

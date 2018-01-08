import * as React from 'react';
import {
    IWeatherInfo
} from 'Core/Models';
import {
    IOpenWeatherAPI
} from './../Models/IOpenWeatherAPI';

interface IOpenWeatherAPIProps {};

class OpenWeatherAPI extends React.Component <IOpenWeatherAPIProps, {}> implements IOpenWeatherAPI {

    getCurrentWeather = (city: String): Promise<IWeatherInfo> => {
        return null;
    }

    constructor(props: IOpenWeatherAPIProps) {
        super(props);
    }
}

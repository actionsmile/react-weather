import {
    IWeatherInfo
} from 'Core/Models';

export interface IOpenWeatherAPI {
    getCurrentWeather(city: String): Promise<IWeatherInfo>;
}

import {
    IWeatherInfo
} from 'Core/Models';

export interface IWeatherActions {
    getCurrentWeather(city: String): Promise<IWeatherInfo>;
}

export interface IWeatherService {
    getWeatherInfo: (city: string) => Promise<IWeatherInfo>;
}

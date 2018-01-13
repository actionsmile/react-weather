import { ISettingsState } from 'Modules/Settings/Models/SettingsModels';

export interface ITemperatureState {
    celsius: number;
    fahrenheit: number;
}

/**
 * Хранилище приложения.
 * @prop {ISettingsState} settingsState Общие настройки погодного приложения.
 * @prop {ITemperatureState} temperatureState Данные о температуре.
 */
export interface IAppState {
    settingsState: ISettingsState;
    temperatureState: ITemperatureState;
}

/**
 * Единицы измерения температуры.
 * @prop {enum string} CELSIUS В градусах по Цельсию.
 * @prop {enum string} FAHRENHEIT В градусах по Фаренгейту.
 */
export enum EMeasureType {
    CELSIUS = 'celsius',
    FAHRENHEIT = 'fahrenheit'
}

/**
 * Переменные, которые используются приложенияем.
 * @prop {enum string} STORAGE Имя хранилища состояния приложения в <code>localStorage</code>.
 * @prop {enum string} API_KEY Ключ к доступу данных сервиса <code>http://www.wunderground.com</code>
 */
export enum ECoreContsants {
    STORAGE = 'WeaApp-LocalStorage',
    API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=',
    API_KEY = '5f35a07150d14308f953b8d40415d1d6'
}

export enum EConnectionStatus {
    SUCCESS,
    UNAVALIVBALE,
    FORBIDDEN,
    CLOSE,
    DECLINE
}

export interface IPayloadAction<T> {
    type: string;
    payload?: T;
}

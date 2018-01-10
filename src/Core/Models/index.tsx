export interface IWeatherProps {}

export interface IWeatherState {}

export interface ISettingsState {
    city: string;
    measurement: string | EMesureType;
}

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
export enum EMesureType {
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
    API_KEY = 'cc6ae495769f05d5'
}

export enum EConnectionStatus {
    SUCCESS,
    UNAVALIVBALE,
    FORBIDDEN,
    CLOSE,
    DECLINE
}

export interface ITempAction<T> {
    type: string;
    payload?: T;
}

export interface ISettingsAction {
    type: string;
    payload?: string | EMesureType;
}

export enum EActionTypes {
    GET_CITY = 'GET_CITY',
    SAVE_CITY = 'SAVE_CITY',
    SAVE_MEASURNMENT = 'SAVE_MEASURENMENT'
}

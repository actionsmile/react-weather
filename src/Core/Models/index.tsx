export interface IWeatherProps {}

export interface IWeatherState {}

export interface IWeatherInfo {
    city: string;
    measurement: EMesureType;
    temperature: number;
}

/**
 * Хранилище приложения.
 * @prop {IWeatherInfo} infoState Информация о состоняиее приложения по погоде.
 */
export interface IAppState {
    infoState: IWeatherInfo;
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
 */
export enum ECoreContsants {
    STORAGE = 'WeaApp-LocalStorage'
}

export enum EConnectionStatus {
    SUCCESS,
    UNAVALIVBALE,
    FORBIDDEN,
    CLOSE,
    DECLINE
}

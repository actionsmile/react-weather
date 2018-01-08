export interface IWeatherProps {}

export interface IWeatherState {}

export interface IWeatherInfo {
    city: string;
    measurement: EMesureType;
    temperature: number;
}

/**
 * Хранилище приложения.
 * @prop {string} city Город, в котром необходимо проверить погоду. По умолчанию 'Moscow'.
 * @prop {number} counter Просто переменная для тестов. По умолчанию 0.
 */
export interface IAppState {
    city: string;
    counterState: ICounterState;
}

export interface ICounterState {
    value: number;
}

/**
 * Тестовые действия.
 * @prop {EBasicActionType} type Тип события.
 * @prop {number} value Значение, которое передается в событии.
 */
export interface IBasicAction {
    type: EBasicActionType;
    value: number;
}

/**
 * Типы тестовых действий.
 * @prop {enum string} INCREMENT Действие добавления к счетчику указанного в экшне значения.
 * @prop {enum string} DECREMENT Действие вычитания от счетчика указанного в экшне значения.
 */
export enum EBasicActionType {
    INCREMENT = 'Increment',
    DECREMENT = 'Decrement'
}

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

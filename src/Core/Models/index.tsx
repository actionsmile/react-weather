export interface IWeatherProps {}

export interface IWeatherState {}

/**
 * Хранилище приложения.
 * @prop {string} city Город, в котром необходимо проверить погоду. По умолчанию 'Moscow'.
 * @prop {number} counter Просто переменная для тестов. По умолчанию 0.
 */
export interface IAppState {
    city: string;
    counter: number;
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

export enum EBasicActionType {
    INCREMENT,
    DECREMENT
}

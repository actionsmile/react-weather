import { EMeasureType, IPayloadAction } from 'Core/Models';

/**
 * Состояние настроек
 * @prop {string} city Название города, в котором пользователь хочет видеть погоду.
 * @prop {EMeasureType} measurenment
 */
export interface ISettingsState {
    city: string;
    measurenment: EMeasureType;
}

/**
 * Ответ на зпросы сохранения настроек приложения.
 * @prop {string} city Город.
 * @prop {EMeasureType} measurenment Единицы измерения погоды.
 */
export interface ISettingsActionResponse {
    city?: string;
    measurenment?: EMeasureType;
}

/**
 * Действия, которые может совершать модуль настрек.
 * @prop {Function} getCurrentCity Получить информацию по текущему городу.
 * @prop {saveCity}
 */
export interface ISettingsActions {
    getCurrentCity: () => IPayloadAction<ISettingsActionResponse>;
    saveCity: (city: string) => IPayloadAction<ISettingsActionResponse>;
    saveMeasurenment: (measurenment: EMeasureType) => IPayloadAction<ISettingsActionResponse>;
}

export enum ESettingsActionTypes {
    GET_CITY = 'GET_CITY',
    SAVE_CITY = 'SAVE_CITY',
    SAVE_MEASURNMENT = 'SAVE_MEASURENMENT'
}

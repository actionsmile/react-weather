import { EMesureType } from 'Core/Models';

export interface ISettingsActions {
    selectMeasurementType: (type: EMesureType) => Promise<void>;
    selectCity: (city: string) => Promise<void>;
}

export interface ISettingsSetMeasurementTypeAction {
    action: ESettingsActions;
    type: EMesureType;
}

export enum ESettingsActions {
    SELECT_MEASUREMENT,
    SELECT_CITY
}

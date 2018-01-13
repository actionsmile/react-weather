import {
    EMeasureType,
    IPayloadAction
} from 'Core/Models';
import {
    ESettingsActionTypes,
    ISettingsActionResponse,
} from './../Models/SettingsModels';

export const getCurrentCity = (): IPayloadAction<ISettingsActionResponse>  => ({
    type: ESettingsActionTypes.GET_CITY
});

export const saveCity = (city: string): IPayloadAction<ISettingsActionResponse> => ({
    type: ESettingsActionTypes.SAVE_CITY,
    payload: { city }
});

export const saveMeasurenment = (measurenment: EMeasureType): IPayloadAction<ISettingsActionResponse> => ({
    type: ESettingsActionTypes.SAVE_MEASURNMENT,
    payload: { measurenment }
});

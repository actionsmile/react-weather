import {
    EActionTypes,
    EMesureType,
    ITempAction,
} from 'Core/Models';

export const SaveCityAction = (payload: string): ITempAction<string> => ({
    type: EActionTypes.SAVE_CITY,
    payload
});

export const SaveMeasurenmentAction = (payload: EMesureType): ITempAction<EMesureType> => ({
    type: EActionTypes.SAVE_MEASURNMENT,
    payload
});

export const TestActions = {
    SaveCityAction,
    SaveMeasurenmentAction
}

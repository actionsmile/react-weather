import {
    EActionTypes,
    EMesureType,
    ISettingsActionResponse,
    ITempAction
} from 'Core/Models';

const getCurrentCity = (): ITempAction<ISettingsActionResponse> => ({
    type: EActionTypes.GET_CITY
})

const saveCityAction = (city: string): ITempAction<ISettingsActionResponse> => ({
    type: EActionTypes.SAVE_CITY,
    payload: { city }
});

const saveMeasurenmentAction = (measurenment: EMesureType): ITempAction<ISettingsActionResponse> => ({
    type: EActionTypes.SAVE_MEASURNMENT,
    payload: { measurenment }
});

export const TestActions = {
    getCurrentCity,
    saveCityAction,
    saveMeasurenmentAction
}

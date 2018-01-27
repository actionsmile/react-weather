import {
    EMeasureType,
    IPayloadAction
} from 'Core/Models';
import {
    ESettingsActionTypes,
    ISettingsActionResponse,
    ISettingsState
} from './../Models/SettingsModels';

export const init = {
    get state (): ISettingsState {
        return {
            city: 'Moscow',
            measurenment: EMeasureType.CELSIUS
        }
    }
}

export const SettingsReducer = (state: ISettingsState = init.state, action: IPayloadAction<ISettingsActionResponse>): ISettingsState => {
    switch (action.type) {
        case ESettingsActionTypes.SAVE_CITY:
            return {
                ...state,
                city: action.payload.city
            };
        case ESettingsActionTypes.SAVE_MEASURNMENT:
            return {
                ...state,
                measurenment: action.payload.measurenment
            }
        default:
            return state;
    }
}

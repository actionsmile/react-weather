import {
    EActionTypes,
    EMesureType,
    ISettingsActionResponse,
    ISettingsState,
    ITempAction
} from 'Core/Models';

const init = {
    getState: (): ISettingsState => ({
        city: 'Moscow',
        measurenment: EMesureType.CELSIUS
    })
}

export const saveSettings = (state: ISettingsState, action: ITempAction<ISettingsActionResponse>) => {
    let result = state || init.getState();
    switch (action.type) {
        case EActionTypes.SAVE_CITY:
            result = {
                ...result,
                city: action.payload.city
            };
            break;
        case EActionTypes.SAVE_MEASURNMENT:
            result = {
                ...result,
                measurenment: action.payload.measurenment
            }
        default:
            break;
    }
    return result;
}

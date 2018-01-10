import {
    EActionTypes,
    EMesureType,
    ISettingsState,
    ITempAction
} from 'Core/Models';

const init = {
    getState: (): ISettingsState => ({
        city: 'Moscow',
        measurement: EMesureType.CELSIUS
    })
}

export const saveCity = (state: ISettingsState, action: ITempAction<string | EMesureType>) => {
    let result = state || init.getState();
    switch (action.type) {
        case EActionTypes.SAVE_CITY:
            result = {
                ...result,
                city: action.payload
            };
            break;
        case EActionTypes.SAVE_MEASURNMENT:
            result = {
                ...result,
                measurement: action.payload
            }
        default:
            break;
    }
    return result;
}

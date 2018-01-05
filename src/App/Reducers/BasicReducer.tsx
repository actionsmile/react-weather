import {
    EBasicActionType,
    IAppState,
    IBasicAction
} from 'Core/Models';

/**
 * Значение по умолчанию.
 * @prop {IAppState} state Состояние приложения.
 */
export const init = {
    state: {
        city: 'Moscow',
        counter: 0
    }
}

export const counter = (state: IAppState, action: IBasicAction) => {
    state = state || init.state;
    let result = {};
    switch (action.type) {
        case EBasicActionType.INCREMENT:
            result = {
                ...state,
                counter: state.counter += action.value
            };
            break;
        case EBasicActionType.DECREMENT:
            result = {
                ...state,
                counter: state.counter -= action.value
            }
        default:
            result = { ...state };
            break;
    }

    return result;
}

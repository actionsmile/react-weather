import {
    EBasicActionType,
    IAppState,
    IBasicAction,
    ICounterState
} from 'Core/Models';

/**
 * Значение по умолчанию.
 * @prop {IAppState} state Состояние приложения.
 */
export const init = {
    state: {
        city: 'Moscow',
        counterState: {
            value: 0
        }
    }
}

export const counter = (state: ICounterState, action: IBasicAction): ICounterState => {
    state = state || init.state.counterState;
    let result: ICounterState;
    switch (action.type) {
        case EBasicActionType.INCREMENT:
            result = {
                ...state,
                value: state.value + action.value
            }
            break;
        case EBasicActionType.DECREMENT:
            result = {
                ...state,
                value: state.value - action.value
            }
            break;
        default:
            result = state;
            break;
    }

    return result;
}

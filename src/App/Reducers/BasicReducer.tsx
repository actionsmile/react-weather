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

export const counter = (state: IAppState, action: IBasicAction): IAppState => {
    state = state || init.state;
    let result: IAppState;
    switch (action.type) {
        case EBasicActionType.INCREMENT:
            result = {
                ...state,
                counter: state.counter + 1
            }
            break;
        case EBasicActionType.DECREMENT:
        result = {
            ...state,
            counter: state.counter - 1
        }
        default:
            result = state;
            break;
    }

    return result;
}

import {
    IAppState,
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

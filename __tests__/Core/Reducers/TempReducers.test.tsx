
import * as deepFreeze from 'deep-freeze';
import { TempActions as actions } from 'Core/Actions/TempActions';
import { EMesureType, ISettingsState } from 'Core/Models';
import { saveSettings } from 'Core/Reducers/TempReducers';

describe('Settings reducer tests', () => {
    const {
        getCurrentCity,
        saveCityAction,
        saveMeasurenmentAction
    } = actions;

    it('init state returns if `undefined` passed', () => {
        const action = getCurrentCity();
        const finalState: ISettingsState = {
            city: 'Moscow',
            measurenment: EMesureType.CELSIUS
        };
        deepFreeze(action);
        expect(saveSettings(undefined, action)).toEqual(finalState);
    });

    it('changes city name to `Tashkent`', () => {
        const action = saveCityAction('Tashkent');
        const finalState: ISettingsState = {
            city: 'Tashkent',
            measurenment: EMesureType.CELSIUS
        };
        deepFreeze(action);
        expect(saveSettings(undefined, action)).toEqual(finalState);
    });

    it('changes mesure type to `FAHRENHEIT`', () => {
        const action = saveMeasurenmentAction(EMesureType.FAHRENHEIT);
        const finalState: ISettingsState = {
            city: 'Moscow',
            measurenment: EMesureType.FAHRENHEIT
        };
        deepFreeze(action);
        expect(saveSettings(undefined, action)).toEqual(finalState);
    });

    it('changes city to `Los Angeles` and keeps prev measurenment', () => {
        const action = saveCityAction('Los Angeles');
        const initialState: ISettingsState = {
            city: 'Moscow',
            measurenment: EMesureType.FAHRENHEIT
        }
        const finalState: ISettingsState = {
            city: 'Los Angeles',
            measurenment: EMesureType.FAHRENHEIT
        };
        deepFreeze(initialState);
        deepFreeze(action);
        expect(saveSettings(initialState, action)).toEqual(finalState);
    });
});

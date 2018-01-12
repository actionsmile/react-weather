
import * as deepFreeze from 'deep-freeze';
import { EMesureType } from 'Core/Models';
import  * as actions from 'Modules/Settings/Actions/SettingsActions';
import { ISettingsState } from 'Modules/Settings/Models/SettingsModels';
import { SettingsReducer as settingsReducer } from 'Modules/Settings/Reducers/SettingsReducers';

describe('Settings state tests', () => {

    it('init state returns if `undefined` passed', () => {
        const action = actions.getCurrentCity();
        const finalState: ISettingsState = {
            city: 'Moscow',
            measurenment: EMesureType.CELSIUS
        };
        deepFreeze(action);
        expect(settingsReducer(undefined, action)).toEqual(finalState);
    });

    it('changes city name to `Tashkent`', () => {
        const action = actions.saveCity('Tashkent');
        const finalState: ISettingsState = {
            city: 'Tashkent',
            measurenment: EMesureType.CELSIUS
        };
        deepFreeze(action);
        expect(settingsReducer(undefined, action)).toEqual(finalState);
    });

    it('changes mesure type to `FAHRENHEIT`', () => {
        const action = actions.saveMeasurenment(EMesureType.FAHRENHEIT);
        const finalState: ISettingsState = {
            city: 'Moscow',
            measurenment: EMesureType.FAHRENHEIT
        };
        deepFreeze(action);
        expect(settingsReducer(undefined, action)).toEqual(finalState);
    });

    it('changes city to `Los Angeles` and keeps prev measurenment', () => {
        const action = actions.saveCity('Los Angeles');
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
        expect(settingsReducer(initialState, action)).toEqual(finalState);
    });
});

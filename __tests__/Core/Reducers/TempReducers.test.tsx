
import * as deepFreeze from 'deep-freeze';
import { TestActions } from 'Core/Actions/TempActions';
import { EMesureType } from 'Core/Models';
import { saveCity } from 'Core/Reducers/TempReducers';

describe('Settings reducer tests', () => {
    const {
        getCurrentCity,
        saveCityAction,
        saveMeasurenmentAction
    } = TestActions;

    it('init state returns if `undefined` passed', () => {
        const action = getCurrentCity();
        const finalState = {
            city: 'Moscow',
            measurement: EMesureType.CELSIUS
        };
        deepFreeze(action);
        expect(saveCity(undefined, action)).toEqual(finalState);
    });

    it('changes city name to `Tashkent`', () => {
        const action = saveCityAction('Tashkent');
        const finalState = {
            city: 'Tashkent',
            measurement: EMesureType.CELSIUS
        };
        deepFreeze(action);
        expect(saveCity(undefined, action)).toEqual(finalState);
    });

    it('changes mesure type to `FAHRENHEIT`', () => {
        const action = saveMeasurenmentAction(EMesureType.FAHRENHEIT);
        const finalState = {
            city: 'Moscow',
            measurement: EMesureType.FAHRENHEIT
        };
        deepFreeze(action);
        expect(saveCity(undefined, action)).toEqual(finalState);
    });

    it('changes city to `Los Angeles` and keeps prev measurenment', () => {
        const action = saveCityAction('Los Angeles');
        const initialState = {
            city: 'Moscow',
            measurement: EMesureType.FAHRENHEIT
        }
        const finalState = {
            city: 'Los Angeles',
            measurement: EMesureType.FAHRENHEIT
        };
        deepFreeze(initialState);
        deepFreeze(action);
        expect(saveCity(initialState, action)).toEqual(finalState);
    });
});

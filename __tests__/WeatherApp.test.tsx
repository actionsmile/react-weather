import * as deepFreeze from 'deep-freeze';
import * as React from 'react';
import { render } from 'react-dom';

import {
    EActionTypes,
    EMesureType,
    ISettingsState,
    ITempAction
} from 'Core/Models';
import { saveCity } from 'Core/Reducers/TempReducers';

import { WeatherApp } from './../src/App/WeatherApp';

describe('Render app', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<WeatherApp />, div);
    });
});

describe('Settings reducer tests', () => {
    it('init state returns if `undefined` passed', () => {
        const action: ITempAction<string | EMesureType> = {
            type: EActionTypes.GET_CITY
        };
        const finalState: ISettingsState = {
            city: 'Moscow',
            measurement: EMesureType.CELSIUS
        };
        deepFreeze(action);
        expect(saveCity(undefined, action)).toEqual(finalState);
    });

    it('changes city name to `Tashkent`', () => {
        const action: ITempAction<string | EMesureType> = {
            type: EActionTypes.SAVE_CITY,
            payload: 'Tashkent'
        };
        const finalState: ISettingsState = {
            city: 'Tashkent',
            measurement: EMesureType.CELSIUS
        };
        deepFreeze(action);
        expect(saveCity(undefined, action)).toEqual(finalState);
    });

    it('changes mesure type to  name to `Tashkent`', () => {
        const action: ITempAction<string | EMesureType> = {
            type: EActionTypes.SAVE_MEASURNMENT,
            payload: EMesureType.FAHRENHEIT
        };
        const finalState: ISettingsState = {
            city: 'Moscow',
            measurement: EMesureType.FAHRENHEIT
        };
        deepFreeze(action);
        expect(saveCity(undefined, action)).toEqual(finalState);
    });
});

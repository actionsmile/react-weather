import * as deepFreeze from 'deep-freeze';
import * as React from 'react';
import { render } from 'react-dom';
import * as Reducers from './../src/App/Reducers/BasicReducer';
import { WeatherApp } from './../src/App/WeatherApp';
import {
    EBasicActionType,
    IBasicAction,
    ICounterState
} from './../src/Core/Models';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<WeatherApp />, div);
});

it('Initial state works even if `null` used as argument passes', () => {
    const finalState: ICounterState = {
        value: 1
    }
    const dispatchingAction: IBasicAction = {
        type: EBasicActionType.INCREMENT,
        value: 1
    }
    deepFreeze(dispatchingAction);
    expect(Reducers.counter(null, dispatchingAction)).toEqual(finalState);
});

it('Decrement passes', () => {
    const initialState: ICounterState = {
        value: 2
    };
    const finalState: ICounterState = {
        value: 1
    }
    const dispatchingAction: IBasicAction = {
        type: EBasicActionType.DECREMENT,
        value: 1
    }
    deepFreeze(initialState);
    deepFreeze(dispatchingAction);
    expect(Reducers.counter(initialState, dispatchingAction)).toEqual(finalState);
});

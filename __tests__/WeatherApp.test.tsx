import * as deepFreeze from 'deep-freeze';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Reducers from './../src/App/Reducers/BasicReducer';
import { WeatherApp } from './../src/App/WeatherApp';
import {
    EBasicActionType,
    IAppState,
    IBasicAction
} from './../src/Core/Models';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WeatherApp />, div);
});

it('Incrementing passes', () => {
    const dispatchingAction: IBasicAction = {
        type: EBasicActionType.INCREMENT,
        value: 1
    }

    expect(Reducers.counter(null, dispatchingAction)).toEqual({ ...Reducers.init.state, counter: 1 });
});

it('Decrement passes', () => {
    const initialState: IAppState = {
        ...Reducers.init.state,
        counter: 2
    };
    const finalState = {
        ...initialState,
        counter: 1
    }
    const dispatchingAction: IBasicAction = {
        type: EBasicActionType.DECREMENT,
        value: 1
    }
    deepFreeze(initialState);
    expect(Reducers.counter(initialState, dispatchingAction)).toEqual(finalState);
});

import * as React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { TempActions as actions } from 'Core/Actions/TempActions';
import { saveSettings as settingsReducer } from 'Core/Reducers/TempReducers';
import { WeatherWidget } from 'Modules/Widget/WeatherWidget';

export class WeatherApp extends React.Component<{}, {}> {
    store = createStore(settingsReducer);

    onStoreChanged = () => {
        console.group('%cStore changed', 'color:blue')
        console.log(this.store.getState());
        console.groupEnd();
    }

    handleClick = () => {
        this.store.dispatch(actions.saveCityAction('Tashkent'));
    }

    render() {
        this.store.subscribe(this.onStoreChanged);

        return (
            <Provider store={ this.store }>
                <WeatherWidget
                    city={ this.store.getState().city }
                    onChangeClick={this.handleClick}
                />
            </Provider>
        );
    }
}

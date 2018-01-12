import { combineReducers } from 'redux';
import { IAppState } from 'Core/Models';
import { SettingsReducer as settingsState } from 'Modules/Settings/Reducers/SettingsReducers';

export const AppReducers = combineReducers<IAppState>({
    settingsState
});

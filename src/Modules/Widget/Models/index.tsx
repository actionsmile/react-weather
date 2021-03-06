import {
    ISettingsActions,
    ISettingsState
} from 'Modules/Settings/Models/SettingsModels';

/**
 * Свойства виджета, отображающего погоду.
 * @prop {string} city Город, погода которого отражена в виджете.
 * @prop {ISettingsAction} Список действий, которые может инициировать виджет.
 */
export interface IWidgetProps {
    settings?: ISettingsState;
    actions?: ISettingsActions;
}

/**
 * Состояние компонента.
 */
export interface IWidgetState {
    temperature: number;
}

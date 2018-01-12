import { isEmpty } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IAppState } from 'Core/Models';
import * as SettingsActions from 'Modules/Settings/Actions/SettingsActions';
import {
    IWidgetProps,
    IWidgetState
} from './Models';

class Widget extends React.Component<IWidgetProps, IWidgetState> {
    static displayName = 'WeatherWidget';

    componentDidMount() {
        !isEmpty(this.props.actions) && this.props.actions.getCurrentCity();
    }

    handleClick = () => {
        !isEmpty(this.props.actions) && this.props.actions.saveCity('LA');
    }

    render() {
        const { city } = this.props;
        return (
            <div>
                <h1>Aloha</h1>
                <h2>{ city }</h2>
                <button onClick={this.handleClick}>Change</button>
            </div>
        )
    }
}

const mapStateToProps = (state: IAppState) => ({
    city: state.settingsState.city
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    actions: bindActionCreators(SettingsActions, dispatch)
});

export const WeatherWidget = connect<{}, IWidgetProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(Widget);

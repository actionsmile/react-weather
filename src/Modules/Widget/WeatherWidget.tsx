import { isEmpty } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IAppState } from 'Core/Models';
import * as SettingsActions from 'Modules/Settings/Actions/SettingsActions';
import { CityButton } from 'Modules/Widget/Components/CityButton';
import { Temperature } from 'Modules/Widget/Components/Temperature';
import {
    IWidgetProps,
    IWidgetState
} from './Models';
import * as service from './Service/WeatherService';

class Widget extends React.Component<IWidgetProps, IWidgetState> {
    static displayName = 'WeatherWidget';
    cities = ['Москва', 'Madrid', 'Paris', 'London'];

    constructor(props: IWidgetProps) {
        super(props);
        this.state = {
            temperature: NaN
        }
    }

    componentDidMount() {
        this.handleClick(this.cities[0]);
    }

    componentWillReceiveProps(nextProps: IWidgetProps) {
        const { settings } = nextProps;
        !isEmpty(this.props.settings) && this.props.settings.city !== settings.city && service.detect(settings).then(
            (data: Response) => data.json().then(
                result => this.setState({ temperature: result.main.temp })
            ),
            reason => console.log(reason)
        );
    }

    handleClick = (cityName: string) => {
        !isEmpty(this.props.actions) && this.props.actions.saveCity(cityName);
    }

    render(): JSX.Element {
        const { settings } = this.props;
        const { temperature } = this.state;
        return (
            <div className="weather__widget">
                <h1>{ settings.city }</h1>
                <Temperature
                    value={ temperature }
                    measure={ settings.measurenment }
                />
                {this.cities.map((cityName, index) => {
                    return (
                        <CityButton
                            key={ index }
                            onCityClick={ this.handleClick }
                            city={ cityName }
                            enabled={ cityName !== settings.city }
                        />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state: IAppState) => ({
    settings: state.settingsState
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    actions: bindActionCreators(SettingsActions, dispatch)
});

export const WeatherWidget = connect<{}, IWidgetProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(Widget);

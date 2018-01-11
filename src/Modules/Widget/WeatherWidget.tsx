import * as React from 'react';
import {
    IWidgetProps,
    IWidgetState
} from './Models';

export class WeatherWidget extends React.Component<IWidgetProps, IWidgetState> {
    componentDidUpdate(prevProps: IWidgetProps) {
        console.group('%cupdate', 'color: gray');
        console.log(prevProps);
        console.groupEnd();
    }

    componentDidMount() {
        console.group('%cmount', 'color: gray');
        console.log(this.props);
        console.groupEnd();
    }

    render() {
        const { city, onChangeClick } = this.props;
        return (
            <div>
                <h1>Aloha</h1>
                <h2>{ city }</h2>
                <button onClick={onChangeClick}>Change</button>
            </div>
        )
    }
}

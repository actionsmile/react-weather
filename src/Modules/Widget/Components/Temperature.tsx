import * as React from 'react';
import { EMeasureType } from 'Core/Models';

interface ITemperatureProps {
    value: number;
    measure: EMeasureType;
}

export class Temperature extends React.Component<ITemperatureProps, {}>{

    render(): JSX.Element {
        const { value, measure } = this.props;
        return (
            <div className="temperature">
                { value < 0 ?
                    <span className="temperature__minus">&mdash;</span> :
                    null
                }
                <span className="temperature__data">
                    {Math.abs(value).toFixed(0)} ˚{measure === EMeasureType.CELSIUS ? 'C' : 'F'}
                </span>
            </div>
        )
    }
}

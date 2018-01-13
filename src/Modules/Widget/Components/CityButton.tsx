import * as React from 'react';

interface ICityButtonProps {
    city: string;
    onCityClick: (city: string) => void;
    enabled: boolean;
}

export class CityButton extends React.Component<ICityButtonProps, {}> {
    handleClick = () => {
        this.props.onCityClick(this.props.city);
    }
    render(): JSX.Element {
        const { city, enabled } = this.props;
        return (
            <button onClick={this.handleClick} disabled={!enabled}>{ city }</button>
        )
    }
}

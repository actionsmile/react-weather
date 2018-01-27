import * as React from 'react';

interface ICityButtonProps {
    city: string;
    onCityClick: (city: string) => void;
    enabled: boolean;
}

export class CityButton extends React.Component<ICityButtonProps, {}> {

    // Handlers
    private  handleClick = (): void => {
        this.props.onCityClick(this.props.city);
    }

    public render(): JSX.Element {
        const { city, enabled } = this.props;
        return (
            <button onClick={this.handleClick} disabled={!enabled}>{ city }</button>
        )
    }
}

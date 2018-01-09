import * as React from 'react';
import { Dispatch } from 'react-redux';
import {
    EMesureType
} from 'Core/Models';
import {
    ISettingsActions
} from './../Models';

export class SettingsActions extends React.Component <{}, {}> implements ISettingsActions {
    selectMeasurementType: (type: EMesureType) => Promise<void>;

    selectCity: (city: string) => Promise<void>;
}

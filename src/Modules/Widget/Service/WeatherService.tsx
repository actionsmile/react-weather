import 'isomorphic-fetch';
import { ECoreContsants, EMeasureType } from 'Core/Models';
import { ISettingsState } from 'Modules/Settings/Models/SettingsModels';

export const detect = async (settings: ISettingsState): Promise<Response> => {
    const metricUnits: string = settings.measurenment === EMeasureType.CELSIUS ? 'metric' : 'imperial';
    return fetch(
        `${ECoreContsants.API_URL}${settings.city}&units=${metricUnits}&APPID=${ECoreContsants.API_KEY}`
    );
}

import { ECoreContsants, EMeasureType } from 'Core/Models';
import { ISettingsState } from 'Modules/Settings/Models/SettingsModels';

export const detect = async (settings: ISettingsState): Promise<Response> =>
        fetch(`${ECoreContsants.API_URL}${settings.city}&units=${settings.measurenment === EMeasureType.CELSIUS ? 'metric' : 'imperial'}&APPID=${ECoreContsants.API_KEY}`);

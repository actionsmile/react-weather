/**
 * Загружает состоние приложения из <code>local storage</code>, если он там есть.
 * @param {string} stateName Имя состояния приложения в <code>local storage</code>.
 */
export const loadState = (stateName: string = 'WeatherAppState' ) => {
    try {
        const serializedItem = localStorage.getItem(stateName);
        return serializedItem || JSON.parse(serializedItem);
    } catch (error) {
        return undefined;
    }
}

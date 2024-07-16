const getWeather = async (location) => {
  try {
    if (location === '' || location === undefined)
      throw new Error('Location Must Be Injected...');

    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=CQHGRNWW2SCL23XMNXSX5CKGN`,
      {
        mode: 'cors',
      }
    );

    if (!response.ok)
      throw new Error(
        `Error: unable to load preview, HTTP response ${response.status}.`
      );

    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};

export default getWeather;
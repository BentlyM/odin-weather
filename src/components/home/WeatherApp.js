import getWeather from '../../services/weatherService';

const displayWeatherCardContent = (location) => {
  const weatherCardContent = document.createElement('div');
  weatherCardContent.classList.add('weather-content');

  const loaderDisplay = async () => {
    const loadingWarp = document.createElement('div');
    loadingWarp.classList.add('load-warp');

    const loader = document.createElement('div');
    loader.id = 'loader';

    const loaderText = document.createElement('p');
    loaderText.textContent = 'Weather API content will be displayed here';

    loadingWarp.appendChild(loader);
    loadingWarp.appendChild(loaderText);

    return loadingWarp;
  };

  const renderWeather = async () => {
    const load = await loaderDisplay();
    weatherCardContent.appendChild(load);

    getWeather(location).then((forecast) => {
      // Remove the loader once the forecast data is loaded
      weatherCardContent.removeChild(load);

      const weatherWarp = document.createElement('div');
      weatherWarp.classList.add('weather-warp');

      // Add the forecast data to the weatherWarp element
      // ...
      console.log(forecast);

      weatherCardContent.appendChild(weatherWarp);
    });
  };

  renderWeather();

  return weatherCardContent;
};

export default displayWeatherCardContent;

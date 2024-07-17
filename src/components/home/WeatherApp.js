import getWeather from '../../services/weatherService';

const displayWeatherCardContent = (location) => {
  const weatherCardContent = document.createElement('div');
  weatherCardContent.classList.add('weather-content');

  const weatherIcons = {
    Snow: 'https://cdn-icons-png.flaticon.com/512/2315/2315309.png ',
    Rain: 'https://cdn-icons-png.flaticon.com/512/1163/1163657.png',
    Thunderstorm: 'https://cdn-icons-png.flaticon.com/512/3236/3236860.png',
    Fog: 'https://cdn-icons-png.flaticon.com/512/5243/5243930.png',
    Haze: 'https://cdn-icons-png.flaticon.com/512/3313/3313998.png',
    Mist: 'https://cdn-icons-png.flaticon.com/512/4151/4151022.png',
    Breezy: 'https://cdn-icons-png.flaticon.com/512/2294/2294750.png',
    Windy: 'https://cdn-icons-png.flaticon.com/512/3026/3026368.png',
    Frigid: 'https://cdn-icons-png.flaticon.com/512/12411/12411483.png',
    Cold: 'https://cdn-icons-png.flaticon.com/512/2322/2322701.png',
    Chilly: 'https://cdn-icons-png.flaticon.com/512/17090/17090674.png',
    Cool: 'https://cdn-icons-png.flaticon.com/512/13405/13405962.png',
    Mild: 'https://cdn-icons-png.flaticon.com/512/2729/2729455.png',
    Warm: 'https://cdn-icons-png.flaticon.com/512/1654/1654285.png',
    Hot: 'https://cdn-icons-png.flaticon.com/512/1684/1684375.png',
    Sweltering: 'https://cdn-icons-png.flaticon.com/512/1332/1332329.png',
    Scorching: 'https://cdn-icons-png.flaticon.com/512/7648/7648056.png',
    'Partially cloudy':
      'https://cdn-icons-png.flaticon.com/512/13766/13766363.png',
    Clear: 'https://cdn-icons-png.flaticon.com/512/6974/6974833.png',
    'Mostly cloudy': 'https://cdn-icons-png.flaticon.com/512/3222/3222801.png',
    'Mostly sunny': 'https://cdn-icons-png.flaticon.com/512/16207/16207020.png',
    Sunny: 'https://cdn-icons-png.flaticon.com/512/869/869869.png',
  };

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
      const forecastImage = new Image(100, 100);
      forecastImage.src =
        weatherIcons[forecast['currentConditions']['conditions']];

      const forecastTemperature = document.createElement('h2');
      const tempCelsius =
        ((+forecast['currentConditions']['temp'] - 32) * 5) / 9; // convert Fahrenheit to Celsius
      forecastTemperature.textContent = `${
        forecast['currentConditions']['temp']
      } ℉ -> ${tempCelsius.toFixed(2)}°C`;
      forecastTemperature.style.textAlign = 'center';

      const forecastDescription = document.createElement('p');
      forecastDescription.innerHTML = `<strong>Description:</strong> ${forecast['description']}`;
      forecastDescription.style.textAlign = 'center';
      forecastDescription.style.width = '90%';

      const forecastAddress = document.createElement('p');
      forecastAddress.innerHTML = `📍${forecast['resolvedAddress']}`;
      forecastAddress.style.fontSize = '1.2rem';

      weatherWarp.appendChild(forecastImage);
      weatherWarp.appendChild(forecastTemperature);
      weatherWarp.appendChild(forecastDescription);
      weatherWarp.appendChild(forecastAddress);

      weatherCardContent.appendChild(weatherWarp);
    });
  };

  renderWeather();

  return weatherCardContent;
};

export default displayWeatherCardContent;

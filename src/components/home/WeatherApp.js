const displayWeatherCardContent = () => {
    
    const weatherCardContent = document.createElement('div');
    weatherCardContent.classList.add('weather-content');

    const loaderDisplay = () => {
      const loadingWarp = document.createElement('div');
      loadingWarp.classList.add('load-warp');

      const loader = document.createElement('div');
      loader.id = 'loader';

      const loaderText = document.createElement('p');
      loaderText.textContent = 'Weather API content will be displayed here';

      loadingWarp.appendChild(loader);
      loadingWarp.appendChild(loaderText);

      return loadingWarp;
    }


    weatherCardContent.appendChild(loaderDisplay());
    return weatherCardContent;
  };
  
  export default displayWeatherCardContent;
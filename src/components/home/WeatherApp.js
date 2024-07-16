const displayWeatherCardContent = (contentBody) => {
    
    const weatherCardContent = document.createElement('p');
    weatherCardContent.textContent = 'Weather API content will be displayed here';
    contentBody.appendChild(weatherCardContent);
  };
  
  export default displayWeatherCardContent;
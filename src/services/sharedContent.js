import displayWeatherCardContent from '../components/home/WeatherApp';

const getSharedContent = (contentId) => {
  const sharedContentLayout = async () => {
    const id = await contentId;

    const contentLayout = document.createElement('div');
    contentLayout.classList.add('content-layout');

    const contentHead = document.createElement('div');
    contentHead.classList.add('content-head');
    contentHead.innerHTML = '<span>Weather App</span>';

    const contentBody = document.createElement('div');
    contentBody.classList.add('content-body');

    if (id === 'location-search-card') {
      const searchInput = document.createElement('input');
      searchInput.placeholder = 'Enter location name';
      searchInput.id = 'search';
      searchInput.style.margin = '20px';
      searchInput.style.padding = '0.5vw';
      searchInput.style.fontSize = '1.2rem';
      searchInput.style.borderRadius = '10px';
      searchInput.style.width = '15vw';
      searchInput.maxLength = '30';

      contentBody.appendChild(searchInput);
    } else {
      document.querySelector('input').addEventListener('keypress', (e) => {
        if (e.key != 'Enter') return;

        console.log(e.target.value);

        const displayWeather = displayWeatherCardContent(e.target.value);

        if (contentBody.childNodes[0]) {
          contentBody.replaceChild(
            displayWeather,
            contentBody.childNodes[0]
          );
        } else {
          contentBody.appendChild(displayWeather);
        }

        e.target.value = '';
      });
    }

    const contentFooter = document.createElement('div');
    contentFooter.classList.add('content-footer');

    contentLayout.appendChild(contentHead);
    contentLayout.appendChild(contentBody);
    contentLayout.appendChild(contentFooter);
    document.querySelector(`#${id}`).appendChild(contentLayout);

    return contentLayout;
  };

  return sharedContentLayout();
};

export default getSharedContent;

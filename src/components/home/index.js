import cardComponent from '../../services/cardModule';
import getSharedContent from '../../services/sharedContent';
import './style.css';

const HomeComponent = (() => {
  const createHomeLayout = () => {
    const HomeLayout = document.createElement('div');
    HomeLayout.classList.add('home-layout');

    HomeLayout.appendChild(generateLeftDiv());
    HomeLayout.appendChild(generateRightDiv());

    return HomeLayout;
  }

  const generateLeftDiv = () => {
    const leftDiv = document.createElement('div');

    leftDiv.classList.add('left-div');

    leftDiv.appendChild(cardComponent('arrow-img'));
    leftDiv.appendChild(cardComponent('location-search-card'));

    getSharedContent('location-search-card');

    return leftDiv;
  }

  const generateRightDiv = () => {
    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right-div');
    rightDiv.appendChild(cardComponent('location-display-card'));

    getSharedContent('location-display-card');

    return rightDiv;
  }

  const init = () => {
    const layout = createHomeLayout();
    document.querySelector('main').appendChild(layout);
  }

  init();

  return {};
})();

export default HomeComponent;
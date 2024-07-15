import './style.css';

const HomeComponent = (() => {
  const HomeLayout = document.createElement('div');
  HomeLayout.classList.add('HomeLayout');
  document.body.appendChild(HomeLayout);
})();

export default HomeComponent;
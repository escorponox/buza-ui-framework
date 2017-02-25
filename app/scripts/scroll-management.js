import smoothScroll from './smooth-scroll';
import throttle from 'lodash.throttle';
import menuHighlight from './menu-highlight';

export default () => {
  const header = document.querySelector('header');
  const mainContent = document.getElementById('main-content');
  const sideMenu = document.getElementById('side-menu');
  const articles = document.querySelectorAll('article');
  const articlesLinks = document.querySelectorAll('.c-side-menu__link');

  const sideMenuStickyHandler = () => {
    const topOffset = header.offsetHeight + mainContent.offsetTop;
    const leftOffset = header.offsetLeft + sideMenu.offsetLeft;

    if (window.pageYOffset > topOffset) {
      mainContent.style.paddingLeft = sideMenu.offsetWidth + 'px';
      sideMenu.classList.add('is-fixed');
      sideMenu.style.left = leftOffset;
    } else {
      mainContent.style.paddingLeft = '';
      sideMenu.classList.remove('is-fixed');
      sideMenu.style.left = '';
    }
  };

  const highlightArticle = throttle(() => {
    const sectionId = menuHighlight(articles);
    articlesLinks.forEach((link) => {
      link.getAttribute('href').slice(1) === sectionId
        ? link.classList.add('is-active')
        : link.classList.remove('is-active');
    })
  }, 100);

  window.addEventListener('scroll', sideMenuStickyHandler);
  window.addEventListener('scroll', highlightArticle);

  Array.from(articlesLinks).forEach(link => {
    link.addEventListener('click', event => {
      event.stopPropagation();
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').slice(1);
      const targetPosition = document.getElementById(targetId).getBoundingClientRect().top + window.pageYOffset;
      smoothScroll(500, targetPosition);
    })
  });

}

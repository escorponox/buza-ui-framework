import smoothScroll from './smooth-scroll';
import throttle from 'lodash.throttle';
import menuHighlight from './menu-highlight';
import scrollSpy from './scrollspy';

export default () => {
  const mainContent = document.getElementById('main-content');
  const sideMenu = document.getElementById('side-menu');
  const articles = document.querySelectorAll('.c-article');
  const articlesLinks = document.querySelectorAll('.c-side-menu__link');
  const fixedHeader = document.querySelector('.c-scrollspy');

  const sideMenuStickyHandler = throttle(() => {
    const topOffset = mainContent.offsetTop;

    window.pageYOffset > topOffset ?
      sideMenu.classList.add('is-fixed') :
      sideMenu.classList.remove('is-fixed')
  }, 100);

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
  window.addEventListener('scroll', scrollSpy);

  Array.from(articlesLinks).forEach(link => {
    link.addEventListener('click', event => {
      event.stopPropagation();
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').slice(1);
      const targetPosition = document.getElementById(targetId).getBoundingClientRect().top + window.pageYOffset;
      smoothScroll(500, targetPosition, fixedHeader.offsetHeight);
    })
  });

  scrollSpy();

}

import WebFont from 'webfontloader';
import microLight from 'microlight';
import documentReady from './document-ready';
import scrollManagement from './scroll-management';
import carousels from './carousels';

WebFont.load({
    google: {
        families: [
            'Roboto:100,300,400,500,700,900:latin',
            'Source+Sans+Pro:200,300,400,600,700,900',
        ],
    },
});

const injectPlaceholderIntoTabs = () => {
  const panelArray = Array.from(document.querySelectorAll(".c-tab__panel"));
  panelArray.forEach((panel, index) => {
    const tabsTemplate = document.querySelector(".js-tab__template").content.cloneNode(true);
    tabsTemplate.firstElementChild.children[1].children[1].innerHTML = `Paint on a Brick ${index}`;
    panel.appendChild(tabsTemplate);
  });
};

documentReady(carousels);
documentReady(scrollManagement);
documentReady(injectPlaceholderIntoTabs);

// https://webpack.github.io/docs/hot-module-replacement.html
if (module.hot) {
    module.hot.accept();
}


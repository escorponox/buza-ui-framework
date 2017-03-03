import WebFont from 'webfontloader';
import microLight from 'microlight';
import documentReady from './document-ready';
import scrollManagement from './scroll-management';
import carousels from './carousels';
import injectContent from './inject-content';
import curtain from './curtain';

WebFont.load({
  google: {
    families: [
      'Roboto:100,300,400,500,700,900:latin',
      'Source+Sans+Pro:200,300,400,600,700,900',
    ],
  },
});

documentReady(carousels);
documentReady(scrollManagement);
documentReady(injectContent);
documentReady(curtain);

// https://webpack.github.io/docs/hot-module-replacement.html
if (module.hot) {
  module.hot.accept();
}


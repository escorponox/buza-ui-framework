import WebFont from 'webfontloader';
import microLight from 'microlight';
import documentReady from './document-ready';
import scrollManagement from './scroll-management';

WebFont.load({
    google: {
        families: [
            'Roboto:100,300,400,500,700,900:latin',
            'Source+Sans+Pro:200,300,400,600,700,900',
        ],
    },
});

documentReady(scrollManagement);

// https://webpack.github.io/docs/hot-module-replacement.html
if (module.hot) {
    module.hot.accept();
}

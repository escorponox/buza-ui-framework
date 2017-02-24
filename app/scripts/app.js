import WebFont from 'webfontloader';
import microLight from 'microlight';

WebFont.load({
    google: {
        families: [
            'Roboto:100,300,400,500,700,900:latin',
            'Source+Sans+Pro:200,300,400,600,700,900',
        ],
    },
});

// https://webpack.github.io/docs/hot-module-replacement.html
if (module.hot) {
    module.hot.accept();
}

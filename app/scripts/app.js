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

/* tabs placeholder */
const injectPlaceholderIntoTabs = () => {
  const panelArray = Array.from(document.querySelectorAll(".c-tab__panel"));
  panelArray.forEach((panel, index) => {
    const tabsTemplate = document.querySelector(".js-tab__template").content.cloneNode(true);
    tabsTemplate.firstElementChild.children[1].children[1].innerHTML = `Paint on a Brick ${index}`;
    panel.appendChild(tabsTemplate);
  });
};
/* accordion placeholder content */
 for (var i = 0; i < 5; i++) {

            var topics = [
  {
    'id': 'topic--1',
    'title': 'SECTION 1'
  },
  {
    'id': 'topic--2',
    'title': 'SECTION 2'
  },
  {
    'id': 'topic--3',
    'title': 'SECTION 3'
  },
  {
    'id': 'topic--4',
    'title': 'SECTION 4'
  },
  {
    'id': 'topic--5',
    'title': 'SECTION 5'
  }
];

var links = [
  {
    'id': 'link--1',
    'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at mauris ut ligula euismod rhoncus. Nulla facilisi. Duis a lacus cursus, euismod velit ornare, ultricies lectus. Integer semper facilisis velit et dignissim. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tristique mauris lacus. Ut diam velit, aliquam vel nibh eu, consequat sodales diam. Nunc rutrum nisi nunc, eu efficitur eros blandit vel. Vestibulum cursus elit vel risus egestas, dictum sollicitudin risus fermentum.'
  },
  {
    'id': 'link--2',
    'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at mauris ut ligula euismod rhoncus. Nulla facilisi. Duis a lacus cursus, euismod velit ornare, ultricies lectus. Integer semper facilisis velit et dignissim. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tristique mauris lacus. Ut diam velit, aliquam vel nibh eu, consequat sodales diam. Nunc rutrum nisi nunc, eu efficitur eros blandit vel. Vestibulum cursus elit vel risus egestas, dictum sollicitudin risus fermentum.'
  },
  {
    'id': 'link--3',
    'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at mauris ut ligula euismod rhoncus. Nulla facilisi. Duis a lacus cursus, euismod velit ornare, ultricies lectus. Integer semper facilisis velit et dignissim. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tristique mauris lacus. Ut diam velit, aliquam vel nibh eu, consequat sodales diam. Nunc rutrum nisi nunc, eu efficitur eros blandit vel. Vestibulum cursus elit vel risus egestas, dictum sollicitudin risus fermentum.'
  },
  {
    'id': 'link--4',
    'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at mauris ut ligula euismod rhoncus. Nulla facilisi. Duis a lacus cursus, euismod velit ornare, ultricies lectus. Integer semper facilisis velit et dignissim. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tristique mauris lacus. Ut diam velit, aliquam vel nibh eu, consequat sodales diam. Nunc rutrum nisi nunc, eu efficitur eros blandit vel. Vestibulum cursus elit vel risus egestas, dictum sollicitudin risus fermentum.'
  },
  {
    'id': 'link--5',
    'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at mauris ut ligula euismod rhoncus. Nulla facilisi. Duis a lacus cursus, euismod velit ornare, ultricies lectus. Integer semper facilisis velit et dignissim. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tristique mauris lacus. Ut diam velit, aliquam vel nibh eu, consequat sodales diam. Nunc rutrum nisi nunc, eu efficitur eros blandit vel. Vestibulum cursus elit vel risus egestas, dictum sollicitudin risus fermentum.'
  }
];
// populate topic
var topicTemplate = document.querySelector(".js-topic-template").content.cloneNode(true);
topicTemplate.querySelector(".js-topic__input").setAttribute("id", topics[i].id);  
topicTemplate.querySelector(".js-topic__overview").setAttribute("for", topics[i].id);
topicTemplate.querySelector(".js-topic__title").innerHTML = topics[i].title;
// populate link
var linkTemplate = document.querySelector(".js-link-template").content.cloneNode(true);
linkTemplate.querySelector(".js-link__title").innerHTML = links[i].title;
// append templates
topicTemplate.querySelector(".js-topic__content").appendChild(linkTemplate);
document.querySelector(".js-card").appendChild(topicTemplate);
}


documentReady(carousels);
documentReady(scrollManagement);
documentReady(injectPlaceholderIntoTabs);

// https://webpack.github.io/docs/hot-module-replacement.html
if (module.hot) {
    module.hot.accept();
}


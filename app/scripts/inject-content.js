export default () => {
  const panelArray = Array.from(document.querySelectorAll(".c-tab__panel"));
  panelArray.forEach((panel, index) => {
    const tabsTemplate = document.querySelector(".js-tab__template").content.cloneNode(true);
    tabsTemplate.firstElementChild.children[1].children[1].innerHTML = `Paint on a Brick ${index}`;
    panel.appendChild(tabsTemplate);
  });

  const fragment = document.createDocumentFragment();
  for (let i = 1; i < 6; i++) {
    const topicTemplate = document.querySelector(".js-topic-template").content.cloneNode(true);
    const linkTemplate = document.querySelector(".js-link-template").content.cloneNode(true);
    topicTemplate.querySelector(".js-topic__input").setAttribute("id", `topic--${i}`);
    topicTemplate.querySelector(".js-topic__overview").setAttribute("for", `topic--${i}`);
    topicTemplate.querySelector(".js-topic__title").innerHTML = `SECTION ${i}`;
    linkTemplate.querySelector(".js-link__title").innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at mauris ut ligula euismod rhoncus. Nulla facilisi. Duis a lacus cursus, euismod velit ornare, ultricies lectus. Integer semper facilisis velit et dignissim. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tristique mauris lacus. Ut diam velit, aliquam vel nibh eu, consequat sodales diam. Nunc rutrum nisi nunc, eu efficitur eros blandit vel. Vestibulum cursus elit vel risus egestas, dictum sollicitudin risus fermentum.';
    topicTemplate.querySelector(".js-topic__content").appendChild(linkTemplate);

    fragment.appendChild(topicTemplate);
  }

  document.querySelector(".js-card").appendChild(fragment);
}

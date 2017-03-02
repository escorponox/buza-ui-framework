const spy = document.getElementById('scrollspy-indicator');

export default () => {
  spy.style.width = window.pageYOffset * 100 / (document.body.offsetHeight - window.innerHeight) + 'vw';
}

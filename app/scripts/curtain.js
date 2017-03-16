const showCurtain = () => {
  const curtain = document.querySelector('.c-curtain');
  const timeout = Number(curtain.getAttribute('data-timeout'));

  curtain.classList.add('c-curtain--js-animate', 'c-curtain--show');
  setTimeout(() => {
    curtain.classList.remove('c-curtain--show');
    setTimeout(() => {
      curtain.classList.add('c-curtain--js-animate')
    }, 1000)
  }, timeout)
};

export default () => {
  document.getElementById('show-curtain').addEventListener('click', showCurtain);
}

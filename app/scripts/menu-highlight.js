export default (articles) => Array.from(articles).reverse().find(
  (article) => article.getBoundingClientRect().top + window.pageYOffset < window.pageYOffset + (window.innerHeight / 2)
).getAttribute('id')

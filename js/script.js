'use strict';

const titleClickHandler = function(event){
	event.preventDefault();
		const clickedElement = this;

  /*[DONE] remove class 'active' from all article links  */
		const activeLinks = document.querySelectorAll('.titles a.active');

		for(let activeLink of activeLinks){
		activeLink.classList.remove('active');
	}
  /* [IN PROGRESS] add class 'active' to the clicked link */

	console.log('clickedElement:', clickedElement);
	clickedElement.classList.add('active');

  /* remove class 'active' from all articles */
	const activeArticles = document.querySelectorAll('article a.active');

	for(let activeArticle of activeArticles){
  		activeArticle.classList.remove('active');
	}

  /* get 'href' attribute from the clicked link */
	const articleSelector = document.getAttribute('href a.active');
	clickedElement.articleSelector('href');

  /* find the correct article using the selector (value of 'href' attribute) */
	const targetArticle = document.querySelector('href');

  /* add class 'active' to the correct article */
	console.log('targetArticle:', targetArticle);
	clickedElement.classList.add('active');
}

const links = document.querySelectorAll('.titles a');
for(let link of links){
  link.addEventListener('click', titleClickHandler);

}

const titleListSelector = '.titles';

function generateTitleLink(articleId, articleTitle) {
	return '<li><a href="#' + articleId +'"><span>' + articleTitle + '</span></a></li>'; 
}

function generateTitleLinks() {
  let htmlList = '';
  const titleList = document.querySelector(titleListSelector);
  titleList.innerHTML = '';
  const articlesList = document.getElementsByTagName('article');
  for (const article of articlesList) {
    const id = article.getAttribute('id');
    const title = article.childNodes[1].innerHTML;
    htmlList += generateTitleLink(id, title);
  }
	titleList.innerHTML = htmlList;
}
generateTitleLinks();
'use strict';

const titleClickHandler = function(event){
	event.preventDefault();
	const clickedElement = this;
  	console.log('Link was clicked!');


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
	const articleSelector = document.getAttribute('.href a.active');
	clickedElement.articleSelector('href')
	console.log ('articleSelector')

  /* find the correct article using the selector (value of 'href' attribute) */
	const targetArticle = document.querySelector('.href')

  /* add class 'active' to the correct article */
	console.log('targetArticle:', targetArticle);
	clickedElement.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);

}
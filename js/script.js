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

const titleListSelector = '.titles',
	articleTagsSelector = '.post-tags .list';


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

	function tagClickHandler(event){
		event.preventDefault();
		const clickedArticle = this;
		const tags = article.getAttribute('data-tags');
		const articleTagsArray = articleTags.split(' ');
		for(let tag of articleTagsArray){

		}
console.log('articleTagsArray')

function generateTags(){
  /* find all articles */
  const articlesList = document.getElementsByTagName('article');
  for (const article of articlesList) {
  /* START LOOP: for every article: */
    /* find tags wrapper */
  const tagsList = article.querySelector(articleTagsSelector);
    /* make html variable with empty string */
  let htmlList = '';
	return '<li><a href="#' + articleTags +'"><span>' + articleTitleTags + '</span></a></li>'; 
		}

}
    /* get tags from data-tags attribute */
    /* split tags into array */
    /* START LOOP: for each tag */
      /* generate HTML of the link */
      /* add generated code to html variable */
    /* END LOOP: for each tag */
    /* insert HTML of all the links into the tags wrapper */
  /* END LOOP: for every article: */
  	tagsList.innerHTML = htmlList;
}

generateTags();
generateTitleLinks('[data-tags~="' + tag + '"]');


function addClickListenersToTags(){
const activeLinksTags = quertySelectorAll('a.active[href^="#tag-"]')
const tag = href.replace('#tag-', '');
}
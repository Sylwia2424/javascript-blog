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

function generateTitleLinks(customSelector = '') {
  let htmlList = '';

  const titleList = document.querySelector(titleListSelector + customSelector);
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
function generateTagLink(articleTags, tag) {
	return '<li><a href="#tag' + articleTags +'"><span>' + tag + '</span></a></li>'; 
}

function generateTags(){
  /* find all articles */
  const articlesList = document.getElementsByTagName('article');
  for (const article of articlesList) {
  	const articlesList = article.querySelector(articleTagsSelector);
	let htmlList = '';
	const articleTags = article.getAttribute('data-tags');
	const articleTagsArray = articleTags.split(' ');
	for(let tag of articleTagsArray){
    	htmlList += generateTagLink(articleTags, tag);

		}
	articlesList.innerHTML = htmlList;
	}
}
generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
	event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
		const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
 const href = article.getAttribute('href')
  /* make a new constant "tag" and extract tag from the "href" constant */

const links = article.querySelectorAll('a.active[href^="#tag-"]');
	for(let activeLink of links){
	activeLink.classList.remove('active');
	const tag = href.replace('#tag-', '');
}

  /* find all tag links with class active */
  /* START LOOP: for each active tag link */
    /* remove class active */
  /* END LOOP: for each active tag link */
  /* find all tag links with "href" attribute equal to the "href" constant */
const tagLinks = article.querySelectorAll(activeLink);
console.log(clickedElement)

  /* START LOOP: for each found tag link */
    /* add class active */
  /* END LOOP: for each found tag link */
  /* execute function "generateTitleLinks" with article selector as argument */
}
generateTitleLinks('[data-tags~="' + tag + '"]');
function addClickListenersToTags(){
  /* find all links to tags */

    /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();
/*
	function tagClickHandler(event){
		event.preventDefault();
		const clickedArticle = this;
		}

/*	function tagClickHandler(event){
		event.preventDefault();
		const clickedArticle = this;
		const articleTags = article.getAttribute('data-tags');
		const articleTagsArray = articleTags.split(' ');
		for(let tag of articleTagsArray){

		}
/*

function addClickListenersToTags()
const activeLinksTags = quertySelectorAll('a.active[href^="#tag-"]');
const tag = href.replace('#tag-', '');

generateaddClickListenersToTags();

generateAuthor();


  const author = article.querySelector('.post-author');
  post-author.innerHTML = '';
  const articlesAuthorList = document.getElementsByTagName('data-author');
  for (const author of articlesAuthorList) 
console.log('author')


generateAuthor();*/
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
	articleTagsSelector = '.post-tags .list',
	articleAutorsSelector = 'post-author';


function generateTitleLink(articleId, articleTitle) {
	return '<li><a href="#' + articleId +'"><span>' + articleTitle + '</span></a></li>'; 
}

function generateTitleLinks(customSelector = '') {
  let htmlList = '';

  const titleList = document.querySelector(titleListSelector);
  titleList.innerHTML = '';
  const articlesList = document.getElementsByTagName('article' + customSelector);
  console.log('costumSelector')
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
  	const articlesList = document.getElementsByTagName('article');
	const href = article.getAttribute('href');
	const tag = href.replace('#tag-', '');

	const links = article.getElementByClass('active');
		for(let activeLink of links){
		activeLink.classList.remove('active');
		console.log('active')
}

  /* find all tag links with class active */
  /* START LOOP: for each active tag link */
    /* remove class active */
  /* END LOOP: for each active tag link */
  /* find all tag links with "href" attribute equal to the "href" constant */
	const tagLinks = article.querySelectorAll(activeLink);
	for(href of tagLinks){
	href.classList.add('active');
}
  /* START LOOP: for each found tag link */
    /* add class active */
  /* END LOOP: for each found tag link */
  /* execute function "generateTitleLinks" with article selector as argument */
generateTitleLinks('[data-tags~="' + tag + '"]');

}
function addClickListenersToTags(){
  /* find all links to tags */
const links = document.querySelectorAll('a.active[href^="#tag-"]');
 	for(let link of links){
 	clickedElement.classList.add('active');
	console.log('links')
 }
    /* START LOOP: for each link */
    /* add tagClickHandler as event listener for that link */
  /* END LOOP: for each link */
}

addClickListenersToTags();
function generateAuthorLink(articleId, author) {
	return '<li><a href="#tag' + articleId +'"><span>' + author + '</span></a></li>'; 
}


function generateAuthors(){
	const articleList = document.getElementsByTagName('article');
 	for (const article of articleList) {
  	const articleList = article.querySelector(articleAutorsSelector);
  	let htmlList = '';
  	const articleAuthors = article.getAttribute('data-author');
    const id = article.getAttribute('id');
    const author = article.childNodes[1].innerHTML;
    htmlList += generateAuthorLink(id, author);


console.log('author')
}
	articleList.innerHTML = htmlList;


}
generateAuthors();
function addClickListenersToAuthors(event){
	event.preventDefault();
	const clickedElement = this;

}
function authorClickHandler(){

}

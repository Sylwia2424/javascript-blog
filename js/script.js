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
function generateTagLink() {
	return '<li><a href="#' + articleTags +'"><span>' + tag + '</span></a></li>'; 
}

function generateTags(){
  /* find all articles */
  const articlesList = document.getElementsByTagName('article');
  for (const article of articlesList) {

	const articleTags = article.getAttribute('data-Tags');
	let htmlList = '';

const articleTagsArray = articleTags.split(' ');
	for (let tag of articleTagsArray){
   htmlList += generateTagLink();
}
	    console.log('articleTags')
}
	tagsList.innerHTML = htmlList;
}

generateTags();
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

function generateTags(){
  const articlesList = document.getElementsByTagName('article');
  for (const article of articlesList) {
  const tagsList = article.querySelector(tagsListSelector);
  let htmlList = '';
  tagsList.innerHTML = '';

	return '<li><a href="#' + dataTags +'"><span>' + tagsList + '</span></a></li>'; 
		}
}

  	tagsList.innerHTML = htmlList;
}

generateTags()*/
generateTitleLinks('[data-tags~="' + tag + '"]');


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


generateAuthor();
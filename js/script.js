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
	clickedElement.articleSelector('href')

  /* find the correct article using the selector (value of 'href' attribute) */
	const targetArticle = document.querySelector('href')

  /* add class 'active' to the correct article */
	console.log('targetArticle:', targetArticle);
	clickedElement.classList.add('active');
}

const links = document.querySelectorAll('.titles a');
for(let link of links){
  link.addEventListener('click', titleClickHandler);

}
{
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */
  	const titleList = document.querySelector(optTitleListSelector).innerHTML = '';


  /* for each article */
 	const articles = function(optArticleSelector){
 		let html = '';
 		for(let article of articles){
 			link.addEventListener('click', generateTitleLinks);
 		}
 	
    /* get the article id */
	const articleId = document.getAttribute('article-1, article-2, article-3, article-4, article-5, article-6, article-7, article-8, article-9, article-10'){
		for(let article of articles)
	
    /* find the title element */
	const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    
    /* get the title from the title element */
    
    /* create HTML of the link */
	const linkHTML = '<li><a href="#' + articleId +'"><span>' + articleTitle + '</span></a></li>'; 
    
    /* insert link into titleList */
    html = html + linkHTML;
	}

	titleList.innerHTML = html;
}
generateTitleLinks();
}
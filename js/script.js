
'use strict';
const templates = {
	articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML)
}

const titleClickHandler = function (event) {
	event.preventDefault();
	const clickedElement = this;

	/*[DONE] remove class 'active' from all article links  */
	const activeLinks = document.querySelectorAll('.titles a.active');

	for (let activeLink of activeLinks) {
		activeLink.classList.remove('active');
	}
	/* [IN PROGRESS] add class 'active' to the clicked link */

	console.log('clickedElement:', clickedElement);
	clickedElement.classList.add('active');

	/* remove class 'active' from all articles */
	const activeArticles = document.querySelectorAll('article a.active');

	for (let activeArticle of activeArticles) {
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
for (let link of links) {
	link.addEventListener('click', titleClickHandler);

}

const titleListSelector = '.titles',
	articleTagsSelector = '.post-tags .list',
	articleAutorsSelector = '.post-author',
	optTagsListSelector = '.tags.list',
	optCloudClassCount = '5',
	optCloudClassPrefix = 'tag-size-',
	optAuthorsListSelector = '.author.list'


function generateTitleLink(articleId, articleTitle) {
	//return '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
	const linkHTMLData = { articleId, articleTitle};
const linkHTML = templates.articleLink(linkHTMLData);
}

function generateTitleLinks(customSelector = '') {
	let htmlList = '';

	const titleList = document.querySelector(titleListSelector);

	titleList.innerHTML = '';
	const articlesList = document.getElementsByTagName('article' + customSelector);
	console.log(customSelector)
	console.log(articlesList)
	for (const article of articlesList) {
		const id = article.getAttribute('id');
		const title = article.childNodes[1].innerHTML;
		htmlList += generateTitleLink(id, title);
	}
	titleList.innerHTML = htmlList;


}

function generateTitleLinksFilter(customSelector = '', tag, type) {
	let htmlList = '';

	const titleList = document.querySelector(titleListSelector);

	titleList.innerHTML = '';
	const articlesList = document.querySelectorAll(customSelector);
	console.log(articlesList)
	for (const article of articlesList) {
		const id = article.getAttribute('id');
		const title = article.childNodes[1].innerHTML;
		htmlList += generateTitleLink(id, title);
	}
	titleList.innerHTML = htmlList;

	const allArticles = document.querySelectorAll("article")
	if(type=== "tags") {
		for (let i = 0; i < allArticles.length; i++) {
			console.log(allArticles[i].getAttribute("data-tags").split(" "))
			console.log(tag)
			if (allArticles[i].getAttribute("data-tags").split(" ").includes(tag)) {
				allArticles[i].style.display = "block"
			} else {
				allArticles[i].style.display = "none"
			}
		}
	} else {
		for (let i = 0; i < allArticles.length; i++) {
			console.log(allArticles[i].getAttribute("data-author"))
			if (allArticles[i].getAttribute("data-author").includes(tag)) {
				allArticles[i].style.display = "block"
			} else {
				allArticles[i].style.display = "none"
			}
		}
	}
	

}

generateTitleLinks();
function generateTagLink(tag) {
	//return '<li><a href="#tag' + tag + '"><span>' + tag + '</span></a></li>';
	const linkHTMLData = {tag, atag};
	const linkHTML = templates.tagLink(linkHTMLData);
	
}

function generateTags() {
	const articlesList = document.getElementsByTagName('article');
	console.log(articlesList)
	for (const article of articlesList) {
		const articlesList = article.querySelector(articleTagsSelector);
		let htmlList = '';
		const articleTags = article.getAttribute('data-tags');

		const articleTagsArray = articleTags.split(' ');
		console.log(articleTagsArray)
		for (let tag of articleTagsArray) {
			htmlList += generateTagLink(tag);
		}
		articlesList.innerHTML = htmlList;
	}
	const tagsAElements = document.querySelectorAll(".list-horizontal a")
	for (let tag of tagsAElements) {
		tag.addEventListener("click", tagClickHandler)
	}
}
generateTags();

function tagClickHandler(event) {
	event.preventDefault();
	const clickedElement = this;
	const articlesList = document.getElementsByTagName('article');
	const href = clickedElement.getAttribute('href');
	const tag = href.replace('#tag', '');
	const links = document.querySelectorAll(".list-horizontal a.active")
	console.log(href)
	for (let activeLink of links) {
		activeLink.classList.remove('active');
		console.log('active')
	}

	const tagLinks = document.querySelectorAll(".list-horizontal a");
	for (let tag of tagLinks) {
		tag.classList.add('active');

	}
	console.log(tag)
	generateTitleLinksFilter(`[data-tags*='${tag}']`, tag, "tags")
}
function addClickListenersToTags() {
	/* find all links to tags */
	const links = document.querySelectorAll('a.active[href^="#tag-"]');
	for (let link of links) {
		clickedElement.classList.add('active');
		console.log('links')
	}
}

addClickListenersToTags();
function generateAuthorLink(articleAuthors) {
//	return '<li><a href="#' + articleAuthors + '"><span>' + articleAuthors + '</span></a></li>';
	const linkHTMLData = {articleAuthors, articleAuthors};
	const linkHTML = templates.articleLink(linkHTMLData);

}


function generateAuthors() {
	const articleList = document.getElementsByTagName('article');
	for (const article of articleList) {
		const articleList = article.querySelector(articleAutorsSelector);
		let htmlList = '';
		const articleAuthors = article.getAttribute('data-author');
		htmlList += generateAuthorLink(articleAuthors);
		articleList.innerHTML = htmlList;

	}
	const tags = document.querySelectorAll(".post-author a")
	for(let i = 0; i< tags.length; i++ ){
		tags[i].addEventListener("click",authorClickHandler)
	}

}

generateAuthors();

function addClickListenersToAuthors(event) {
	event.preventDefault();
	const clickedElement = this;

}
function authorClickHandler(e) {
	e.preventDefault()
	const clickedElement = this
	const href = clickedElement.getAttribute('href');
	const tag = href.replace('#', '');
	console.log(tag)
	const links = document.querySelectorAll(".list-horizontal a.active")
	console.log(href)
	
	generateTitleLinksFilter(`[data-author='${tag}']`, tag, "author")
}


function calculateTagsParams(tags){
	const params = { max: 0, min: 999999 }
	for(let tag in tags){
		if(tags[tag] > params.max){
			params.max = tags[tag];
		  }
		if(tags[tag] < params.min){
			params.min = tags[tag];
		  }
		console.log(tag + ' is used ' + tags[tag] + ' times');
	  }
	  return params;
}

function calculateTagClass(count, params){
	const normalizedCount = count - params.min;
	const normalizedMax = params.max - params.min;
	const percentage = normalizedCount / normalizedMax;
	const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );
	return '<li><a href="#' + optCloudClassPrefix + '"><span>' + classNumber + '</span></a></li>';
	
}

function generateTags(){
	/* [NEW] create a new variable allTags with an empty array */
	let allTags = {};
	/* find all articles */
	const articleList = document.getElementsByTagName('article');
	/* START LOOP: for every article: */
	for (const article of articleList) {
	 /* find tags wrapper */

		const articleList = article.querySelector('.post-tags');
	  /* make html variable with empty string */
	    let htmlList = '';
	  /* get tags from data-tags attribute */
	    const tags = article.getAttribute('data-tags');
	  /* split tags into array */
	    const articleTagsArray = tags.split(' ');
	  	  /* START LOOP: for each tag */
	    	for (let i = 0; i < articleTagsArray.length; i++) {
		/* generate HTML of the link */
		    const tag = '<li><a href="#"><span>' + articleTagsArray[i] + '</span></a></li>';
		/* add generated code to html variable */
		    htmlList += '<li>' + tag + '<li>';
		/* [NEW] check if this link is NOT already in allTags */
		      if(!allTags.hasOwnProperty(tag)){
		  /* [NEW] add generated code to allTags array */
		         allTags[tag] = 1;
	        	} else {
					allTags[tag]++;
				}
	  /* END LOOP: for each tag */
        	}
	/* insert HTML of all the links into the tags wrapper */
  articleList.innerHTML += htmlList;
	/* END LOOP: for every article: */
    }
/* [NEW] find list of tags in right column */
	const tagList = document.querySelector('.tags');
	/* [NEW] add html from allTags to tagList */
	//tagList.innerHTML = allTags.join(' ');
	const tagsParams = calculateTagsParams(allTags);
	console.log('tagsParams:', tagsParams)
	/* create variable for all links HTML code*/
	//let allTagsHTML = '';
	const allTagsData = {tags: []};
	/*LOOP: for each tag in allTags: */
	for (let tag in allTags){
		/*Generate code of a link and add it to allTagsHTML*/
		//allTagsHTML += tag + ' (' + allTags[tag] + ') ';
		//class= "calculateTagClass";
		const tagLinkHTML = '<li>' + calculateTagClass(allTags[tag], tagsParams) + '</li>';
		//allTagsHTML += tagLinkHTML;
		allTagsData.tags.push({
			tag: tag,
			count: allTags[tag],
			className: calculateTagClass(allTags[tag], tagsParams)
		  });
		//tagLinkHTML += '<li>' + calculateTagClass(allTags[tag], tagsParams) + '</li>';
	}
	//tagList.innerHTML = allTagsHTML;
	tagList.innerHTML = templates.tagCloudLink(allTagsData);
	console.log('allTagsData')

  }

  function calculateAuthorsParams(authors){
	const authorNumbers = [];
	for (let author in authors) {
	  const authorNumber = authors[author];
	  authorNumbers.push(authorNumber);
	}
  
	return {
	  min: Math.min(...authorNumbers),
	  max: Math.max(...authorNumbers)
	};
	//const params = { max: 0, min: 999999 }
	//for(let author in authors){
	//	if(authors[author] > params.max){
	//		params.max = authors[author];
	//	  }
	//	if(authors[author] < params.min){
	//		params.min = authors[author];
	//	  }
	//	console.log(author + ' is used ' + authors[author] + ' times');
	 // }
	//  return params;
	 // return '<li><a href="#' + authors[author] + '"><span>' + authors + '</span></a></li>';

}
//const authorsLinks = document.querySelectorAll(".list.authors a")
//console.log(authorsLinks)
//for(let i = 0; i < authorsLinks.length; i++) {
//	authorsLinks[i].addEventListener("click", function(e) {
////		let author = this.querySelector("span").innerText
//		console.log(author)
//		generateTitleLinksFilter(`[data-author='${author}']`, author, "author")
//	})
//}

function generateAuthors(){
	let allAuthors = {};

	const articles = document.querySelectorAll('.post');
	for (let article of articles) {
		const articleAuthor = article.getAttribute('data-author');
		const linkHTML = '<a href="#author-' + articleAuthor +'">by '+ articleAuthor +'</a>';
		const postAuthor = article.querySelector('.post-author');
		postAuthor.insertAdjacentHTML('afterbegin' , linkHTML);
		if(!allAuthors.hasOwnProperty(articleAuthor)){
			allAuthors[articleAuthor] = 1;
			} else {
			allAuthors[articleAuthor]++;
		}
	}

	const articleList = document.querySelector('.authors');
	const authorsParams = calculateAuthorsParams(allAuthors);
	let allAuthorsHTML = '';
	for ( let author in allAuthors){
		const authorLinkHTML = '<li><a class="author-size-' + calculateTagClass(allAuthors[author], authorsParams) + /*'" href="#tag-' + author + '">' + */author  + '</a> (' + allAuthors[author] + ') </li>';
		const authorsLinkHTML = '<li>' + calculateAuthorsParams(author, authorsParams) + '</li>';
		allAuthorsHTML += authorLinkHTML;
		articleList.innerHTML = allAuthorsHTML;
	}

}

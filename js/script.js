'use strict';

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
	optTagsListSelector = '.tags.list'


function generateTitleLink(articleId, articleTitle) {
	return '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
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
	return '<li><a href="#tag' + tag + '"><span>' + tag + '</span></a></li>';
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
		//let allTags={}
		//if(!allTags.hasOwnProperty(tag)){
		//allTags[tag]=1;
		//}else{
		//	allTags[tag]++;
		//}
	}
	const tagsAElements = document.querySelectorAll(".list-horizontal a")
	for (let tag of tagsAElements) {
		tag.addEventListener("click", tagClickHandler)
	}
}
generateTags();

function tagClickHandler(event) {
	/* prevent default action for this event */
	event.preventDefault();
	/* make new constant named "clickedElement" and give it the value of "this" */
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

	/* find all tag links with class active */
	/* START LOOP: for each active tag link */
	/* remove class active */
	/* END LOOP: for each active tag link */
	/* find all tag links with "href" attribute equal to the "href" constant */
	const tagLinks = document.querySelectorAll(".list-horizontal a");
	for (let tag of tagLinks) {
		tag.classList.add('active');

		/* START LOOP: for each found tag link */
		/* add class active */
		/* END LOOP: for each found tag link */
		/* execute function "generateTitleLinks" with article selector as argument */

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
	/* START LOOP: for each link */
	/* add tagClickHandler as event listener for that link */
	/* END LOOP: for each link */
}

addClickListenersToTags();
function generateAuthorLink(articleAuthors) {
	return '<li><a href="#' + articleAuthors + '"><span>' + articleAuthors + '</span></a></li>';
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

const authorsLinks = document.querySelectorAll(".list.authors a")
console.log(authorsLinks)

for(let i = 0; i < authorsLinks.length; i++) {
	authorsLinks[i].addEventListener("click", function(e) {
		let author = this.querySelector("span").innerText
		console.log(author)
		generateTitleLinksFilter(`[data-author='${author}']`, author, "author")
	})
}

const tagsLinkList  = document.querySelector(".list.tags")
//  <li><a href="#">design</a> <span>(6)</span></li>
const articles =  document.querySelectorAll("article")
const countTags = []
for(let i = 0; i < articles.length ;i++) {
	const tags = articles[i].getAttribute("data-tags").split(" ")
	for(let m = 0; m < tags.length; m++) {
		let isInside = false
		for(let k = 0; k < countTags.length; k++) {
			if(countTags[k].name == tags[m]) {
				isInside = true
				countTags[k].count++
			}
		}
		if(isInside == false) {
			countTags.push({
				name: tags[m],
				count: 1
			})
		}
	}
	
	//
}

for(let i = 0; i < countTags.length; i++){
	tagsLinkList.innerHTML += `<li><a href="#">${countTags[i].name}</a> <span>(${countTags[i].count})</span></li>`
}

console.log(countTags)
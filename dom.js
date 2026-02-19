var articleNum = 10;

function showFilter() {
	document.getElementById("newContent").style.display = "none";
	document.getElementById("filterContent").style.display = "block";
}

function showAddNew() {
	document.getElementById("filterContent").style.display = "none";
	document.getElementById("newContent").style.display = "block";
}

function addNewArticle() {
	articleNum += 1;
	
	const newArticle = document.createElement("article");
	let type = "";
	if (document.getElementById('opinionRadio').checked) {
		newArticle.classList.add("opinion");
		type = "Opinion";
	}
	else if (document.getElementById('recipeRadio').checked) {
		newArticle.classList.add("recipe");
		type = "Recipe";
	}
	else if (document.getElementById('lifeRadio').checked) {
		newArticle.classList.add("update");
		type = "Update";
	}
	newArticle.id = "a" + articleNum;
	
	const newSpan = document.createElement("span");
	newSpan.classList.add("marker");
	newSpan.innerText = type;
	
	const newTitle = document.createElement("h2");
	newTitle.innerText = document.getElementById("inputHeader").value;
	
	const newText = document.createElement("p");
	newText.innerText = document.getElementById("inputArticle").value;
	
	const readMore = document.createElement("p");
	const link = document.createElement("a");
	link.innerText = "Read more...";
	link.href = "moreDetails.html";
	readMore.appendChild(link);
	
	newArticle.appendChild(newSpan);
	newArticle.appendChild(newTitle);
	newArticle.appendChild(newText);
	newArticle.appendChild(readMore);
	document.getElementById("articleList").appendChild(newArticle);
}

function filterArticles() {
	const opinionArticles = document.getElementsByClassName("opinion")
	const recipeArticles = document.getElementsByClassName("recipe")
	const updateArticles = document.getElementsByClassName("update")
	
	for(let i = 0; i < opinionArticles.length; i++) {
		if(document.getElementById("opinionCheckbox").checked) {
			//opinion articles show (checked)
			opinionArticles[i].style.display = "block";
		}
		else {
			//opinion articles show (unchecked)
			opinionArticles[i].style.display = "none";
		}
	}
	
	for(let i = 0; i < recipeArticles.length; i++) {
		if(document.getElementById("recipeCheckbox").checked) {
			//opinion articles show (checked)
			recipeArticles[i].style.display = "block";
		}
		else {
			//opinion articles show (unchecked)
			recipeArticles[i].style.display = "none";
		}
	}
	
	for(let i = 0; i < updateArticles.length; i++) {
		if(document.getElementById("updateCheckbox").checked) {
			//opinion articles show (checked)
			updateArticles[i].style.display = "block";
		}
		else {
			//opinion articles show (unchecked)
			updateArticles[i].style.display = "none";
		}
	}
}
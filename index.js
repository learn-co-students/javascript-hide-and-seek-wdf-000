function getFirstSelector(selector){
	return document.querySelector(selector);
}

function nestedTarget(){
	return document.querySelector('.target')
}

function deepestChild(){
	// return document.getElementById('grand-node').children[0].children[0].children[0].children[0]
	var node = document.getElementById('grand-node');

	while (node.children.length > 0) {
		node = node.children[0];
	}
	
	return node;
}

function increaseRankBy(n) {
	const rankedLists = document.querySelectorAll('ul.ranked-list li')
	
	for (let i = 0; i < rankedLists.length; i++) {
		let li = rankedLists[i];
		li.innerHTML = parseInt(li.innerHTML) + n;
	}
}

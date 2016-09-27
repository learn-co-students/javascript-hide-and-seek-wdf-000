function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];
  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
  return node
}

function increaseRankBy(n) {
	const rankedLists = document.querySelectorAll('.ranked-list');
	for (let i = 0, l = rankedLists.length; i < l; i++) {
		let subList = rankedLists[i].children;
		for (let j = 0, k = subList.length; j < k; j++) {
			subList[j].innerHTML = parseInt(subList[j].innerHTML) + n;
		}
	}
}
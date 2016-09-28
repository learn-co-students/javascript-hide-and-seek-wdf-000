function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  var currentNode = document.querySelector('#grand-node');
  while (currentNode.children.length > 0) {
    currentNode = currentNode.querySelector('*')
  }
  return currentNode;
}

function increaseRankBy(n) {
  var rankLis = document.querySelectorAll(".ranked-list li");
  for (var li of rankLis) {
    li.textContent = parseInt(li.textContent) + n;
  } 
}

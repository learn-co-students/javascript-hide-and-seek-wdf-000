function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('.ranked-list li');
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    rankedLists[i].innerHTML = (parseInt(rankedLists[i].innerHTML) + n).toString(); 
  }
}

function deepestChild() {
  let nodes = document.querySelector('#grand-node');
  let tmpNode = null;

  while(nodes) {
    tmpNode = nodes;
    nodes = nodes.querySelector('div');
  }
  
  return tmpNode;
}

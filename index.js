function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  var arrayNodes = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < arrayNodes.length; i++) {
    for (var j = 0; j < arrayNodes[i].children.length; j++) {
      arrayNodes[i].children[j].innerHTML = parseInt(arrayNodes[i].children[j].innerHTML) + n
    }
  }
}

function deepestChild(){
  var node = document.getElementById('grand-node')
  var decendants = node[0]

  while (decendants) {
    node = decendants
    decendants = node.children[0]
  }

  return node;
}

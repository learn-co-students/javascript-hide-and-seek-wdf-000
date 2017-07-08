function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested div.target')
}

function deepestChild(){
  var node = document.getElementById('grand-node')
  var child = node.children[0]

  while(child) {
    node = child
    child = node.children[0]
  }
  return node
}

function increaseRankBy(n) {
  var nodes = document.querySelectorAll('.ranked-list li')
  for(let i = 0, l = nodes.length; i < l; i++) {
    nodes[i].innerHTML = parseInt(nodes[i].innerHTML) + n  
  }
}
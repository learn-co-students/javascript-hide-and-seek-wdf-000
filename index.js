function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

function increaseRankBy(n) {
  let node = document.querySelectorAll(".ranked-list li")
  for (let i = 0, l = node.length; i < l; i++) {
   node[i].innerHTML = parseInt(node[i].innerHTML) + n
  }
}

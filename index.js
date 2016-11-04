function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested")
}

function increaseRankBy(n) {

  const rankedList = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedList.length; i < l; i++) {
    let children = rankedList[i].children

  for (let j = 0, l = children.length; j < l; j++) {
    children[j].innerHTML = parseInt(children[j].innerHTML) + n
  }
 }
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

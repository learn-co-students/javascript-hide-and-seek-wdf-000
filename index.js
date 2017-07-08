function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedListItems = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < rankedListItems.length; i++) {
    rankedListItems[i].innerHTML = parseInt(rankedListItems[i].innerHTML) + n;
  }
}

function deepestChild() {
  let parent = document.querySelector('#grand-node')
  let child = parent.children[0]
  while (child) {
    parent = child
    child = child.children[0]
  }
  return parent
}

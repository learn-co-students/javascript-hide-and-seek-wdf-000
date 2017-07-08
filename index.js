function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const listItems = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = parseInt(listItems[i].innerHTML) + n;
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

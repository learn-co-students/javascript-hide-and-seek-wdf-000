function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  // return document.querySelector('#grand-node')
  //   .children[0]
  //   .children[0]
  //   .children[0]
  //   .children[0];
  let found = document.querySelector('#grand-node');
  let deepest;
  do {
    deepest = found;
    found = found.children[0];
  } while (!!found)
  return deepest;
}

function increaseRankBy(n) {
  const rankedListItems = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedListItems.length; i++) {
    rankedListItems[i].innerHTML = parseInt(rankedListItems[i].innerHTML, 10) + n
  }
}

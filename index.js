function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var el = document.querySelector('#nested .target');
  return el;
}

function deepestChild() {
  var el = document.querySelector('#grand-node');
  while (!!el.children[0]) {
    el = el.children[0];
  }
  return el;
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('ul.ranked-list li');
  // why is forEach not working? error not a function
  // rankedLists.forEach((list, index) => {
  //   list.innerHTML = (list.innerHTML + n ) .toString();
  // });
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    rankedLists[i].innerHTML = (parseInt(rankedLists[i].innerHTML) + n);
  }
}
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  var children = document.querySelectorAll('li')
  for (var i = 0, len = children.length; i < len; i++) {
    children[i].innerHTML = (parseInt(children[i].innerHTML) + n)
  }
}

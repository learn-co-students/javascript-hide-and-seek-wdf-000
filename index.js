function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return findDeepest(document.getElementById('grand-node'));
}

function findDeepest(obj) {
  if (obj.childElementCount == 0) {
    return obj;
  } else {
    return findDeepest(obj.querySelector('div'));
  }
}

function increaseRankBy(n) {
  var tmp = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0, len = tmp.length; i < len; i++) {
    tmp[i].innerHTML = ( parseInt(tmp[i].innerHTML) + n ).toString();
  }
}

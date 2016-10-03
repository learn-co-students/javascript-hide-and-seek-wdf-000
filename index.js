function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var found = document.querySelector('#grand-node')
    var result;
    do {
      result = found
      found = found.querySelector('div')
    } while (!!found)
    return result;
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list');
  for (var k = 0, l = ranks.length; k < l; k++){
    var listItems = ranks[k].children;
    for (var j = 0, m = listItems.length; j < m; j++){
      var number = listItems[j].innerText;
      listItems[j].innerText = parseInt(number, 10) + n;
    }
  }
  return ranks;
}

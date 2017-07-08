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

  for (var k = 0; k < ranks.length; k++){
    var listItems = ranks[k].children;

    for (var m = 0; m < listItems.length; m++){
      listItems[m].innerHTML = parseInt(listItems[m].innerHTML) + n;
    }
  }
  return ranks;
}

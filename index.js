function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  var numbers = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0, l = numbers.length; i < l; i++) {
    var num = parseInt(numbers[i].innerHTML);
    num += n;
    numbers[i].innerHTML = num.toString();
  }
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div div div div div');
}

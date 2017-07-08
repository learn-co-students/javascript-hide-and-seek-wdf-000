function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  return document.querySelector('#grand-node div ');
}

function increaseRankBy(n){
  const rankedList = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedList.length; i < l; i++) {
      var children = rankedList[i].children

  for (let i = 0, l = children.length; i < l; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML)+n
  }
  }
}

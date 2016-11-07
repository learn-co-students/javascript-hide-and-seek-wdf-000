function getFirstSelector(selector) {
  return document.querySelector(selector)
}



function nestedTarget() {
  return document.getElementById("nested")
}


function deepestChild() {
  return document.getElementById("grand-node")
}



function increaseRankBy(n) {
  var lists = document.querySelectorAll(".ranked-list");

    for (let i = 0, l = lists.length; i < l; i++) {
      let children = lists[i].children

      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n
      }
    }

}

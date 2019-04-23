const obj = {
  one: 1,
  two: "2",
  three: [3,1,"3"],
  four: {
    fourOne: 1,
    fourTwo: {
      fourTwoOne: 1,
    }
  },
  five: [23, [123, 1]],
  fiveOne: {
    fiveOneOne:1
  }
}

let getTree = (tree) => {
  let paths = [];

  let getPath = (obj, str) => {
    Object.keys(obj).forEach((key) => {
      if(Array.isArray(obj[key]) || typeof obj[key] == 'object'){
        getPath(obj[key], str ? str + " > " + key : key);
      }
      else{
        if(obj[key] == 1){
          paths.push(str ? str + " > " + key : key);
        }
      }
    })
  }
  getPath(tree, "");
  return paths;
}

let buildStructure = (tree) => {
  let branch = [];
  for(let i in tree){
    branch.push(tree[i].split('>'));
  }

  let showInfo = (e) => {
    let branch = e.target.classList[0];
    branch = Array.from(branch).pop();
    console.log(branch);
    if(typeof block == 'undefined'){
      block = document.createElement('div');
    }

    let strOfInfo = ``;

    for(let i in arr = getTree(obj)){
      if(i == branch){
        strOfInfo = arr[i];
      }
      block.innerHTML = `<div>${strOfInfo}</div>`;
      
      document.body.appendChild(block);
    }
    block.className = "info-block";
    block.style.top = e.clientY + "px";
    block.style.left = window.innerWidth - (window.innerWidth * 0.7) + "px";
  }

  for(let i in branch){
    for(let j in branch[i]){
      let element = document.querySelectorAll('.branch-'+i);
      let newElement = document.createElement('div');
      newElement.className = "branch-"+i;
      newElement.dataset.objValue = branch[i][j];
      newElement.innerText = branch[i][j];
      newElement.title = `This element of object with value - ${branch[i][j]}`;
      newElement.addEventListener("mousemove", showInfo);
      if(element.length > 0){
        newElement.className = newElement.className + " element";
        element[element.length-1].appendChild(newElement);
      }
      else{
        newElement.className = newElement.className + " main-element";
        document.body.appendChild(newElement);
      }
    }
    element = [];
  }
}

window.onload = () => {
  buildStructure(getTree(obj));
}



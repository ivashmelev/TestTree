const obj = {
  one: 1,
  two: "2",
  three: [3,1,"3"],
  four: {
    fourOne: 1,
    fourTwo: {
      fourTwoOne: 1
    }
  }
}

// document.getElementsByTagName('body')

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
  let mainElement;
  for(let i in tree){
    branch.push(tree[i].split('>'));
  }

  for(let i in tree){
    mainElement = document.createElement('div');
    document.body.appendChild(mainElement);
    mainElement.innerText = tree[i];

    for(let j in branch[i]){
      let element = document.createElement('div');
      if(j == 0){
        mainElement.appendChild(element);
      }
      else{
        let underElement = document.createElement('div');
        element.appendChild(underElement);
      }
    }
  }

  
}

window.onload = () => {
  buildStructure(getTree(obj));
  console.log(getTree(obj));
}




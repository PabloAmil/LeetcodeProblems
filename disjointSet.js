

let elementos = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const createDisjointSet = (element) => { 

  let disjointSet = [];
  for (let i = 0; i < element.length; i++) {
    disjointSet.push([element[i]]);
  }
  return disjointSet;
};

let disjointSet = createDisjointSet(elementos);

const find = (disjointSet, element) => {

  for (let i = 0; i < disjointSet.length; i++) {
    if (disjointSet[i].includes(element)) {
      return disjointSet[i];
    }
  }
}

const union = (disjointSet, element1, element2) => {

  let firstElementSet = find(disjointSet, element1); 
  let secondElementSet = find(disjointSet, element2);
  let newSet = [...firstElementSet, ...secondElementSet];

  let tempDisjointSet = removeSet(disjointSet, firstElementSet);
  let finalDisjointSet = removeSet(tempDisjointSet, secondElementSet);

  finalDisjointSet.push(newSet);
  return finalDisjointSet;
}

const removeSet = (disjointSet, set) => {

  let newDisjointSet = [];

  for (let i = 0; i < disjointSet.length; i++) {

    if (JSON.stringify(disjointSet[i]) === JSON.stringify(set)) {
    } else {
      newDisjointSet.push(disjointSet[i]);
    }
  }
  return newDisjointSet;
}
///////////////////////////////////////////// testing

let disjointSet2 = createDisjointSet(elementos);
let disjointSet3 = union(disjointSet2, 'A', 'C');
console.log(disjointSet3);
let disjointSet4 = union(disjointSet3, 'A', 'G');
console.log(disjointSet4);
let disjointSet5 = union(disjointSet4, 'B', 'E');
console.log(disjointSet5);


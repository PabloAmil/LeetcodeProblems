var pathSum = function(root, targetSum) {

  let listOfArrays = [];

  const traverseTree = (root, arrayOfNumbers = []) => {

    if (!root) {
      return [];
    }
    arrayOfNumbers.push(root.val);
  
    if (!root.left && !root.right) {
      let sum = arrayOfNumbers.reduce((acc, actualValue) => {
        return acc + actualValue;
      }, 0);
      if (sum === targetSum) {
        listOfArrays.push([...arrayOfNumbers]);
      }
    }

    traverseTree(root.left, arrayOfNumbers);
    traverseTree(root.right, arrayOfNumbers);
    arrayOfNumbers.pop();
  }

  traverseTree(root);
  return listOfArrays;
};
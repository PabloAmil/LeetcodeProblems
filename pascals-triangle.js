let numRows = 1;

const createTriangle = (numRows) => {

  let stages = numRows;
  let triangle = [[1]];
  let numsPerStage = 2;

  for (let i = 1; i < stages; i++) {
    triangle.push([]);
    for (let j = 0; j < numsPerStage; j++) {
      triangle[i].push('');
    }
    numsPerStage++
  }
  return triangle;
};


var generate = function (numRows) {

  let triangle = createTriangle(numRows);

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {

      let firstParent = triangle[i - 1][j - 1];
      let secondParent = triangle[i - 1][j];

      if (firstParent === '' || firstParent === undefined) {
        firstParent = 0;
      } 

      if (secondParent === '' || secondParent === undefined) {
        secondParent = 0;
      }
      let son = firstParent + secondParent;

      triangle[i][j] = son;
    }
  }

  console.log(triangle);
  return triangle;
};


generate(numRows);
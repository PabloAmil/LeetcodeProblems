const createMatrix = (m, n) => {

  let rows = m;
  let matrix = [];

  for (let i = 0; i < rows; i++){
    matrix.push(new Array(n));
  }
  return matrix;
};

var construct2DArray = function(original, m, n) {

  if (original.length !== (m * n)) {
    return [];
  }

  let matrix = createMatrix(m, n);
  let index = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++){
      matrix[i][j] = original[index];
      index++
    }
  }
  return matrix;
};

construct2DArray([1,2,3,4,5,6], 2, 3);
var checkXMatrix = function (matrix) {
  
  let n = matrix.length;
  let accumuladorDiagonal = 1;
  let acumuladorNoDiagonal = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log('estoy viendo la coordenada ', i, j, 'y el valor es ', matrix[i][j], 'y es parte de la diagonal: ', isDiagonal(matrix, i, j));

      if (isDiagonal(matrix, i, j)) {
        accumuladorDiagonal *= matrix[i][j];
      } else {
        acumuladorNoDiagonal += matrix[i][j]
      }
    }
  }
  if (accumuladorDiagonal > 0 && acumuladorNoDiagonal === 0) {
    return true;
  }
  return false;
};

const isDiagonal = (matrix, i, j) => {

  let length = matrix[0].length;
  if (i === j || i + j === length - 1) {
    return true;
  }
  return false;
};

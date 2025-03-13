const transposeMatrix = (matrix) => {

  if (!matrix || !matrix[0].length) {
    return [];
  }

  let newMatrixRows = matrix.length; 
  let newMatrixCols = matrix[0].length; 
  let newMatrix = new Array(newMatrixCols);   

  for (let i = 0; i < newMatrixCols; i++) {
    newMatrix[i] = new Array(newMatrixRows) 
    for (let j = 0; j < newMatrixRows; j++) {
      newMatrix[i][j] = matrix[j][i];
    }
  }
  return newMatrix;
};

const replaceMinusOneForMaxValue = (transposedMatrix) => {
  console.log(transposedMatrix);

  for (let i = 0; i < transposedMatrix.length; i++) {
    for (let j = 0; j < transposedMatrix[i].length; j++) {
      if (transposedMatrix[i][j] === -1){
        let biggestValueOfArray = [...transposedMatrix[i]].sort((a, b) => b - a)[0];
        transposedMatrix[i][j] = biggestValueOfArray;
      }
    }
  }
  return transposedMatrix;
};

var modifiedMatrix = function(matrix) {
  
  let transposedMatrix = transposeMatrix(matrix);
  let matrixWithReplacedValues = replaceMinusOneForMaxValue(transposedMatrix);
  let rearengedMatrix =  transposeMatrix(matrixWithReplacedValues);
  return rearengedMatrix;
};

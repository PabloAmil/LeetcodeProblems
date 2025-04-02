let mat = [[1,2],[3,4]]; 
let r = 1;
let c = 4

var matrixReshape = function(mat, r, c) {

  if (mat.length * mat[0].length !== r * c) {
    return mat;
  }

  let newMatrixLenght = r;
  let newMatrixRowLength = c;
  let newMatrix = [];
  let flattedMatrix = mat.flat(1);
  let index = 0;
  
  for (let i = 0; i < newMatrixLenght; i++) {
    let row = [];
    for (let j = 0; j < newMatrixRowLength; j++) {
      row.push(flattedMatrix[index]);
      index++;
    }
    newMatrix.push(row);
  }

  return newMatrix;
};

matrixReshape(mat, r, c);
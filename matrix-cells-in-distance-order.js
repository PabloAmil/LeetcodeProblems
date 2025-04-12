let rows = 2;
let cols = 2;
let rCenter = 0;
let cCenter = 1;


const createMatrix = (rows, cols) => {

  let rowLength = cols;
  let matrix = [];

  for (let i = 0; i < rows; i++) {
    matrix.push(new Array(rowLength).fill(''));
  }
  return matrix;
};


var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
  
  let matrix = createMatrix(rows, cols);
  let distanceAndCoordenates = [];

  console.log(matrix);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let distance =Math.abs(rCenter - i) + Math.abs(cCenter - j);
      distanceAndCoordenates.push([distance, [i,j]]);
    }
  }

  let sortedDistances = distanceAndCoordenates.sort((a, b) => a[0] - b[0]);
  let result = sortedDistances.map((index) => {
    return index[1];
  })
  return result;
};

allCellsDistOrder(rows, cols, rCenter,cCenter);
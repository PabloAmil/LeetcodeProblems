

let points = [[1,1],[2,3],[3,2]];
//let points = [[1,1],[2,2],[3,3]];

var isBoomerang = function(points) {
  
  console.log(points);

  const [x1, y1] = points[0];
  const [x2, y2] = points[1];
  const [x3, y3] = points[2];

  if ((x1 === x2 && y1 === y2) || (x2 === x3 && y2 === y3) || (x1 === x3 && y1 === y3)) {
    return false;
  }

  if (((y2 - y1) * (x3 - x2)) === (y3 - y2) * (x2 - x1)) {
    return false;
  }

  return true;
};

isBoomerang(points)




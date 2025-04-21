//let flowerbed = [1,0,0,0,1]
//let flowerbed = [1,0,0,0,1]
//let flowerbed = [1,0,0,0,0,1]
let flowerbed = [1,0,0,0,1,0,0];

var canPlaceFlowers = function(flowerbed, n) {

  let newFlowerbed = [...flowerbed];
  let possiblePlantations = 0

  if (possiblePlantations === n) {
    return true;
  }

  for (let i = 0; i < newFlowerbed.length; i++) {

    if (newFlowerbed[i] === 0 && (newFlowerbed[i - 1] === 0 || newFlowerbed[i - 1] === undefined) && (newFlowerbed[i + 1] === 0 || newFlowerbed[i + 1] === undefined)) {
      newFlowerbed[i] = 1;
      possiblePlantations++; 
      if (possiblePlantations === n) {
        return true;
      }
    }
  }
  return false;
};

console.log(canPlaceFlowers(flowerbed, 2))
var checkIfExist = function(arr) {

  if (arr.length === 0) {
    return true;
  }
  
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] === (arr[j] * 2) && i !== j) {
        return true;
      }
    }
  }
  return false;
};

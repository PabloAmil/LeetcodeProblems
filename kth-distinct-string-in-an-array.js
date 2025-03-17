const filterByDistinct = (letters) => {

  let uniqueStrings = [];
  Object.entries(letters).forEach(letter => {
    if (letter[1] === 1) {
      uniqueStrings.push(letter);
    }
  })
  return uniqueStrings;
};

var kthDistinct = function(arr, k) {

  let letters = {};
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in letters){
      letters[arr[i]]++;
    } else{
      letters[arr[i]] = 1;
    }
  }
  let uniqueStrings = filterByDistinct(letters);

  return uniqueStrings[k - 1] !== undefined ? uniqueStrings[k - 1][0] : '';
};
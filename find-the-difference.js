
//let s = "abcd", t = "abcde"
let s = "abcd", t = "edcba"
//let s = "", t = "y"


const createTableFromString = (string) => {

  let table = {};

  for (let i = 0; i < string.length; i++) {
    if (!table[string[i]]) {
      table[string[i]] = 1;
    } else {
      table[string[i]]++;
    }
  }
  return table;
};

var findTheDifference = function(s, t) {
    
  let setFromS = Object.entries(createTableFromString(s)).toString();
  let setFromT = Object.entries(createTableFromString(t));

  for (let i = 0; i < setFromT.length; i++) {
    if (!setFromS.includes(setFromT[i].toString())) {
      return setFromT[i][0];
    }
  }
};

findTheDifference(s, t);
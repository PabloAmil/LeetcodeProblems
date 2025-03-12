const createTableFromString = (s) => {

  let ocurrenceTable = {};

  for (let i = 0; i < s.length; i++){
    if (!ocurrenceTable[s[i]]) {
      ocurrenceTable[s[i]] = 1;
    } else {
      ocurrenceTable[s[i]]++;
    }
  }
  return ocurrenceTable;
};


var findValidPair = function(s) {
  
  let tableOfLetters = createTableFromString(s);
  let result = '';

  console.log(tableOfLetters);

  for(let i = 0; i < s.length - 1; i++) {
    if (s[i] === JSON.stringify(tableOfLetters[s[i]]) && s[i + 1] === JSON.stringify(tableOfLetters[s[i + 1]]) && s[i] !== s[i + 1]) {
      return result += s[i]+s[i + 1];
    }
  } 

  return result;
};
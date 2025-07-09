let licensePlate = "Ah71752";
let words = ["suggest", "letter", "of", "husband", "easy", "education", "drug", "prevent", "writer", "old"];

const formatLicensePlate = (licensePlate) => {

  let chars = 'abcdefghijklmnopqrstuvwxyz';
  let simplifiedChars = {};
  licensePlate = licensePlate.toLowerCase();

  for (let i = 0; i < licensePlate.length; i++) {
    if (chars.includes(licensePlate[i])) {
      if (!simplifiedChars[licensePlate[i]]) {
        simplifiedChars[licensePlate[i]] = 1;
      } else {
        simplifiedChars[licensePlate[i]]++;
      }
    }
  }
  return simplifiedChars;
}

const createTableUsingCharacters = (charactersTable, word) => {

  let arrayOfKeys = Object.keys(charactersTable);
  let wordTable = {}

  for (let i = 0; i < word.length; i++) {
    if (arrayOfKeys.includes(word[i])) {
      if (!wordTable[word[i]]) {
        wordTable[word[i]] = 1;
      } else {
        wordTable[word[i]]++;
      }
    }
  }
  return wordTable;
}

var shortestCompletingWord = function (licensePlate, words) {

  let charactersTable = formatLicensePlate(licensePlate);
  let result = [];

  for (let i = 0; i < words.length; i++) {

    let wordTable = createTableUsingCharacters(charactersTable, words[i]);
    let valid = true;

    if (Object.keys(charactersTable).length !== Object.keys(wordTable).length) {
      continue;
    }

    for (let [key, value] of Object.entries(charactersTable)) {
      if (wordTable[key] < value) {
        valid = false;
      }
    }
    if (valid === true) {
      result.push(words[i]);
    }
  }
  let shortestWord = result[0];

  for (let j = 1; j < result.length; j++) {
    if (result[j].length < shortestWord.length) {
      shortestWord = result[j];
    }
  }
  return shortestWord;
};

shortestCompletingWord(licensePlate, words);
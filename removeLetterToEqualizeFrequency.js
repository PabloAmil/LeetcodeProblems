const findMostRepeatedLetter = (table, word) => { 
  let mostRepeated;
  let repetitions = 1;

  Object.entries(table).forEach((element) => {
    if (element[1] > repetitions) {
      repetitions = element[1];
      mostRepeated = element[0]
    }
  })

  let index = word.indexOf(mostRepeated);
  let newWord = ''

  for (let i = 0; i < word.length; i++) {
    if (i === index) {
      continue;
    }
    newWord += word[i];
  }

  let newTable = createHashTable(newWord);
  let canBeExcluded = checkNewConcurrencies(newTable);
  return canBeExcluded;
};

const findLeastRepeatedLetter = (table, word) => {

  let leastRepeated;
  let repetitions = Infinity;

  Object.entries(table).forEach((element) => {
    if (element[1] < repetitions) {
      repetitions = element[1];
      leastRepeated = element[0]
    }
  })

  let index = word.indexOf(leastRepeated);
  let newWord = ''

  for (let i = 0; i < word.length; i++) {
    if (i === index) {
      continue;
    }
    newWord += word[i];
  }

  let newTable = createHashTable(newWord);
  let canBeExcluded = checkNewConcurrencies(newTable);
  return canBeExcluded;
}


const createHashTable = (word) => {

  let table = {};
  for (let i = 0; i < word.length; i++) {
    if (table[word[i]]){
      table[word[i]]++;
    } else {
      table[word[i]] = 1;
    }
  }
  return table;
};

const checkNewConcurrencies = (table) => {

  let dummyTable = {...table};
  let valueForAllKeys = Object.values(dummyTable)[0];
  if (Object.values(dummyTable).every(letter => letter === valueForAllKeys)){
    return true;
  }
  return false;
}


var equalFrequency = function(word) {
  
  let table = createHashTable(word);
  if (Object.values(table).every(letter => letter === 1)) {
    return true;
  }

  let mostRepeatedLetter = findMostRepeatedLetter(table, word);
  let leastRepeatedLetter = findLeastRepeatedLetter(table, word);

  return mostRepeatedLetter || leastRepeatedLetter;
};


//let pattern = "abba", s = "dog cat cat dog";
//let pattern = "abba", s = "dog cat cat fish"
//let pattern = "aaaa", s = "dog cat cat dog"
let pattern = "abba", s = "dog dog dog dog"



var wordPattern = function(pattern, s) {

  let sepparatedWords = s.split(' ');

  if (pattern.length !== sepparatedWords.length) {
    return false;
  }

  let table = {}; 

  for (let i = 0; i < pattern.length; i++) {

    
    if (!table[pattern[i]] && !Object.values(table).includes(sepparatedWords[i])) {
      table[pattern[i]] = sepparatedWords[i];
    }

    if (table[pattern[i]] !== sepparatedWords[i]) {
      return false;
    }
  }

  return true;
};

wordPattern(pattern, s);
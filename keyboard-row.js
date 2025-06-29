//let words = ["Hello","Alaska","Dad","Peace"];
//let words = ["omk"];
let words = ["adsdf","sfd"];

var findWords = function(words) {
  
  let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]; 
  let formatedRows = rows.map((row) => row.split(''));
  let formatedWords = words.map((word) => word.toLowerCase());
  let result = [];

  for (let i = 0; i < formatedWords.length; i++) {
    let actualWord = formatedWords[i].split('')
    if (actualWord.every((char) => formatedRows[0].includes(char)) || actualWord.every((char) => formatedRows[1].includes(char)) || actualWord.every((char) => formatedRows[2].includes(char)) ) {
      result.push(words[i]);
    }
  }

  return result;
};
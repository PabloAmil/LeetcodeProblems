let s = "Let's take LeetCode contest";
//let s = "Mr Ding";

var reverseWords = function(s) {
  
  let reversedWords = '';
  let splittedString = s.split(' ');

  for (let i = 0; i < splittedString.length; i++) {
    let reversedWord = splittedString[i].split("").reverse().join("");
    reversedWords += reversedWord + ' ';
  }

  return reversedWords.trimEnd();
};

reverseWords(s)
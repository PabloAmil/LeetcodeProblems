
//let strs = ["flower","flow","flight"];
//let strs = ["dog","racecar","car"];
let strs = ["cir","car"];


const getLongestWord = (strs) => {

  let longestWordLength = -Infinity;
  let longestWord = ''

  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > longestWordLength) {
      longestWordLength = strs[i].length;
      longestWord = strs[i];
    }
  }
  return longestWord;
}

var longestCommonPrefix = function(strs) {

  let longestWord = getLongestWord(strs);
  let largestPrefix = '';

  for (let i = 0; i < longestWord.length; i++) {

    if (strs.every(word => word[i] === longestWord[i])) {
      largestPrefix += longestWord[i];
    } else {
      break;
    }
  }
  return largestPrefix;
};

longestCommonPrefix(strs);
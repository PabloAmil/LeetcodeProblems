//let s = "abccccdd";
//let s = "abcccceeeeeddhhhhhhh";
//let s = "a";

var longestPalindrome = function(s) {

  let table = {};
  let length = 0;
  let hasOdd = false;
  
  for (let i = 0; i < s.length; i++) {
    
    if (!table[s[i]]) {
      table[s[i]] = 1;
    } else {
      table[s[i]]++;
    }
  }
  
  for (let value of Object.values(table)) {
    if (value % 2 === 0) {
      length += value;
    } else {
      console.log(value);
      length += value - 1;
      console.log(value - 1);
      hasOdd = true;
    }
  }

  if (hasOdd) {
    length += 1; 
  }

  return length;
};

longestPalindrome(s)
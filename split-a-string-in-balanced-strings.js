var balancedStringSplit = function(s) {
  
  let balance = 0;
  let balancedStrings = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      balance++;
    } else {
      balance--;
    }

    if (balance === 0 && i !== 0) {
      balancedStrings++;
    }
  }

  return balancedStrings;
};
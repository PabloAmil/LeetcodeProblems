var repeatedSubstringPattern = function(s) {

  if (s.length < 2) {
    return false;
  }
  
  let actualSubstring = s[0];
  for (let i = 1; i < s.length; i++) {
    let pattern = '';
    
    while (pattern.length < s.length) {
      pattern += actualSubstring;
    }

    if (pattern === s) {
      return true;
    }

    actualSubstring += s[i];

    if (actualSubstring === s) {
      return false;
    }
  }
};
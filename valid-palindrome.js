var isPalindrome = function(s) {
  
  let loweredString = s.toLowerCase();
  let stringWoutSpaces = loweredString.split('').filter(char => /[a-z0-9]/.test(char)).join('');
  let checkPalindrome = stringWoutSpaces.split('').reverse().join('');

  if (stringWoutSpaces === checkPalindrome) {
    return true;
  } 
  return false;
};
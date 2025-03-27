var reverseOnlyLetters = function(s) {

  let letters ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let stringWoLetters = '';
  let stringWletters = '';
  let result = '';
  
  for (let i = 0; i < s.length; i++) {
    if (letters.includes(s[i])){
      stringWoLetters += 'x';
      stringWletters += s[i];
    } else{
      stringWoLetters += s[i];
    }
  }

  stringWletters = stringWletters.split('').reverse().join('');

  let j = 0;
  for (let i = 0; i < stringWoLetters.length; i++) {
    if (stringWoLetters[i] === 'x'){
      result += stringWletters[j];
      j++;
    } else {
      result += stringWoLetters[i];
    }
  }

  return result;
};
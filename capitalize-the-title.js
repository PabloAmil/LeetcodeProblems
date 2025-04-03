const transformWords = (word) => {

  if (word.length <= 2) {
    return word;
  } 

  let splitedWord = word.split('');
  let uppedCasedLetter = splitedWord[0].toUpperCase();
  splitedWord[0] = uppedCasedLetter; 

  return splitedWord.join('');
};

var capitalizeTitle = function(title) {
  
  let lowercasedString = title.toLowerCase().split(' ');
  let capitalizedString = [];

  for (let i = 0; i < lowercasedString.length; i++) {
    capitalizedString.push(transformWords(lowercasedString[i]));
  }
  
  return capitalizedString.join(" ");
};

capitalizeTitle(title);
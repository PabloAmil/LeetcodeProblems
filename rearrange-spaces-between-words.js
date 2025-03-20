const rearengeString = (words, wordCount, spaces) => {

  let string = '';

  if (wordCount === 1) {
    string += words[0];
    let spacesString = ' '.repeat(spaces);
    string += spacesString;
    return string;
  }

  string += words[0];
  let numberOfSpaces = spaces / (wordCount - 1);
  let str = ' '.repeat(numberOfSpaces);

  for (let i = 1; i < wordCount; i++) {
    string += str;
    string += words[i];
  }

  let remainingSpaces = spaces % (wordCount - 1)

  if (remainingSpaces > 0) {
    let spacesString = ' '.repeat(remainingSpaces);
    string += spacesString;
  }
  return string;
};


var reorderSpaces = function(text) {
  
  let spaces = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      spaces++;
    }
  }

  let words = text.split(" ").filter((word) => word !== '');
  let wordCount = words.length;
  let result = rearengeString(words, wordCount, spaces);

  return result;
};

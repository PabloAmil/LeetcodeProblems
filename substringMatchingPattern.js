const findStarOnString = (s) => {

  let starIndex = s.indexOf('*');
  let firstSubstring = '';
  let secondSubstring = '';

  for (let i = 0; i < starIndex; i++) {
    firstSubstring += s[i];
  }
  for (let i = starIndex + 1; i < s.length; i++) {
    secondSubstring += s[i];
  }
  return [firstSubstring, secondSubstring];
};

const findStarSubstring = (s, firstIndex, LastIndex) => {

  let string = '';
  for (let i = firstIndex; i < LastIndex; i++) {
    string += s[i];
  }
  return string;
}

var hasMatch = function(s, p) {

  let substrings = findStarOnString(p);
  let indexOfFirstSubstring = s.indexOf(substrings[0]);
  let indexOfSecondSubstring = s.lastIndexOf(substrings[1])
  let indexOfFirstSubstringInS = indexOfFirstSubstring + substrings[0].length; 
  let starSubstring = findStarSubstring(s, indexOfFirstSubstringInS, indexOfSecondSubstring);
  let concatenationOfStrings = substrings[0] + starSubstring + substrings[1];

  if (s.includes(concatenationOfStrings)) {
    return true
  }
  return false;
};
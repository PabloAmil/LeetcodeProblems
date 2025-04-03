var scoreOfString = function(s) {
  
  let result = 0;
  let arrayOfString = s.split('');

  for (let i = 0; i < s.length - 1; i++) {

    let firstNumber = s.charCodeAt([i]);
    let secondNumber = s.charCodeAt([i + 1]);
    result += Math.abs(firstNumber - secondNumber);
  }

  return result;
};

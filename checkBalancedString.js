var isBalanced = function(num) {
  
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
      evenSum = evenSum + Number(num[i]);
    } else {
      oddSum = oddSum + Number(num[i]);
    }
  }
  
  if (evenSum === oddSum) {
    return true;
  }
  return false;
};
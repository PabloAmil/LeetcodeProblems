
let x = 23;


var sumOfTheDigitsOfHarshadNumber = function (x) {

  let stringOfNumber = String(x).split("").map(number => Number(number));

  let harsadNumber = stringOfNumber.reduce((acc, ind) => {
    acc += ind
    return acc
  }, 0);

  if (x % harsadNumber === 0) {
    return harsadNumber;
  }

  return -1;
};


console.log(sumOfTheDigitsOfHarshadNumber(x))
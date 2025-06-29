

//let num1 = "11", num2 = "123";
//let num1 = "456", num2 = "77";
//let num1 = "0", num2 = "0";
let num1 = "1", num2 = "9";


const compareAndAddZeroes = (numA, numB) => {

    let zeroesToAdd = numA.length - numB.length;

    for (let i = 0; i < zeroesToAdd; i++) {
      newNumber = '0' + numB;
      numB = newNumber;
    }
    return numB;
};



var addStrings = function(num1, num2) {

  if (num1.length !== num2.length) {

    if (num1.length < num2.length) {
      num1 = compareAndAddZeroes(num2, num1);
    } else {
      num2 = compareAndAddZeroes(num1, num2);
    }
  }

  let sum = [];
  let carry = 0;

  for (let i = num1.length - 1; i >= 0; i--) {
    let result = Number(num1[i]) + Number(num2[i]) + carry;

    if (result > 9) {
      let splitedNumber = result.toString().split('');
      sum.unshift(Number(splitedNumber[1]));
      carry = Number(splitedNumber[0]);
    }

    else {
      sum.unshift(result);
      carry = 0;
    }
  }

  if (carry > 0) {
    sum.unshift(carry);
  }

  return sum.join('');
};

addStrings(num1, num2);
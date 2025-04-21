
//let nums = [1,2,2,4];
//let nums = [1,1]
let nums = [2,2]


var findErrorNums = function(nums) {

  let n = nums.length;
  let count = new Array(n + 1).fill(0);
  let result = [];

  for (let num of nums) {
    count[num]++;
  }

  let repeatedNumber;
  let missingNumber;

  for (let i = 1; i < count.length; i++) {
    if (count[i] === 2) {
      repeatedNumber = i;
    }
    if (count[i] === 0) {
      missingNumber = i;
    }
  }
  result.push(repeatedNumber);
  result.push(missingNumber);

  return result;
};

findErrorNums(nums)
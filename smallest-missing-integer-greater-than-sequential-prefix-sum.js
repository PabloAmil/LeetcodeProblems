
//let nums = [1,2,3,2,5] // 6
//let nums = [3,4,5,1,12,14,13];
//let nums = [1];
let nums = [4,5,6,7,8,8,9,4,3,2,7];

var missingInteger = function(nums) {

  let sequence = [nums[0]];

  if (nums.length < 2) {
    return nums[0] + 1;
  }

  for (let j = 1; j < nums.length; j++) {

    let nextNumber = nums[j] + 1;
    let actualNumber = nums[j - 1] + 1;

    if (nextNumber === actualNumber + 1) {
      sequence.push(nums[j]);
    } else {
      break;
    }
  } 

  let sequenceSum = sequence.reduce((index, acc) => {
    return acc += index
  }, 0);

  return checkForSmallestMissingNumber(nums, sequenceSum);
};

const checkForSmallestMissingNumber = (nums, sequenceSum) => {

  if (nums.indexOf(sequenceSum) === -1) {
    //console.log(`${sequenceSum} not found`)
    return sequenceSum;
  }

  let sortedArray = nums.sort((a, b) => a - b)
  let startingIndex = nums.indexOf(sequenceSum);

  for (let i = startingIndex; i < sortedArray.length; i++) {
    if (sortedArray.indexOf(sortedArray[i] + 1) === -1) {
      return sortedArray[i] + 1;
    }
  }
}


console.log(missingInteger(nums));
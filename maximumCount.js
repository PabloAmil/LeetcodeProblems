var maximumCount = function(nums) {
  
  let posNumbers = 0;
  let negNumbers = 0;

  let negPointer = nums.length - 1;

  for (let i = 0; nums[i] < 0; i++) {
    posNumbers++;
  }

  for (let j = negPointer; nums[j] > 0; j--) {
    negNumbers++;
  }
  return Math.max(posNumbers, negNumbers);
};
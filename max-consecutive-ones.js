var findMaxConsecutiveOnes = function(nums) {

  let maxConsecutiveLength = 0;
  let currentConsecutiveLength = 0

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] === 1) {
      currentConsecutiveLength++;
      maxConsecutiveLength = Math.max(currentConsecutiveLength, maxConsecutiveLength);
    } else {
      currentConsecutiveLength = 0;
    }
  }
  return maxConsecutiveLength;
};
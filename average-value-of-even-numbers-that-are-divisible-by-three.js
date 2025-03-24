var averageValue = function(nums) {
  
  let sumOfNumbers = 0;
  let divisor = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i] % 3 === 0) {
      sumOfNumbers += nums[i];
      divisor++;
    }
  }

  if (sumOfNumbers === 0) {
    return 0;
  }

  return Math.floor(sumOfNumbers / divisor);
};

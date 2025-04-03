var arraySign = function(nums) {
  
  let result = 1;

  for (let i = 0; i < nums.length; i++) {
    result *= nums[i];
  }
  
  if (result > 0) {
    return 1
  } else if (result < 0) {
    return -1
  }

  return 0;
};

arraySign(nums);  
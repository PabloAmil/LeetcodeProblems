var minimumAverage = function(nums) {
  
  let averages = [];
  let sortedArray = nums.sort((a, b) => a - b);
  
  while (nums.length > 0) {
    const minNumber = sortedArray.shift();
    const maxNumber = sortedArray.pop();
    averages.push((minNumber + maxNumber) / 2)
  }
  return Math.min(...averages);
};
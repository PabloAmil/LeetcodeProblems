
var getCommon = function(nums1, nums2) {
  
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let minimumCommonValue = -1;

  for (let number of set1) {
    if (set2.has(number)) {
      minimumCommonValue = number;
      return minimumCommonValue;
    }
  }

  return minimumCommonValue;
};
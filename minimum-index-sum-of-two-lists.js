//let list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
//let list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"];

//let list1 = ["happy","sad","good"];
//let list2 = ["sad","happy","good"];

let list1 = ["Shogun", "Piatti", "Tapioca Express", "Burger King", "KFC"];
let list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];

var findRestaurant = function (list1, list2) {

  let leastIndexSum = Infinity;
  let result = [];

  for (let i = 0; i < list1.length; i++) {

    let wordInList2Index = list2.indexOf(list1[i])

    if (wordInList2Index !== -1) {
      let indexSum = wordInList2Index + i;

      if (indexSum < leastIndexSum) {
        result = []
        result.push(list1[i]);
        leastIndexSum = wordInList2Index + i;
      } else if (indexSum === leastIndexSum) {
        result.push(list1[i]);
      } else {
        continue;
      }
    }
  }
  return result;
};

findRestaurant(list1, list2);
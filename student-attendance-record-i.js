//let s = "PPALLP"; // true;
let s = "PPALLL"; // false;


var checkRecord = function(s) {
    
  let absCount = 0;
  let consecuteveLates = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      absCount++;
    } 

    if (s[i]  === "L" && (s[i - 1] !== undefined && s[i - 1] === "L") && (s[i - 2] !== undefined && s[i - 2] === "L")) {
      consecuteveLates = true;
    }
  }

  if (absCount < 2 && consecuteveLates === false) {
    return true;
  }

  return false;
};


console.log(checkRecord(s));
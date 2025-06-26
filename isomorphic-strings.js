

//let s = "egg", t = "add";
let s = "foo", t = "bar"
//let s = "badc", t = "baba";

var isIsomorphic = function(s, t) {
  
  if (s.length !== t.length) {
    return false;
  }

  let table = {};

  for (let i = 0; i < s.length; i++) {

    if (!table[s[i]] && !Object.values(table).includes(t[i])) {
      table[s[i]] = t[i];
    } 

    if (table[s[i]] !== t[i]) {
      return false;
    }
  }

  return true;
};

isIsomorphic(s, t);
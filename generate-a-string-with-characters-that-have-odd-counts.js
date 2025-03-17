var generateTheString = function(n) {
  
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let string = '';

  if (n % 2 === 1) {
    for (let i = 0; i < n; i++){
      string += letters[0];
    }
    return string;
  }

  for (let i = 0; i < n - 1; i++) {
    string += letters[0];
  }
  string += letters[1];
  return string;
};
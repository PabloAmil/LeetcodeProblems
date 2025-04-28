
let celsius = 36.50;
 // let celsius = 122.11;

 var convertTemperature = function(celsius) {
  
  let kelvin = celsius + 273.15000;
  let farenheit = celsius * 1.80000 + 32.00000;
  
  kelvin = Number(kelvin.toFixed(5));
  farenheit = Number(farenheit.toFixed(5));

  let ans = [kelvin, farenheit];
  return ans;
};

console.log(convertTemperature(celsius) );  
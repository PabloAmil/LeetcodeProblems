var maxDistance = function(colors) {
  
  let maximumDistance = -Infinity;
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      let distance = Math.abs(i - j)
      if ( distance > maximumDistance && colors[i] !== colors[j]){
        maximumDistance = distance;
      }
    }
  }
  return maximumDistance;
};
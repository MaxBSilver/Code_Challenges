const numberOfPairs = gloves => {
  let map = {};
  let pairs = 0;
  for(let glove of gloves) {
    if(!map[glove]) map[glove]=1;
    else { map[glove]++};
  }
  for(let color in map) {
    let num = Math.floor(map[color]/2);
    pairs = pairs + num;
  }
  return pairs;
  
};
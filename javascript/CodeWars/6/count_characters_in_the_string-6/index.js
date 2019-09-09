function count (string) {  
  let map = {};
  for(let ltr of string) {
    if(!map[ltr]) map[ltr] = 1;
    else map[ltr]++;
  }
  return map;
}
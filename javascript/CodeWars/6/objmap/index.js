function highestRank(arr){
  let map = {};
  let maxNum = [];
  let freq = 0;
  for ( let num of arr) {
    if(!map[num]) map[num] = 1;
    else map[num]++;
  }
  
  for( let num in map) {
    if(map[num] >= freq){
        freq = map[num];
    } 
  }
  
  for ( let num in map) {
    if(map[num] === freq) {
      maxNum.push(num);
    }
  }
  let numMap = maxNum.map(num => parseInt(num));
  let sorted = numMap.sort((a,b)=> b-a);
  return sorted[0];
  
  
}
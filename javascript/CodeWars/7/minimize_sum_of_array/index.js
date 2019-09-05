function minSum(arr) {
  // sort all the numbers in the array
  let sortedArr = arr.sort((a,b)=> a-b);
  const length = sortedArr.length-1;
  let multipliedArr = [];
  // iterate through the array and multiply the first and last numbers
  for(let i = 0; i < sortedArr.length/2; i++) {
    let sum = sortedArr[i] * sortedArr[length-i];
  // push summed numbers into the mulitipliedArr
    multipliedArr.push(sum);
  }
  // use reduce to sum the array of numbers
  return multipliedArr.reduce((a,b) => a+b,0)
}

//! top solutions 
function minSum(arr) {
  const l = arr.length;
  const sorted = arr.sort((a, b) => b - a);
  const max = sorted.slice(0, l/2);
  const min = sorted.slice(l/2, l).reverse();
  
  return max.reduce((sum, el, i) => sum + el * min[i], 0);
}

function minSum(a) {
  return function minSum(a) {
    return a.length && a.shift() * a.pop() + minSum(a) ;
  } ( a.sort( (v,w) => v-w ) ) ;
}
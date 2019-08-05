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
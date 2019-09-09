function generateRange(min, max, step){
  let nums = [];
  let start = min;
  for(let i = start; i <= max; i= i+step) {
    nums.push(i);
  }
  return nums;
}
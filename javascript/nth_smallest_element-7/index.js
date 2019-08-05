function nthSmallest(arr, pos){
  const sorted = arr.sort((a,b) => a-b);
  return sorted[pos-1]
}
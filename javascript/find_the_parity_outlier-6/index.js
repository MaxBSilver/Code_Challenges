const findOutlier = (integers)=> {
  let oddList = integers.filter(item => item % 2 != 0);
  let evenList = integers.filter(item => item % 2 == 0);
  if(evenList.length === 1){
    return evenList[0];
    }
  else{
    return oddList[0];
  }
}
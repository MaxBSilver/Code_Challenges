function sumMix(x){
  return x.reduce((acc,num) => {
    acc = parseInt(num) + acc;
    return acc;
  }, 0);
}
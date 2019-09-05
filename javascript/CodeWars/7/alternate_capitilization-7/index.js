function capitalize(s){
  return [0,1].map(r=>[...s]
  .map((c,i)=>i%2===r?c
  .toUpperCase():c)
  .join(''));
};
function chunk (array, size){
  const subArrays = [];
  for(let element of array){
    const last = subArrays[subArrays.length-1];
    if(!last || last.length === size) {
      subArrays.push([element]);
    }
    else {
      last.push(element)
    }
  }
  return subArrays
}

module.exports = chunk;
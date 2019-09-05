const scoreboard = (string) => {
  const score = {
    'nil' : 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five' : 5,
    'six' : 6,
    'seven' : 7,
    'eight' : 8,
    'nine' : 9
  }
 let arr = string.split(' ');
  arr = arr.reduce((acc, word) => {
    lc = word.toLowerCase();
    if(score[lc] !== undefined) acc.push(score[lc]);
    return acc;
  }, [])
  return arr;
 }

 scoreboard("The score is four nil");
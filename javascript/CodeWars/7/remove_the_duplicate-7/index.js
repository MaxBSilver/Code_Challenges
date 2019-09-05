function removeDuplicateWords (s) {
  let words = s.split(' ');
  let uniqueWords = [];
  words.forEach((word)=> {
    if(!uniqueWords.includes(word)) uniqueWords.push(word);
  })
  return uniqueWords.join(' ');
}
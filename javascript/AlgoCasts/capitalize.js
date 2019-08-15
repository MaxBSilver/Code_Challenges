function capitalize(str) {

  let words = str.split(' ');
  words = words.map(word => {
   const firstLtr = word[0].toUpperCase();
   const ltrs = word.substring(1, word.length);
   return firstLtr + ltrs;
  })
  return words.join(' ');

}

module.exports = capitalize;

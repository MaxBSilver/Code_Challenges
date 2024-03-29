// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams (stringA, stringB){
	let arrA = formatStr(stringA);
  let arrB = formatStr(stringB);
  return arrA === arrB;
}
function formatStr (string){
	const punc = [ '!', ' ', ',', '.' ];
  return string.split('')
    .filter(a => !punc.includes(a))
    .map(a => a.toUpperCase())
    .sort()
    .join('');
}

module.exports = anagrams;

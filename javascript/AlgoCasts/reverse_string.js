// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse (str){
	let string = str.split('');
  string.reverse();
	return string.join('');

	// let reversed = '';
	// for (let character of str) {
	// 	reversed = character + reversed;
	// }
	// return reversed;

	// return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('string');

module.exports = reverse;

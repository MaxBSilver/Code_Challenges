// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // // reverse the string
  // let rev = str.split('').reverse().join('');
  // // compare the original string against the reversed string
  // return rev === str ? true : false;
  // // if it is a palindrome return true
  let arr = str.split('');

  return arr.every((char, i) => {
    return char === arr[arr.length-i-1]
  })

}

module.exports = palindrome;

// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz (n){
	let numbers = [];
	for (let i = 1; i <= n; i++) {
		numbers.push(i);
	}

  return numbers.forEach((num)=> {
    if(num % 3 === 0 && num % 5 === 0) console.log('fizzbuzz');
    else if(num % 3 === 0) console.log('fizz')
    else if(num % 5 === 0) console.log('buzz')
    else console.log(num)

  })
  
}
// function fizzBuzz (n){
// 	let numbers = [];
// 	for (let i = 1; i <= n; i++) numbers.push(i);
// 	// print fizzbuzz if the number is divisible by 3 or 5
// 	for (let num of numbers) {
// 		if (num % 3 === 0 && num % 5 === 0) console.log('fizzbuzz');
// 		else if (num % 3 === 0) console.log('fizz');
// 		else if (num % 5 === 0) console.log('buzz');
// 		else console.log(num);
// 	}

// 	// print fizz if the number is divisible by 3
// 	// print buzz if the nubmer is divisible by 5
// }

module.exports = fizzBuzz;

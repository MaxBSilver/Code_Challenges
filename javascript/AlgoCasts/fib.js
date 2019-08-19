// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib (n){
	let fibNums = [];
	for (let i = 0; i <=n; i++) {
		if (fibNums[i-1]) {
			let num = fibNums[i-2] + fibNums[i - 1];
			fibNums.push(num);
		} else {
			fibNums.push(i);
		}
  }
	return fibNums.pop();
}

module.exports = fib;

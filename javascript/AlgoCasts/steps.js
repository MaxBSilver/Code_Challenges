function steps (n){
	// list out the number of steps in an array
	// iterate through the steps and create an array
	// array will then iterate and push a hash or a space based on the index of the outter array
	const stepArray = [];
	for (let i = 1; i <= n; i++) stepArray.push(i);
	for (let steps in stepArray) {
		let chunk = [];
		for (let i = 0; i < n; i++) {
			if (i <= steps) chunk.push('#');
			else chunk.push(' ');
		}
		console.log(chunk.join(''));
	}
}

module.exports = steps;
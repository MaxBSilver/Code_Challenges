//return the total number of smiling faces in the array
function countSmileys (arr){
	const noses = [ '-', '~' ];
	const eyes = [ ';', ':' ];
	const mouths = [ ')', 'D' ];
	let count = 0;
	for (let face of arr) {
		if (face.length === 3 && eyes.includes(face[0]) && noses.includes(face[1]) && mouths.includes(face[2])) count++;
		else if (face.length === 2 && eyes.includes(face[0]) && mouths.includes(face[1])) count++;
	}
	return count;
}
countSmileys([ ';]', ':[', ';*', ':$', ';-D', ':D' ]);

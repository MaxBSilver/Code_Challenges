const covfefe = str => {
	let sentence = str.split(' ');
	let covfefe = false;
	sentence = sentence.map(word => {
		if (word.includes('coverage')) {
			covfefe = true;
			return word.replace('coverage', 'covfefe');
		} else return word;
	});

	if (covfefe) return sentence.join(' ');
	else {
		sentence.push('covfefe');
		return sentence.join(' ');
  }
  
};


function covfefe(str) {
  const res = str.replace(/coverage/g, "covfefe")
  return res === str ? str + " covfefe" : res
}
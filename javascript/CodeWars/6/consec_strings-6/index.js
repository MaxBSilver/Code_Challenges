const longestConsec = (strarr, k) => {
  // generate subarrays for all possible k values
  let subs = [];
  let longest = '';
  for(let i = 0; i<strarr.length; i++){
    const subarr = strarr.slice(i, i+k);
    if(subarr.length === k) subs.push(subarr);
  }
  // iterate through and join the subarrays, based on if the length is greatest assign to a greatest length value;

  for(let sub of subs) {
    const joined = sub.join('');
    if(joined.length > longest.length) longest = joined;
  }
	return longest;
};

longestConsec([ 'zone', 'abigail', 'theta', 'form', 'libe', 'zas' ], 2);

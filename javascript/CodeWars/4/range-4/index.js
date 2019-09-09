function solution (list){
	let subArrs = [];
	for (let num of list) {
		let last = subArrs[subArrs.length - 1];
		if (!last) subArrs.push([ num ]);
		else if (last[last.length - 1] + 1 === num) subArrs[subArrs.length - 1].push(num);
		else {
			subArrs.push([ num ]);
		}
  }
  subArrs = subArrs.map((sub) => {
    if(sub.length > 2) {
      const range = sub[0] + '-' + sub[sub.length-1];
      return range;
    }
    else return sub;
  })

	return subArrs.flat().join(',');
}


solution([ -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20 ]);

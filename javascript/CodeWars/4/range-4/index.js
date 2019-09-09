function solution (list){
	// TODO: complete solution
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
	// console.log(subArrs)
	// iterate through the list
	// if a number does not have a following increment pop it directly into a new array in subArrs
	// if a number does have a following increment, continue to check if there are more;
	// remove the numbers as you increment

	return subArrs.flat().join(',');
}

//  Test.assertEquals(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")

solution([ -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20 ]);

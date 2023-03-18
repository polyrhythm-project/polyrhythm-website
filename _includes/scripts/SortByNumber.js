

//////////////////////////////
//
// SortByNumber --
//

function SortByNumber(index, selector, reverse) {
	SORTCOLUMN = index;
	let data = document.querySelectorAll(selector + " > tbody > tr");
	let datalist = [];
	for (let i=0; i<data.length; i++) {
		datalist.push(data[i]);
	}
	datalist.sort(function(a, b) {
		let A = a.cells[index].textContent;
		let B = b.cells[index].textContent;

		if (A.match(/^\s*$/)) {
			return +1;
		}
		if (B.match(/^\s*$/)) {
			return -1;
		}

		let Anum = 0;
		let Bnum = 0;
		let matches;
		if (matches = A.match(/(\d+)/)) {
			Anum = parseInt(matches[1]);
		}
		if (matches = B.match(/(\d+)/)) {
			Bnum = parseInt(matches[1]);
		}

		if (reverse) {
			return Bnum - Anum;
		} else {
			return Anum - Bnum;
		}
	});

	SORTORDER[index]++;
	if (SORTORDER[index] % 2 == 0) {
		datalist.reverse();
	}

	let body = document.querySelector(selector + " tbody");
	if (body) {
		body.innerHTML = "";
		for (let i=0; i<datalist.length; i++) {
			body.appendChild(datalist[i]);
		}
	}
}




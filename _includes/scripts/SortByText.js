

//////////////////////////////
//
// SortByText --
//

function SortByText(index, selector) {
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
		let result = A.localeCompare(B);
		return result;
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




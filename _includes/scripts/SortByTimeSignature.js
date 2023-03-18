

//////////////////////////////
//
// SortByTimeSignature --
//

function SortByTimeSignature(index, selector, reverse) {
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

		if (A.match("unmetered") && B.match("unavailable")) {
			return -1;
		}
		if (B.match("unmetered") && A.match("unavailable")) {
			return +1;
		}
		if (B.match("unmetered") && A.match("unmetered")) {
			return 0;
		}
		if (B.match("unavalable") && A.match("unavalable")) {
			return 0;
		}

		let Anum = 0;
		let Bnum = 0;
		let Aden = 0;
		let Bden = 0;
		let matches;

		if (matches = A.match(/(\d+)\/(\d+)/)) {
			Anum = parseInt(matches[1]);
			Aden = parseInt(matches[2]);
		}

		if (matches = B.match(/(\d+)\/(\d+)/)) {
			Bnum = parseInt(matches[1]);
			Bden = parseInt(matches[2]);
		}

		if ((Anum == 0) || (Aden == 0)) {
			if ((Bnum == 0) || (Bden == 0)) {
				return 0;
			}
			return +1;
		}

		if ((Bnum == 0) || (Bden == 0)) {
			if ((Anum == 0) || (Aden == 0)) {
				return 0;
			}
			return -1;
		}


		// Check for non matches here (when num/den values are 0).

		// Then sort by numerator, smallest value first:
		if (Anum < Bnum) {
			return -1;
		}
		if (Anum > Bnum) {
			return +1;
		}

		// Sort by denominator first, smallest value first:
		if (Aden < Bden) {
			return -1;
		}
		if (Aden > Bden) {
			return +1;
		}

		return 0;

	});

	SORTORDER[index]++;
	if (SORTORDER[index] % 2 == 0) {
		datalist.reverse();
	}

	//if (reverse) {
	//	datalist.reverse();
	//}

	let body = document.querySelector(selector + " tbody");
	if (body) {
		body.innerHTML = "";
		for (let i=0; i<datalist.length; i++) {
			body.appendChild(datalist[i]);
		}
	}
}




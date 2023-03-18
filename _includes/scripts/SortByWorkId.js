

//////////////////////////////
//
// SortByWorkId -- Sort by "R" or "T" prefix, then 3-letter composer code,
//       then numerically by work number for composer.
//

function SortByWorkId(index, selector) {
	let data = document.querySelectorAll(selector + " > tbody > tr");
	let datalist = [];
	for (let i=0; i<data.length; i++) {
		datalist.push(data[i]);
	}
	datalist.sort(function(a, b) {
		let A = a.cells[index].textContent;
		let B = b.cells[index].textContent;

		if (A.match(/^\s*$/)) { return +1; }
		if (B.match(/^\s*$/)) { return -1; }

		let atext = "";
		let anum = "";
		let btext = "";
		let bnum = "";

		let matches;

		matches = A.match(/^([TR])\d/);
		let aprefix = "";
		if (matches) {
			aprefix = matches[1];
		}

		matches = B.match(/^([TR])\d/);
		let bprefix = "";
		if (matches) {
			bprefix = matches[1];
		}

		if (aprefix != bprefix) {
			return aprefix.localeCompare(bprefix);
		}

		if (A.match(/^[TR]\d/)) {
			A = A.replace(/^[TR]/, "");
		}
		if (B.match(/^[TR]\d/)) {
			B = B.replace(/^[TR]/, "");
		}

		let workid = 0;
		matches = A.match(/^([a-z]{3})-(\d+)$/i);
		if (matches) {
			atext = matches[1];
			anum = parseInt(matches[2]);
			workid = 1;
		}

		matches = B.match(/^([a-z]{3})-(\d+)$/i);
		if (matches) {
			btext = matches[1];
			bnum = parseInt(matches[2]);
			workid = 1;
		}

		if (workid) {  // Not example ID
			if (atext.match(/^\s*$/)) { return +1; }
			if (btext.match(/^\s*$/)) { return -1; }

			if (atext !== btext) {
				return A.localeCompare(B);
			}

			return anum - bnum;
		} else { // Example ID
			return A.localeCompare(B);
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




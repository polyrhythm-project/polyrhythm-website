

//////////////////////////////
//
// FlipName --
//

function FlipName(bname) {
	let matches = bname.match(/^([^,]+),\s+([^,]+)$/);
	if (!matches) {
		return bname;
	} else {
		return matches[2] + " " + matches[1];
	}
}




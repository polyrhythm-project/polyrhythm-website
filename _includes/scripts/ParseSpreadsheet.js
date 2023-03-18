

//////////////////////////////
//
// ParseSpreadsheet --
//

function ParseSpreadsheet(text) {
	let lines = text.match(/[^\r\n]+/g);
	let mapping = {};
	let data = lines[0].split(/\t/);
	for (let i=0; i<data.length; i++) {
		mapping[i] = data[i];
	}
	let output = [];
	for (let i=1; i<lines.length; i++) {
		data = lines[i].split(/\t/);
		let item = {};
		for (let j=0; j<data.length; j++) {
			item[mapping[j]] = data[j];
		}
		output.push(item);
	}
	return output;
}




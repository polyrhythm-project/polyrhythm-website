

//////////////////////////////
//
// PrepareResourceFileIndex --
//  e1, /resources/pdf/e1/index.txt == Supplementary edition for scores (first additional editon).
//  e2, /resources/pdf/e2/index.txt == Supplementary edition for scores (second additional editon).
//  recording, /resources/recordings/acoustic/index.txt == Audio recording of example
//

function PrepareResourceFileIndex(tag, indexfile, callback) {
	let storagename = tag + "_INDEX";
	if (sessionStorage[storagename] && !sessionStorage[storagename].match(/^\s*$/)) {
		let index = JSON.parse(sessionStorage[storagename]);
		FILEINDEX[tag] = index;
		if (callback) {
			callback(tag, FILEINDEX);
		}
	} else {
		// download and store
		let request = new XMLHttpRequest();
		request.addEventListener("load", function () {
         if (this.responseText.match(/<\/html>/)) {
				console.log("WARNING: file", indexfile, "not found.");
				console.log("CONTENTS:", this.responseText);
				return;
			}
			let list = this.responseText.split(/\r?\n/);
			let index = {};
			for (let i=0; i<list.length; i++) {
				let item = list[i];
				if (!item) {
					continue;
				}
				if (item.match(/^\s*$/)) {
					continue;
				}
				if (item.match(/^\s*#/)) {
					continue;
				}
				index[item] = 1;
			}
			sessionStorage[storagename] = JSON.stringify(index);
			FILEINDEX[tag] = index;
			if (callback) {
				callback(tag, FILEINDEX);
			}
		});
		request.open("GET", indexfile);
		request.send();
	}
}




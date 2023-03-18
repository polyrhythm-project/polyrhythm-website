

//////////////////////////////
//
// GenerateWorklist --
//

function GenerateWorklist(list) {
	let tlist = {};
	let workid;
	let output = [];
	for (let i=0; i<list.length; i++) {
		workid = list[i][INDEX_Suter_Work_ID];
		if (tlist[workid]) {
			tlist[workid]["@examples"].push(list[i]);
		} else {
			tlist[workid] = list[i];
			tlist[workid]["@examples"] = [];
			tlist[workid]["@examples"].push(list[i]);
			output.push(list[i]);
		}
	}
	return output;
}




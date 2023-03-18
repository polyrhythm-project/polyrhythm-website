

//////////////////////////////
//
// FindWorkById --
//

function FindWorkById(wid, works) {
	if (!wid) {
		return null;
	}
	if (!works) {
		works = WORKLIST;
	}
	for (let i=0; i<works.length; i++) {
		if (works[i][INDEX_Suter_Work_ID] === wid) {
			return works[i];
		}
	}
	return null;
}




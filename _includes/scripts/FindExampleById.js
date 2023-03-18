

//////////////////////////////
//
// FindExampleById --
//

function FindExampleById(exid, examples) {
	if (!exid) {
		return null;
	}
	if (!examples) {
		examples = EXAMPLELIST;
	}
	for (let i=0; i<examples.length; i++) {
		if (examples[i][INDEX_Suter_Example_ID] === exid) {
			return examples[i];
		}
	}
	return null;
}




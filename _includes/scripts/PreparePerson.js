

//////////////////////////////
//
// PreparePerson --
//

function PreparePerson(name) {
	if (!name) {
		console.log("Error empty name in PreparePerson():", name);
		return name;
	}
	return name.replace(/\(.*?\)/g, "").replace(/\[(.*?)\]/g, "");
}



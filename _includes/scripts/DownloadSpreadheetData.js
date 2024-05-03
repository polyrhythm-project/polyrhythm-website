

//////////////////////////////
//
// DownloadSpreadsheetData --  Download the master index and store
//    in a global let called EXAMPLELIST.
//

function DownloadSpreadsheetData(callback) {

	// Show busy cursor while downloading index:
	setTimeout(function () {
		document.body.classList.add("wait");
	}, 0);

	// Check if the index is already stored in sessionStorage:
	if (sessionStorage.EXAMPLELIST) {
		try {
			EXAMPLELIST = JSON.parse(sessionStorage.EXAMPLELIST);
			if (callback) {
				callback();
			}
			setTimeout(function () {
				document.body.classList.remove("wait");
			}, 50);
			return;
		} catch (err) {
			delete sessionStorage.EXAMPLELIST;
		}
	}

	// Get JSON version from above spreadsheet:
	let id ="AKfycbx6PtpHYz5rk-QLHN7VSgPCyQgYwJWsATELrG04ytuQpEq-qRbruWdDEhiE0tW8chtQ";

	let url = "https://script.google.com/macros/s/" + id + "/exec";
	let request = new XMLHttpRequest();
	request.addEventListener("load", function () {
		try {
			EXAMPLELIST = JSON.parse(this.responseText);
			sessionStorage.EXAMPLELIST = this.responseText;
		} catch (error) {
			console.log("ERROR: ", error.message);
			// Do a backup access method of some sort.
		}
		if (callback) {
			callback();
		}
		setTimeout(function () {
			document.body.classList.remove("wait");
		}, 50);
	});
	request.open("GET", url);
	request.send();
}




function getExternalLinks() {
	var links = document.querySelectorAll('a');
	var result = [];
	for (var i = 0; i < links.length; i += 1) {
		result.push(links[i].hostname);
	}
	console.log(result);
}
function getSiteFromURL(url) {
	var regex = /^https?:\/\/(www\d\.)?([^\/]+).*$/;
	var match = url.match(regex);
	// console.log(match);
	if (match)
		return match[2];
	else
		return null;
}

window.onload = function() {
	var titles = [
	    "an interesting web page",
	    "check us out on the world wide web",
	    "thank you for visiting the world wide web",
	    "this is the web page",
	    "you are now online",
	    "this web page is now active",
	    "you are now viewing the web page",
	    "thank you for using the internet",
	    "I want to personally thank you for using the internet",
	    "the digital home of this web content",
	    "digital web interface online",
	    "web page activated and in full effect",
	    "unknown subtitle detected - error code [GEN:random number]",
	    "do not click back or this page will disappear forever",
	    "you are now fucking with gas, homie",
	    "please let this web page consume you",
	    "[GEN:random number] seconds until system self-destructs"
	];
	var randomNum = Math.floor(Math.random() * 1000000);
	titles = titles.map(function(title) {
		return title.replace(/\[GEN:random number\]/g, randomNum);
	});
	var title = " " + titles[Math.floor(Math.random()*titles.length)];
	document.title += title;
	document.querySelector('h1').innerHTML += title;
}

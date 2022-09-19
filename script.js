enterView({
	selector: "section",
	enter: function (el) {
		el.classList.add("entered");
	},
});

var frameNumber = 0, // start video at frame 0
	// lower numbers = faster playback
	playbackConst = 1000,
	// get page height from video duration
	setHeight = document.getElementById("set-height"),
	// select video element
	vid = document.getElementById("v0");
// var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener("loadedmetadata", function () {
	setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

// Use requestAnimationFrame for smooth playback
function scrollPlay() {
	var frameNumber = window.pageYOffset / playbackConst;
	vid.currentTime = frameNumber;
	window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);

function swRegistration() {
	const heart = ["font-size: 20px", "padding: 12px", "margin: 4px 0 4px 4px", "color: rgba(238,58,136,1)"].join(";");
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/video-scroll-two/sw.js", {
				scope: "/video-scroll-two/",
			})
			.then(function (registration) {
				console.log("%c❤️", heart);
			})
			.catch(function (err) {
				console.log(err);
			});
	}
}

function consoleText() {
	console.clear();
	const styles = [
		"color: white",
		"background: rgba(238,58,136,1)",
		"font-size: 18px",
		"padding: 12px",
		"margin: 6px 0 6px 14px",
	].join(";");
	const styles2 = ["font-size: 14px", "padding: 16px", "margin: 6px 0 6px 0", "color: rgba(238,58,136,1)"].join(";");
	console.log("%cHello World! I'm Emmanuel.", styles);
	console.log("%cThank you for checking out my work!", styles2);
	const gradient = [
		"font-size: 14px",
		"color: #fff",
		"width: 200px",
		"padding: 8px",
		"margin: 6px 0 6px 14px",
		"border-radius: 4px",
		"background: rgba(238,58,136,1)",
		"background: linear-gradient( 109.6deg, rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1% )",
	].join(";");
	console.log("%cPortfolio%chttps://bit.ly/3QQr1Ux", gradient, styles2);
	console.log("%cLinkedin %chttps://bit.ly/3cygAD4", gradient, styles2);
	console.log("%cGithub   %chttps://bit.ly/3iwQC6U", gradient, styles2);
	console.log("%cThe README   %chttps://bit.ly/3LoO07y", gradient, styles2);
	console.log("%cHave a wonderful day!", styles2);
}

swRegistration();
consoleText();

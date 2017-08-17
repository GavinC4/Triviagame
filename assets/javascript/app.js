var imageTracker = "first";
function change() {
	var image = document.getElementById('trial');
	console.log(image);
	if (imageTracker === "first") {
		image.src = "assets/images/abstract-q-c-300-300-2.jpg";
		imageTracker = "second";
	}
	else if (imageTracker === "second") {
		image.src = "assets/images/abstract-q-c-300-300-6.jpg";
		imageTracker = "third";
	}
	else {
		image.src = "assets/images/abstract-q-c-300-300-3.jpg";
		imageTracker = "fourth";
	}
};
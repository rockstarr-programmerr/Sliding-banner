let bannerStatus = 1;
let bannerTimer = 4000;

window.onload = function() {
	bannerLoop();
}

let startBannerLoop = setInterval(function() {
	bannerLoop();
}, bannerTimer)

document.querySelector('#main-banner').onmouseenter = function() {
	clearInterval(startBannerLoop);
}

document.querySelector('#main-banner').onmouseleave = function() {
	startBannerLoop = setInterval(function() {
		bannerLoop();
	}, bannerTimer);
}

document.querySelector('.ban-btn-next').onclick = function() {
	bannerLoop();
}

document.querySelector('.ban-btn-prev').onclick = function() {
	bannerLoopBackward();
}

function bannerLoop() {
	if (bannerStatus === 1) {
		document.querySelector('#imgban2').style.opacity = '0';

		setTimeout(function() {
			document.querySelector('#imgban1').style.right = '0px';
			document.querySelector('#imgban1').style.zIndex = '1000';
			document.querySelector('#imgban2').style.right = '-1200px';
			document.querySelector('#imgban2').style.zIndex = '1500';
			document.querySelector('#imgban3').style.right = '1200px';
			document.querySelector('#imgban3').style.zIndex = '500';
		}, 500)
		
		setTimeout(function() {
			document.querySelector('#imgban2').style.opacity = '1';
		}, 1000)

		bannerStatus = 2;
	} else if (bannerStatus === 2) {
		document.querySelector('#imgban3').style.opacity = '0';

		setTimeout(function() {
			document.querySelector('#imgban2').style.right = '0px';
			document.querySelector('#imgban2').style.zIndex = '1000';
			document.querySelector('#imgban3').style.right = '-1200px';
			document.querySelector('#imgban3').style.zIndex = '1500';
			document.querySelector('#imgban1').style.right = '1200px';
			document.querySelector('#imgban1').style.zIndex = '500';
		}, 500)
		
		setTimeout(function() {
			document.querySelector('#imgban3').style.opacity = '1';
		}, 1000)

		bannerStatus = 3;
	} else if (bannerStatus === 3) {
		document.querySelector('#imgban1').style.opacity = '0';

		setTimeout(function() {
			document.querySelector('#imgban3').style.right = '0px';
			document.querySelector('#imgban3').style.zIndex = '1000';
			document.querySelector('#imgban1').style.right = '-1200px';
			document.querySelector('#imgban1').style.zIndex = '1500';
			document.querySelector('#imgban2').style.right = '1200px';
			document.querySelector('#imgban2').style.zIndex = '500';
		}, 500)
		
		setTimeout(function() {
			document.querySelector('#imgban1').style.opacity = '1';
		}, 1000)

		bannerStatus = 1;
	}
}

function bannerLoopBackward() {
	if (bannerStatus === 1) {
		document.querySelector('#imgban1').style.opacity = '0';

		setTimeout(function() {
			document.querySelector('#imgban2').style.right = '0px';
			document.querySelector('#imgban2').style.zIndex = '1000';
			document.querySelector('#imgban3').style.right = '-1200px';
			document.querySelector('#imgban3').style.zIndex = '500';
			document.querySelector('#imgban1').style.right = '1200px';
			document.querySelector('#imgban1').style.zIndex = '1500';
		}, 500)
		
		setTimeout(function() {
			document.querySelector('#imgban1').style.opacity = '1';
		}, 1000)

		bannerStatus = 3;
	} else if (bannerStatus === 2) {
		document.querySelector('#imgban2').style.opacity = '0';

		setTimeout(function() {
			document.querySelector('#imgban3').style.right = '0px';
			document.querySelector('#imgban3').style.zIndex = '1000';
			document.querySelector('#imgban1').style.right = '-1200px';
			document.querySelector('#imgban1').style.zIndex = '500';
			document.querySelector('#imgban2').style.right = '1200px';
			document.querySelector('#imgban2').style.zIndex = '1500';
		}, 500)
		
		setTimeout(function() {
			document.querySelector('#imgban2').style.opacity = '1';
		}, 1000)

		bannerStatus = 1;
	} else if (bannerStatus === 3) {
		document.querySelector('#imgban3').style.opacity = '0';

		setTimeout(function() {
			document.querySelector('#imgban1').style.right = '0px';
			document.querySelector('#imgban1').style.zIndex = '1000';
			document.querySelector('#imgban2').style.right = '-1200px';
			document.querySelector('#imgban2').style.zIndex = '500';
			document.querySelector('#imgban3').style.right = '1200px';
			document.querySelector('#imgban3').style.zIndex = '1500';
		}, 500)
		
		setTimeout(function() {
			document.querySelector('#imgban3').style.opacity = '1';
		}, 1000)

		bannerStatus = 2;
	}
}
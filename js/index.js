// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-83134235-1', 'auto');
ga('send', 'pageview');

// Mobile
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$(".ad-desktop").hide();
	$(".ad-mobile").show();
}
else {
	$(".ad-mobile").hide();
	$(".ad-desktop").show();
}

// Fixed Header
$(window).scroll(function () {
	if( $(window).scrollTop() > $('.navbar').offset().top && !($('.navbar').hasClass('posi'))){
	$('.navbar').addClass('posi');
	} else if ($(window).scrollTop() == 0){
	$('.navbar').removeClass('posi');
	}
});

$('#check1').click(function() {
	$('.checked').animate({marginTop: 2 + 'vh'}, 300);
});

$('.main-link').click(function() {
	$('.checked').animate({marginTop: 2 + 'vh'}, 300);
});

$('#check2').click(function() {
	$('.checked').animate({marginTop: 14 + 'vh'}, 300);
});

$('.about-link').click(function() {
	$('.checked').animate({marginTop: 14 + 'vh'}, 300);
});

$('#check3').click(function() {
	$('.checked').animate({marginTop: 26 + 'vh'}, 300);
});

$('.result-link').click(function() {
	$('.checked').animate({marginTop: 26 + 'vh'}, 300);
});

$('#check4').click(function() {
	$('.checked').animate({marginTop: 38 + 'vh'}, 300);
});

$('.teacher-link').click(function() {
	$('.checked').animate({marginTop: 38 + 'vh'}, 300);
});

$('#check5').click(function() {
	$('.checked').animate({marginTop: 50 + 'vh'}, 300);
});

$('.contacts-link').click(function() {
	$('.checked').animate({marginTop: 50 + 'vh'}, 300);
});

$('.about .left').click(function() {
	$('.abouts').css({marginLeft: '0%'});
	$('.about').css({marginLeft: '100%'});
});

$('.result .left').click(function() {
	$('.results').css({marginLeft: '0%'});
	$('.result').css({marginLeft: '100%'});
});

$('.teacher .left').click(function() {
	$('.teachers').css({marginLeft: '0%'});
	$('.teacher').css({marginLeft: '100%'});
});

$('.abouts .right').click(function() {
	$('.abouts').css({marginLeft: '-100%'});
	$('.about').css({marginLeft: '0%'});
});

$('.results .right').click(function() {
	$('.results').css({marginLeft: '-100%'});
	$('.result').css({marginLeft: '0%'});
});

$('.teachers .right').click(function() {
	$('.teachers').css({marginLeft: '-100%'});
	$('.teacher').css({marginLeft: '0%'});
});

$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});
});
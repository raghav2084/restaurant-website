$(document).ready(function() {
	
	
	/*
	Added jQuery Waypoint plugin from
	http://imakewebthings.com/waypoints/
	
	Used wapoint function
	http://imakewebthings.com/waypoints/guides/jquery-zepto/
	*/
	$('.js--section-features').waypoint(function(direction) {
		if(direction == "down"){
			$('nav').addClass('sticky');
		}else {
			$('nav').removeClass('sticky');
		}	
	}, {
  		offset: '60px' /*SHow the sticky nav 60 px before 
						section features
						*/
	});
	
	/*Scroll on buttons*/
	$('.js--scroll-to-plans').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top},  1000);
	
	});
	
	$('.js--scroll-to-start').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top},  1000);
	
	});
	
	/*Smooth scrolling for Navs*/
	$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 1000);
});
	
	/*Animation on scroll using Animation.css & Waypoint*/
	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});
	
	/*Mobile Imgae fadeInUp*/
	$('.js--wp-iphone').waypoint(function(direction){
		$('.js--wp-iphone').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});
	/*City Imgae fadeIn*/
	$('.js--wp-cities').waypoint(function(direction){
		$('.js--wp-cities').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});
	/*Premium Box pulse*/
	$('.js--wp-pre').waypoint(function(direction){
		$('.js--wp-pre').addClass('animated pulse');
	}, {
		offset: '50%'
	});
});
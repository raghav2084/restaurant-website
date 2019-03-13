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
	
	/*Mobile Navigation
	when you click on the nav icon:
	1. Display the nav items 
	2. change the icon from hamberger to cross
	3. toggle (open close a box)
	*/
	$('.js--nav-icon').click(function(){
		/*store the result of click nav item*/
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');
		/*#3 open & close the box*/
		nav.slideToggle(200);
		
		if(icon.hasClass('ion-ios-menu')){
			icon.addClass('ion-ios-close');
			icon.removeClass('ion-ios-menu');
		}else {
			icon.addClass('ion-ios-menu');
			icon.removeClass('ion-ios-close');
		}
		
	});

});
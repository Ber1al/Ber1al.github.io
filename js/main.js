"use strict";

function showNavMenu(){
	let showMenu = document.querySelector('.show-menu');
	let nav = document.querySelector('nav');
	showMenu.addEventListener('click', function(){
		nav.classList.toggle('menu-visible');
	});
}
showNavMenu();

$(document).ready(function(){
  $('.slider').slick({
  	arrows: false,
  	autoplay: true,
  	autoplaySpeed: 2500,
  	dots: true,
  	fade: true,
  	speed: 900
  });
});

new WOW().init();

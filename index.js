jQuery.noConflict()
('use strict')
jQuery(document).ready(function () {

	
	jQuery('.fancybox').fancybox()
	/*Owl carousel1*/

	let carousel = jQuery('#slider_img')

	carousel.owlCarousel({
		items: 4,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: [''],
		dots: true,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000,
			},
			479: {
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000,
			},
			767: {
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000,
			},
			991: {
				items: 3,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000,
			},
			1099: {
				items: 4,
				dots: false,
				mouseDrag: true,
			},
		},
	})
	/*Owl carousel1*/
	/*Owl carousel2*/
	let carousel2 = jQuery('#project_img')

	carousel2.owlCarousel({
		items: 2,
		autoplay: false,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: false,
		nav: true,
		navText: [''],
		dots: false,
		mouseDrag: true,
		margin: 25,
		stagePadding: 0,
		autoWidth: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,

				nav: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000,
			},
			479: {
				items: 1,
				nav: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000,
			},
			767: {
				items: 1,
				nav: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000,
			},
			991: {
				items: 2,
				nav: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000,
			},
			1099: {
				items: 2,
				nav: true,
				mouseDrag: true,
			},
		},
	})
	/*Owl carousel2*/
	/*Owl carousel3*/
	let carousel3 = jQuery('#testimonials_img')

	carousel3.owlCarousel({
		items: 1,
		autoplay: false,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: false,
		nav: true,
		navText: ['', ''],
		dots: false,
		mouseDrag: true,
		margin: 0,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,

				nav: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000,
			},
			479: {
				items: 1,
				nav: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000,
			},
			767: {
				items: 1,
				nav: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000,
			},
			991: {
				items: 1,
				nav: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000,
			},
			1099: {
				items: 1,
				nav: true,
				mouseDrag: true,
			},
		},
	})
	/*Owl carousel3*/
	
	jQuery('.burger_menu').click(function(){
				

				jQuery('.nav_menu').show(1000);
				jQuery('.burger_menu').hide();
				jQuery('.closeX').show(1000);
				jQuery('.closeX').click(function(){
				jQuery('.nav_menu').hide(1000);
				jQuery('.closeX').hide();
				jQuery('.burger_menu').show(1000);
				});
			});

})


const navbar2 = document.getElementById("navbar2");
const navbar2Toggle = navbar2.querySelector(".navbar2-toggle");

function opennav() {
  navbar2.classList.add("opened");
  navbar2Toggle.setAttribute("aria-expanded", "true");
}
console.log();
function close1() {
  navbar2.classList.remove("opened");
  navbar2Toggle.setAttribute("aria-expanded", "false");
}

navbar2Toggle.addEventListener("click", function () {
  if (navbar2.classList.contains("opened")) {
    close1();
  } else {
    opennav();
  }
});

const navbar2Menu = navbar2.querySelector("#navmenu");

navbar2Menu.addEventListener("click", close1);

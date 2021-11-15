
if ($(window).width() > 768) {
	// 版頭右上小AD輪撥
	var mySwiper = new Swiper('.slider_box .swiper-container', {
		effect: 'fade',
		loop: true,
		mousewheel: false,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		on: {
			init: function () {
				swiperAnimateCache(this);
				swiperAnimate(this);
			},
			slideChangeTransitionEnd: function () {
				swiperAnimate(this);
			}
		}
	});

}
// 陰影開關
var shadowOff = true;
if ($(window).width() < 767) {
	shadowOff = false;
}

// 全版版頭輪撥
var mainSwiper = new Swiper('#main_slider .swiper-container', {
	// 加到第11個loop會有bug 關掉就沒事了
	// loop: true,
	// effect: 'fade',
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},

	// 更改輪播效果
	effect: "cube",
	grabCursor: true,
	cubeEffect: {
		shadow: shadowOff,
		slideShadows: true,
		shadowOffset: 20,
		shadowScale: 0.94,
	},

	pagination: {
		el: '#main_slider .swiper-pagination',
		clickable: true,
	},
	mousewheel: false,
	observer: true, //修改swiper自己或子元素的时候，自动初始化swiper
	observeParents: true, //修改swiper的父元素时，自动初始化swiper
	navigation: {
		nextEl: '#main_slider .swiper-button-next',
		prevEl: '#main_slider .swiper-button-prev',
	},
	on: {
		slideNextTransitionStart: function (swiper) {
			// gsap.to('.box2',{duration:0.5,scale:1.1 })
			// alert('123')
		},
		slideNextTransitionEnd: function () {
			const t1 = gsap.timeline({})
			t1.to('.box2', { duration: 0.2, scale: 1.1 })
				.to('.box2', { duration: 0.2, scale: 1 })
		},
	}
});

// 行動裝置 品牌選單
$('.navbar-toggler').click(function () {
	$(this).toggleClass('is-open');
	$('.nav_wrap, .nav_mb').toggleClass('visible');
	$('.menuMask').toggleClass('cover-bg');
	$('body, html').toggleClass('act');
});
if ($(window).width() < 769) {
	mbMenu();
}
var resizeTimer = null;
$(window).bind('resize', function () {
	if (resizeTimer) clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function () {
		mbMenu();
	}, 300);
});
function mbMenu() {
	$('.nav_wrap ul li').click(function () {
		$(this).nextAll('li').removeClass('act');
		$(this).prevAll('li').removeClass('act');
		$(this).toggleClass('act');
	});
}

// 側邊欄控制
$(window).scroll(function () {
	if ($(window).scrollTop() >= 10) {
		$('.right_box').addClass('show');
	} else {
		$('.right_box').removeClass('show');
	}
});
$('.right_menu .arrow_box').click(function () {
	$('.right_menu .arRight').toggleClass('rotate');
	$('.right_menu .menu_box').toggleClass('gohide');
});
$('.left_menu .arrow_box').click(function () {
	$('.left_menu .arLeft').toggleClass('rotate');
	$('.left_menu .menu_box').toggleClass('gohide');
});
$('li.subevent a, .menuMask').click(function () {
	$('.left_menu .menu_box, .menuMask').toggleClass('show');
});
$(window).scroll(function () {
	if ($(window).scrollTop() >= 50) {
		$('.right_menu, .left_menu').addClass('subfixed');
	} else {
		$('.right_menu, .left_menu').removeClass('subfixed');
	}
});
// hashtag Smooth scrolling
var $clickTag = $('area[href^="#"], .menu_box a[href^="#"], .movie_box a[href^="#"], .right_box a[href^="#"], a.gotheme');
$clickTag.click(function (event) {
	var target = $(this.getAttribute('href'));
	if ($(window).width() < 769) {
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 50
			}, 300);
		}

		return false;
	} else {
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 300);
		}
		return false;
	}
});

// modal 影片
var $videoSrc;
$('.video-btn').click(function () {
	$videoSrc = $(this).data("src");
});
$('#video_box').on('shown.bs.modal', function (e) {
	$("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
});
$('#video_box').on('hide.bs.modal', function (e) {
	$("#video").attr('src', $videoSrc);
})

if ($(window).width() > 767) {
	const t1 = gsap.timeline({ duration: 1 })
	t1.from('.main_vip', { ease: "bounce.out", y: -600 })
		.to('.main_vip', { ease: "bounce.out", y: 0 })
		.from('.slide1027', { ease: "bounce.out", y: -500 })
		.to('.slide1027', { ease: "bounce.out", y: 0 })
		.to('.pic', { y: 50, yoyo: true, repeat: -1 });
}
if ($(window).width() < 767) {
	const t1 = gsap.timeline({ duration: 1 })
	t1.from('.main_title_m', { ease: "bounce.out", y: -600 })
		.to('.main_title_m', { ease: "bounce.out", y: 0 })
		.from('.slide1027', { ease: "bounce.out", y: -700 })
		.to('.slide1027', { ease: "bounce.out", y: 0 })
		.to('.pic', { y: 30, yoyo: true, repeat: -1 });
}


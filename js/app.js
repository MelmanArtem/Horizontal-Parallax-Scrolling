new Swiper('.slider', {
	/*direction: 'vertical',*/ /*вертикальная прокрутка (опция)*/
	speed: 1800,
	mousewheel: {
		enabled: true, /*включение*/
		sensitivity: 2 /*чувствительность скролла*/
	},
	spaceBetween: 15,
	parallax: true,
	/*freeMode: true*/ /*для свободного листания, а не постраничного*/
})
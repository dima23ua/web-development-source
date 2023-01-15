import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

const swiper = new Swiper('.slider-team', {
	slidesPerView: 'auto',
	spaceBetween: 30,
	pagination: {
		clickable: true,
		el: '.swiper-pagination',
	},

});

const workSwiper = new Swiper('.work-btn-slider', {
	slidesPerView: 'auto',
});

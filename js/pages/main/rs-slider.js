/* ====================================
Инициализация слайдера в блоке rs-slider
==================================== */
function initMainSliders() {
	if (document.querySelector('.rs-slider__slider')) {
		// Перечень слайдеров
		const rsSlider = new Swiper('.rs-slider__slider', {
			// // Автопрокрутка
			// autoplay: {
			// 	// Пауза между прокруткой
			// 	delay: 10000,
			// 	// Закончить на последнем слайде
			// 	stopOnLastSlide: false,
			// 	// Отключить после ручного переключения
			// 	disableOnInteraction: true,
			// },

			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// при изменении родительских элементов слайдера
			observeParents: true,
			// при изменении дочерних элементов слайдера
			observeSlideChildren: true,

			// Скорость смены слайдов
			speed: 500,

			// Включение/отключение
			// перетаскивание на ПК
			simulateTouch: false,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,

			// pagination: {
			// 	el: '.rs-slider__pagination',
			// 	clickable: true,
			// },

			navigation: {
				nextEl: '.rs-slider__button-next',
				prevEl: '.rs-slider__button-prev',
			},

			// effect: 'fade',
			slidesPerView: 1,
			spaceBetween: 35,
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initMainSliders();
});

/* ====================================
Отрисовка линии
==================================== */
(function () {
	document.onreadystatechange = () => {
		if (document.readyState === 'complete') {
			let el = document.querySelectorAll('.lazy-line-painter');
			el.forEach(e => {
				let myAnimation = new LazyLinePainter(e, { "ease": "easeLinear", "strokeWidth": 20, "strokeOpacity": 0.3, "strokeColor": "#fff", "strokeCap": "square", "delay": 1000 });
				myAnimation.paint();
			});
		}
	}
})();
/* ====================================
Инициализация слайдера в блоке rs-reviews
==================================== */
function initReviewsSliders() {
	// Перечень слайдеров
	if (document.querySelector('.rs-reviews__slider')) {
		new Swiper('.rs-reviews__slider', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 5000,
				// Закончить на последнем слайде
				stopOnLastSlide: false,
				// Отключить после ручного переключения
				disableOnInteraction: true,
			},

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
			simulateTouch: true,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,

			pagination: {
				el: '.rs-reviews__pagination',
				clickable: true,
				
			},

			grabCursor: true,

			// Брейкпоинты(адаптив)
			// Шрина экрана
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 15,
					slidesPerGroup: 1,
					centeredSlides: true,
				},
				768: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 30,
					centeredSlides: false,
				},
			},
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initReviewsSliders();
});

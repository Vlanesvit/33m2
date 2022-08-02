/* ====================================
Мобильное меню
==================================== */
const burger = () => {
	const mobileMenu = document.querySelectorAll('.menu');

	mobileMenu.forEach(menu => {
		const burgerBtn = menu.querySelector('.menu__icon');
		const burgerMenuBody = menu.querySelector('.menu__body');

		if (burgerBtn) {
			burgerBtn.addEventListener('click', function () {

				// Показать меню
				burgerBtn.classList.toggle('_icon-open');
				burgerMenuBody.classList.toggle('_menu-active');
			});
		}
	});
}
if (document.querySelectorAll('.menu')) {
	burger()
}

/* ====================================
Табы контактов в мобильной версии
==================================== */
const tabСontactMob = () => {
	const contactBlock = document.querySelectorAll('.contact');

	contactBlock.forEach(contact => {
		// Кнопка
		const tabsHandlesElems = contact.querySelectorAll('.rs-header [data-tabs-handler]');
		// Контент
		const tabsContentElems = contact.querySelectorAll('.rs-header [data-tabs-field]');

		for (const tabElem of tabsHandlesElems) {
			tabElem.addEventListener('click', () => {
				// Удаление у всех кнопок активного класса
				tabsHandlesElems.forEach((tabItem) => {
					tabItem.classList.remove('_tab-active');
				});

				// Активный класс нажатой кнопке
				tabElem.classList.add('_tab-active');

				// Сравнение значения дата-атрибутов и переключение, если значения схожи
				tabsContentElems.forEach((tabContent) => {
					if (tabContent.dataset.tabsField === tabElem.dataset.tabsHandler) {
						tabContent.classList.add('_content-active');
					} else {
						tabContent.classList.remove('_content-active');
					}
				});
			});
		}
	});

}
if (document.querySelectorAll('.contact [data-tabs-handler]') && document.querySelectorAll('.contact [data-tabs-field]')) {
	tabСontactMob()
}


/* ====================================
Шапка при скролле
==================================== */
const onFixedHead = () => {
	const header = document.querySelector('.rs-header');

	function fixBotHead() {
		header.classList.toggle('_menu-fixed', window.scrollY > 0);
	}

	window.addEventListener('scroll', function () {
		fixBotHead()
	})
	window.addEventListener('load', function () {
		fixBotHead()
	})
	window.addEventListener('resize', function () {
		fixBotHead()
	})
}
if (document.querySelector('.rs-header')) {
	onFixedHead()
}


/* ====================================
Якорный скролл к блоку
==================================== */
function smoothScroll() {
	const smoothLink = document.querySelectorAll('.smooth-link > a');
	smoothLink.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault();

			const IdBlock = e.target.getAttribute('href').substr(1);
			document.getElementById(IdBlock).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	});
}
if (document.querySelector('.smooth-link > a')) {
	smoothScroll()
}

function headerNavigation() {
	const contentBlocks = document.querySelectorAll('.smooth-block');
	const sidebarLinks = document.querySelectorAll('.smooth-link');

	/* ====================================
	Поместить ссылку при скролле к блоку
	==================================== */
	function markLink() {
		contentBlocks.forEach(block => {
			let top = window.scrollY;
			let offset = block.offsetTop - 300;
			let heightBlock = block.offsetHeight;
			let IdBlock = block.getAttribute('id');

			if (top >= offset && top < offset + heightBlock) {
				sidebarLinks.forEach(link => {
					link.classList.remove('current_menu_item');
					document.querySelector('.smooth-link > a[href*=' + IdBlock + ']').closest('.smooth-link').classList.add('current_menu_item');
				});
			} else {
				sidebarLinks.forEach(link => {
					document.querySelector('.smooth-link > a[href*=' + IdBlock + ']').closest('.smooth-link').classList.remove('current_menu_item');
				});
			}
		});
	}
	window.addEventListener('scroll', markLink)
	window.addEventListener('load', markLink)
}
if (document.querySelector('.smooth-link') && document.querySelector('.smooth-block')) {
	headerNavigation()
}



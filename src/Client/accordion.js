(function () {
	(accordion => {
		for (let i = 0; i < accordion.length; i++) {
			const items = accordion[i].querySelectorAll('.accordion__item');

			[].forEach.call(items, item => {
				const trigger = item.querySelector('.accordion__title');
				const activeClass = 'accordion__item_expanded';
				const content = item.querySelector('.accordion__content');

				trigger.addEventListener('click', () => {
					content.style.height = content.scrollHeight + 'px';

					if (item.classList.contains(activeClass)) {
						if (content.scrollHeight > 0) {
							content.style.height = null;
						}

						item.classList.remove(activeClass);
					} else {
						const func = () => {
							content.style.height = null;
							content.removeEventListener('transitionend', func);
						};

						item.classList.add(activeClass);
						content.addEventListener('transitionend', func, false);
					}
				});
			});
		}
	})(document.querySelectorAll('.accordion'));
}());

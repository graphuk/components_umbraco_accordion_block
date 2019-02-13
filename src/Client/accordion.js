(function () {
	((accordion, accordionItem, accordionTitle, accordionContent) => {
		for (let i = 0; i < accordion.length; i++) {
			const items = accordion[i].querySelectorAll(accordionItem);
			const activeClass = accordionItem.replace('.', '') + '_expanded';

			[].forEach.call(items, item => {
				const trigger = item.querySelector(accordionTitle);
				const content = item.querySelector(accordionContent);

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
	})(document.querySelectorAll('.js-accordion'), '.accordion__item', '.accordion__title', '.accordion__content');
}());

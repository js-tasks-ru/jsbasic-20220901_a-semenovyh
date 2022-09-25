function toggleText() {
	const button = document.querySelector('.toggle-text-button');
	const text = document.getElementsByTagName('div')[0];

		function handler() {
			if (text.hidden === true) {
				text.hidden = false;
			} else {
				text.hidden = true;
			}
		}
		button.addEventListener("click", handler);
}

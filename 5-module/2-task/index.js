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
		/*function handler2() {
			text.hidden = false;
		}	*/
	
		button.addEventListener("click", handler);
		//button.addEventListener("click", handler2);
}

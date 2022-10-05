function initCarousel() {
	
	let offset = 0;
	const carousel__inner = document.querySelector('.carousel__inner');
  	let arrow_right = document.querySelector('.carousel__arrow_right');
	let arrow_left = document.querySelector('.carousel__arrow_left');
	let slides = document.querySelectorAll('.carousel__slide');

	arrow_right.addEventListener("click", turn_right);
	arrow_left.addEventListener("click", turn_left);
	carousel__inner.style.transform = 'translateX(0px)';
	
	let width = slides[0].offsetWidth;
	arrow_left.style.display = 'none';

	function turn_right() {
			arrow_left.style.display = '';
			offset >= slides.length-1 ? false : offset++;
			if (offset > 2) {
				arrow_right.style.display = 'none';
			} else {
				arrow_right.style.display = '';
			}
			carousel__inner.style.transform = `translateX(-${offset*width}px)`;
			
	}

	function turn_left() {
		
		offset <= 0 ? false : offset--;
		offset == 0 ? 	arrow_left.style.display = 'none' : arrow_left.style.display = '';
			
			carousel__inner.style.transform = `translateX(-${offset*width}px)`;
	}
  }
	
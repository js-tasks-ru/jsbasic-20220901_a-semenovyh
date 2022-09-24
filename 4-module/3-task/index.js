function highlight(table) {
			
	for(let row of table.children[1].rows) {
				
		if(row.cells[3].hasAttribute('data-available')) {
			if(row.cells[3].dataset.available == 'true') {
				row.classList.add('available');
			}
			if(row.cells[3].dataset.available == 'false') {
				row.classList.add('unavailable');
			}
		} else {
			row.hidden = true;
		}
		if(row.cells[2].textContent == 'm') row.classList.add('male');
		if(row.cells[2].textContent == 'f') row.classList.add('female');
		
		let age = +row.cells[1].textContent;
		if(age < 18) row.style.textDecoration = 'line-through';
	}
  
}

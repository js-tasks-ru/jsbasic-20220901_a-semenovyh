function highlight(table) {

	for(let i = 1; i < table.rows.length; i++) {

		let row = table.rows[i];
		if((row.cells[3].innerTEXT == 'true')? row.className = 'available' : row.className = 'unavailable');
		if(row.cells[3].innerTEXT.hasAttribute) {row.style = 'hidden'};
		if(row.cells[2] == 'm') {row.className = 'male'};
		if(row.cells[2] == 'f') {row.className = 'female'};
		if(row.cells[1] < 18) {row.style.textDecoration = '[line-through]'};
		

	}
  
}

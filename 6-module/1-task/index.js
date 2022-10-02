/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
	rows = null;
	elem = null;


  	constructor({rows}) {
		this.rows = rows;
		this.render();
 	}


  	render() {
		this.elem = document.createElement('table');
		this.elem.innerHTML = this.template();
		
		this.elem.addEventListener('click', this.onButtonClick);
	}


	onButtonClick = (event) => {
	 	if (event.target.closest('button')) {
			event.target.closest('tr').remove();
		}	 	
	}


	createElement(html) {
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = html;
  
		return tempDiv.firstElementChild;
  }

	template() {
		return `
			<thead>
				<tr>
					<th>Имя</th>
					<th>Возраст</th>
					<th>Зарплата</th>
					<th>Город</th>
					<th>X</th>
				</tr>
			</thead>
			<tbody>
				${this.rows.map((value) => `<tr><td>${value.name}</td>
					<td>${value.age}</td>
					<td>${value.salary}</td>
					<td>${value.city}</td>
					<td><button>X</button></td>
				</tr>`).join('\n')}
			</tbody>
		`
	}

}

const table = new UserTable({
	rows: [
		{
			name: 'Вася',
			age: 25,
			salary: 1000,
			city: 'Самара'
		},
		{
			name: 'Петя',
			age: 30,
			salary: 1500,
			city: 'Москва'
		}
	]
});

document.body.append(table.elem);
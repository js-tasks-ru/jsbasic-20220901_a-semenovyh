let calculator = {
	read(a, b) {
		this.a = Number(a);
		this.b = Number(b) ;
		},
	sum() {
		return this.a + this.b;
	},
	mul() {
		return this.a * this.b;
	}
	};
	
calculator.read(3, 5);
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

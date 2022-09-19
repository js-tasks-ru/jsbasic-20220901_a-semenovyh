function showSalary(users, age) {
	return users
	.filter((item) => item['age'] <= age)
	.map(({ balance, name }) => name + ', ' + balance)
	.join('\n');
}

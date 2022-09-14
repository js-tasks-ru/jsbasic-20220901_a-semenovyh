let salaries = {
	John: 1000,
	Ann: 1600,
	Pete: 1300,
	month: 'December',
	currency: 'USD',
	isPayed: false
 }
 
 function sumSalary(zp) {
	let sum = 0;
		for(let key in zp) {
			if (typeof zp[key] != 'number' || isFinite(zp[key]) == false) {
				continue;
			}
		sum += zp[key];
		}
return(sum);
}
console.log(sumSalary(salaries));
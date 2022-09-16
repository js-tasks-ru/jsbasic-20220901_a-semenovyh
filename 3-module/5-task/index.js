function getMinMax(str) {
	let arr = str
	.split(' ')
	.filter(item => (Number(item) && isFinite(item)))
	.sort( (a, b) => a - b );
	
	const min = Number(arr[0]);
	const max = Number(arr[arr.length - 1]);
	let result = {min, max};
	
return result;
}

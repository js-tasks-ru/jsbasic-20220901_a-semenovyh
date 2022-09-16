function getMinMax(str) {
	let arr = str
	.split(' ')
	.filter(item => (Number(item) && isFinite(item)))
	.map(item => +item)
	.sort( (a, b) => a - b );
	
	const min = arr[0];
	const max = arr[arr.length - 1];
	let result = {min, max};
	
return result;
}

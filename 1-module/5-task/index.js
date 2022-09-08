function truncate(str, maxlength) {
	return (str.length > maxlength)?
	str.slice(0, maxlength-1) + "…" : str; 
}
alert( truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
alert( truncate('Всем привет!', 20));


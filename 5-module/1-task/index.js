function hideSelf() {
	document.getElementsByTagName('button')[0].onclick = function(){
		document.getElementsByTagName('button')[0].hidden = true;
	}
}

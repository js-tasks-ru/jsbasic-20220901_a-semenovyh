function makeFriendsList(friends) {
  let newUl = document.createElement('ul');
  	for (let item of friends) {
		let newLi = document.createElement('li');
		newLi.innerHTML = `${item.firstName} ${item.lastName}`;
		newUl.appendChild(newLi);
	}
	return(newUl);
}

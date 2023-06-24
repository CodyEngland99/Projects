const navBar = document.getElementById("drop-down");

navBar.addEventListener("click", function () {
	const navDrop = document.getElementById("nav-item-wrap");

	if (navDrop.classList.contains("display")) {
		navDrop.classList.remove("display");
	} else {
		navDrop.classList.add("display");
	}
	console.log(navDrop);
});

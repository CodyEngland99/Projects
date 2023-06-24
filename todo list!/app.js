const taskElementAdd = function () {
	//getting classes and making html elements
	const taskContainer = document.getElementById("task-container");
	const input = document.getElementById("input-field");
	const task = document.createElement("div");
	const text = document.createElement("p");
	const emptyMsg = document.getElementById("input-empty");
	const imgDelete = document.createElement("img");
	imgDelete.addEventListener('click', function() {
    deleteBtn(task);
  });
	//getting classes and making html elements

	//checking input value
	if (input.value === null || input.value === "") {
		input.style.border = "solid 3px #c62368";
		emptyMsg.style.display = "block";
	}
	//checking input value
	else {
		//adding elements to page

		taskContainer.append(task);
		task.classList.add("task");

		task.append(text);
		text.innerHTML = input.value;

		emptyMsg.style.display = "none";
		input.style.border = "none";

		imgDelete.classList.add("delete");
		imgDelete.src = "/img/delete.png";
		task.append(imgDelete);

		void task.offsetWidth;

		// Slide in the new element
		task.style.transform = "translateX(0)";

		input.value = "";
		//adding elements to page
	}
};

//delete single element
const deleteBtn = (task) => {
		task.classList.remove("task");
		task.className += "task-out";
		while (task.firstChild) {
			task.removeChild(task.firstChild);
		}
		setTimeout(function () {
			task.remove();
		}, 1000);
	};


//clear btn
const clearBtn = function () {
	let parentEle = document.getElementById("task-container");

	parentEle.innerHTML = "";
};

//clear btn

const clearTask = document
	.querySelector(".clear-btn")
	.addEventListener("click", clearBtn);

const subBtn = document
	.querySelector(".myButton")
	.addEventListener("click", taskElementAdd);

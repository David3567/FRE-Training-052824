// * ~~~~~~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~~~~~~
export const View = (() => {
	const domstr = {
		todolist: "#todolist_container",
		deletBtn: ".delet-btn",
		todoinput: ".todolist__input",
	};

	const createTmp = (todos) => {
		let tmp = "";
		todos.forEach((todo) => {
			tmp += `
		    <li>
		      <span>${todo.id}-${todo.title}</span>
		      <button class="delet-btn" id="${todo.id}" >X</button>
		    </li>
		  `;
		});
		return tmp;
	};

	const render = (ele, tmp) => {
		ele.innerHTML = tmp;
	};

	return {
		render,
		domstr,
		createTmp,
	};
})();
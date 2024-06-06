// * ~~~~~~~~~~~~~~~~~~~~~~~~ API ~~~~~~~~~~~~~~~~~~~~~~~~
const API = (() => {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	const todoPath = "todos";

	getTodos = () =>
		fetch([baseUrl, todoPath].join("/")).then((response) =>
			response.json()
		);

	getTodo = (id) =>
		fetch([baseUrl, todoPath, id].join("/")).then((response) =>
			response.json()
		);

	return {
		getTodos,
		getTodo,
	};
})();

// * ~~~~~~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~~~~~~
const View = (() => {
	const domstr = {
		todolist: "#todolist_container",
		deletBtn: ".delet-btn",
	};

	const createTmp = (todos) => {
		let tmp = "";
		todos.forEach((todo) => {
			tmp += `
		    <li>
		      <span>${todo.title}</span>
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

// * ~~~~~~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~~~~~~
const Model = ((api, view) => {
	const { getTodos, getTodo } = api;

	class State {
		#todolist = [];

		get todolist() {
			return this.#todolist;
		}

		set todolist(newtodos) {
			this.#todolist = [...newtodos];

			const ele = document.querySelector(view.domstr.todolist);
			const tmp = view.createTmp(this.#todolist);
			view.render(ele, tmp);

			const deletBtns = document.querySelectorAll(
				view.domstr.deletBtn
			);
			deletBtns.forEach((btn) => {
				btn.addEventListener("click", (e) => {
					if ("." + e.target.className === view.domstr.deletBtn) {
						this.todolist = this.#todolist.filter(
							(todo) => +todo.id !== +e.target.id
						);
					}
				});
			});
		}
	}

	return {
		getTodos,
		getTodo,
		State,
	};
})(API, View);

// * ~~~~~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~~~~~
const Controller = ((view, model) => {
  const state = new model.State();

	const init = () => {
		model.getTodos().then((todos) => {
			state.todolist = todos;
		});
	};

	return {
		init,
	};
})(View, Model);

Controller.init();

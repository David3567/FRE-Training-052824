import {View} from './view.js';
import {API} from './api.js';

// * ~~~~~~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~~~~~~
export const Model = ((api, view) => {
	class State {
		#todolist = [];

		constructor() {}

		get todolist() {
			return this.#todolist;
		}

		set todolist(newtodos) {
			this.#todolist = [...newtodos];

			const ele = document.querySelector(view.domstr.todolist);
			const tmp = view.createTmp(this.#todolist);
			view.render(ele, tmp);
		}
	}

	class Todo {
		constructor(title) {
			this.userId = 56;
			this.title = title;
			this.completed = false;
		}
	}

	return {
		State,
		Todo,
		...api,
	};
})(API, View);
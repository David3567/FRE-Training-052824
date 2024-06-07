// * ~~~~~~~~~~~~~~~~~~~~~~~~ API ~~~~~~~~~~~~~~~~~~~~~~~~
export const API = (() => {
	// const baseUrl = "https://jsonplaceholder.typicode.com";
  const baseUrl = 'http://localhost:4232';
	const todoPath = "todos";

	const getTodos = () =>
		fetch([baseUrl, todoPath].join("/")).then((response) =>
			response.json()
		);

	const getTodo = (id) =>
		fetch([baseUrl, todoPath, id].join("/")).then((response) =>
			response.json()
		);

	const deleteTodo = (id) =>
		fetch([baseUrl, todoPath, id].join("/"), {
			method: "DELETE",
		});

	const addTodo = (todo) =>
		fetch([baseUrl, todoPath].join("/"), {
			method: "POST",
			body: JSON.stringify(todo),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => response.json());

	return {
		getTodos,
		getTodo,
		deleteTodo,
		addTodo,
	};
})();

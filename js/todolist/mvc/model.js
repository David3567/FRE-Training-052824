// import {View} from './view.js';
// import {API} from './api.js';

// // * ~~~~~~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~~~~~~
// export const Model = ((api, view) => {
// 	class State {
// 		#todolist = [];

// 		constructor() {}

// 		get todolist() {
// 			return this.#todolist;
// 		}

// 		set todolist(newtodos) {
// 			this.#todolist = [...newtodos];

// 			const ele = document.querySelector(view.domstr.todolist);
// 			const tmp = view.createTmp(this.#todolist);
// 			view.render(ele, tmp);
// 		}
// 	}

// 	class Todo {
// 		constructor(title) {
// 			this.userId = 56;
// 			this.title = title;
// 			this.completed = false;
// 		}
// 	}

// 	return {
// 		State,
// 		Todo,
// 		...api,
// 	};
// })(API, View);

// hello = 'hello';

// var hi = 'hi';

// let hihi = 'hihi';


// // this.hi = 'thishi'
// console.log(global.hi); // hi, hello

// const arr = [];
// arr.reduce((acc, ele, i, arr) => {}, init);

// (function () {
//   (() => {
//     const one = two = {
//       name: 'David'
//     }
//     console.log(one === two);
//   })();

//   try {
//     console.log(one);
//   } catch (error) {
//     console.log('one is missing');
//   }
//   try {
//     console.log(two);
//   } catch (error) {
//     console.log('two is missing');
//   }
// })();

class EventEmitter {

  register(event, listener) {}

  emit(event) {}
}

const a = new EventEmitter();
const b = new EventEmitter();

a.register('e1', () => console.log('a1'));
a.register('e2', () => console.log('a2'));

b.register('e1', () => console.log('b1'));
b.register('e1', () => console.log('b11'));

b.emit('e1'); // print b1 and b11
a.emit('e2'); // print a2
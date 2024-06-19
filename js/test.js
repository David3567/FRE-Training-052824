// const idx = require('./index');

// console.log(idx);

// const arr = [1, 2, 3];

// Array.prototype.myMap = function(cb) {
// 	const result = [];
// 	for (let i = 0; i < this.length; i++){
// 		result.push(cb(this[i], i, this));
// 	}
// 	return result;
// }


// arr.myMap(ele => ele * 2); // [2, 4, 6]

// class EventEmitter {
// 	events = {};

// 	register(event, cb) {
// 		if (!this.events[event]) {
// 			this.events[event] = [cb];
// 		} else {
// 			this.events[event].push(cb);
// 		}
// 	}

// 	emit(event) {
// 		if (this.events[event]) {
// 			this.events[event].forEach((cb) => {
// 				cb();
// 			});
// 		}
// 	}
// }

// const a = new EventEmitter();
// const b = new EventEmitter();

// a.register("e1", () => console.log("a1"));
// a.register("e2", () => console.log("a2"));

// b.register("e1", () => console.log("b1"));
// b.register("e1", () => console.log("b11"));

// b.emit("e1"); // print b1 and b11
// a.emit("e2"); // print a2

// const arr = [1, 2, 3];

// // (() => {
// //   (() => {
// //     const one = two = {
// //       name: 'David',
// //     }
// //     console.log(one === two);
// //   })();

// //   try {
// //     console.log(one);
// //   } catch (error) {
// //     console.log('one is missing');
// //   }
// //   try {
// //     console.log(two);
// //   } catch (error) {
// //     console.log('two is missing');
// //   }
// // })();

// // (function() {
// //   console.log(this);
// // })();

// this.age = 12;
// console.log(module.exports);
// console.log(this);
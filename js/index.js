/**
 * @class
 * what is javascript, ECMAScript
 * javascript vs. nodejs vs. ECMAScript
 *
 * Primitive Data
 * Object Data or reference Data
 *
 * coercion
 * equality == vs. ===
 *
 * var vs. let vs. const
 *
 * oop: Object oriented programming in JS
 * encapsulation; inheritance; Poly-morph-ism; abstraction;
 * constructer function, prototype chain
 *
 * @class
 * loop in JS: array, object
 * MyForeach, MyMap, MyFilter, MyReduce
 *
 * destructure
 *
 * rest parameter vs. spread operator
 *
 * object copy
 *
 * @class
 * iife
 * closure
 * currying
 *
 * this
 * call, apply, bind
 *
 * arrow function
 *
 * event loop
 *
 * @class
 * XHR
 * callback function; callback hell
 * Promise
 * MyPromise
 * MyFetch
 *
 * @class
 * todolist:
 *   MVC
 *   NodeList vs. HTMLCollection
 *   Event bubbling
 *
 */
// // wrap
// (function(exports, require, module, __filename, __dirname) {
// var a = undefined;
// console.log(global.a);
// console.log(a);
// if (true) {
//   // (function() {
//     var a = 123;
//   // })();
// console.log(a);
// if (true) {
// (function() {
// })();
// }
// console.log(a);
// const a = 123;
// })()
// // * Primitive Data: string, number, boolean, undefined, null, symbol
// // transfer by value;
// var str = 'ABC';
// var trr = str;
// str = 'cvb';
// console.log(trr);

// // * Object Data or reference Data: Object, Array,
// var arr = [123, 456];
// var wrr = arr;
// arr[1] = 123;
// console.log(wrr);

// // * coercion
// console.log(typeof (true + 1 + '12')); // 'hello' + 'world'
// console.log(true / 2);

// // * equality == vs. ===
// console.log(1 == '1');

// // * truthy and falsy;
// // console.log(NaN == NaN);
// // 1, 0, -1, NaN, '', ' ' trim()
// // console.log(typeof !!arr)
// if (!!arr) {
//   console.log('Hello World!');
// }

// * var, let, const: ES6
//        scope, hoisting, reassign
// var    function, yes,  yes
// let    block, -,  yes
// const    block, -,  no, -----> obj, arr

// const a = 21;
// a = 123;

// const a = 123;
// mutable vs. inmutable
// // mutable:
// const obj = {
//   name: 'Dio',
// }
// obj.name = 'Jojo';
// //inmutable
// let obj1 = {
//   name: 'Dio',
// }
// obj1 = {...obj1};

// var a = 'help';
// console.log(global.a);
// module.exports.a = a;
// console.log(module.exports.a);

// * oop: Object oriented programming in JS： class <---- ES6
// * encapsulation; inheritance; Poly-morph-ism; abstraction;
// * constructer function, prototype chain

// class Person {
//   #name = 'Person';
//   _age;

//   get name() {
//     return this.#name;
//   }
//   set name(newname) {
//     console.log('hello from Antra'); // trigger the rerender;
//     this.#name = newname;
//   }

//   constructor(n, age) {
//     this.#name = n;
//     this._age = age;
//   }
//   sayHello() {
//     console.log(this.#name + ': Hello!');
//   }
//   static sayHello() {
//     new Person('Jack', 12).sayHello();
//   }
// }

// * in js;
function Person(n, age) {
	this.name = n;
	this.age = age;
}
Person.prototype.sayHello = function () {
	console.log(this.name + ": Hello!");
};
Person.sayHello = function () {
	new Person("Jack", 12).sayHello();
};
Object.defineProperty(Person.prototype, "n", {
	get: function () {
		return this.name;
	},
	set: function (newname) {
		console.log("hello from Antra"); // trigger the rerender;
		this.name = newname;
	},
});

const p = new Person("Dio", 220);
const j = new Person("Jojo", 22);

p.sayHello();
Person.sayHello();
console.log(p, j);

p.n = 'David';
console.log(p.n);

// p.name = 'hihi';
// // p.name('hello');
// console.log(p.name);

// p.#name = 'hello';
// console.log(p.name, Person.name);
// p.sayHello();
// j.sayHello();

// Person.sayHello();

// const num = Math.max(12, 123);

// const arr = new Object(); // []

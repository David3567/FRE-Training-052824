// const EventEmitter = require("node:events");
// const http = require("node:http");

// const router = new EventEmitter();

// router.on("GET /", (req, res) => {
// 	res.end("Hello World");
// });

// const server = http.createServer((req, res) => {
//   const {method, url} = req;
//   router.emit(`${method} ${url}`, req, res);
// });

// server.listen(3000, () => {
//   console.log('listening on 3000...');
// })

// eventEmitter.on('hello', () => {
//   console.log('hello world')
// })

// eventEmitter.on('hello', () => {
//   console.log('hello Antra')
// })

// eventEmitter.emit('hello');

class EventEmitter {
	events = {};

	addListener(event, cb) {
		if (!this.events[event]) {
			this.events[event] = [cb];
		} else {
			this.events[event].push(cb);
		}
	}

	emit(event, ...msg) {
		this.events[event].forEach((e) => {
			e.apply(this, msg); // e.call(this, ...msg);
		});
	}
}

const emitter = new EventEmitter();

emitter.addListener("console", (msg) => console.log(msg));
emitter.addListener("console", (msg) => console.log(msg + " hello"));

emitter.emit("console", 55);
emitter.emit("console", "Tom");
// // 55
// // 55 hello

// Tom
// Tom hello

import express from "express";
import { Worker } from "node:worker_threads";
import path from "path";

const app = express();
const port = 3000;

app.get("/compute", (req, res) => {
	const worker = new Worker(path.resolve(__dirname, "worker.js"), {
		workerData: { num: 100000 },
	});

	worker.on("message", (result) => {
		res.send(`Result: ${result}`);
	});

	worker.on("error", (error) => {
		res.status(500).send(`Worker error: ${error.message}`);
	});

	worker.on("exit", (code) => {
		if (code !== 0) {
			console.error(`Worker stopped with exit code ${code}`);
		}
	});
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

import express, { Request, Response } from "express";
import "./core/envConfig";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server is listening on Port ${port}`);
});

app.get("", (req: Request, res: Response) => {
	res.send("hello nodejs");
});

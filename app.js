import express from "express";
import cors from "cors";
import carsRoutes from "./routes/cars.js";
import booksRoutes from "./routes/books.js";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const carsSwaggerDocument = JSON.parse(
	await readFile(new URL("./cars-swagger-doc.json", import.meta.url))
);
const booksSwaggerDocument = JSON.parse(
	await readFile(new URL("./books-swagger-doc.json", import.meta.url))
);
const apiSwaggerDocument = JSON.parse(
	await readFile(new URL("./api-swagger-doc.json", import.meta.url))
);

const PORT = 3000;
const app = express();
const __dirname = path.join(path.dirname(fileURLToPath(import.meta.url)));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/cars-docs", swaggerUi.serveFiles(carsSwaggerDocument), swaggerUi.setup(carsSwaggerDocument));
app.use("/books-docs", swaggerUi.serveFiles(booksSwaggerDocument), swaggerUi.setup(booksSwaggerDocument));

app.use("/api/cars", carsRoutes);
app.use("/api/books", booksRoutes);

app.listen(PORT, () => {
	console.log(`Server runs on port ${PORT}`);
});

import { readFile } from "fs/promises";

export const carsSwaggerDocument = JSON.parse(
	await readFile(new URL("../cars-swagger-doc.json", import.meta.url))
);
export const booksSwaggerDocument = JSON.parse(
	await readFile(new URL("../books-swagger-doc.json", import.meta.url))
);
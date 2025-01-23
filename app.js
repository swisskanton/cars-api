import express from "express";
import cors from "cors";
import carsRoutes from "./routes/cars.js";
import swaggerUi from 'swagger-ui-express';

import { readFile } from "fs/promises";
const swaggerDocument = JSON.parse(await readFile(new URL("./swagger-output.json", import.meta.url)));

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/cars", carsRoutes);

app.listen(PORT, () => {
	console.log(`Server runs on port ${PORT}`);
});

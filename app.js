import express from "express";
import cors from "cors";
import carsRoutes from "./routes/cars.js";
import booksRoutes from "./routes/books.js";
import phonesRoutes from "./routes/phones.js";
import usersRoutes from "./routes/users.js";
import swaggerUi from "swagger-ui-express";
import path from "path";
import __dirname from "./util/rootdir.js";
import * as docs from "./util/swaggerfiles.js";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(
	"/cars-docs",
	swaggerUi.serveFiles(docs.carsSwaggerDocument),
	swaggerUi.setup(docs.carsSwaggerDocument)
);
app.use(
	"/books-docs",
	swaggerUi.serveFiles(docs.booksSwaggerDocument),
	swaggerUi.setup(docs.booksSwaggerDocument)
);
app.use(
	"/phones-docs",
	swaggerUi.serveFiles(docs.phonesSwaggerDocument),
	swaggerUi.setup(docs.phonesSwaggerDocument)
);
app.use(
	"/users-docs",
	swaggerUi.serveFiles(docs.usersSwaggerDocument),
	swaggerUi.setup(docs.usersSwaggerDocument)
);

app.use("/api/cars", carsRoutes);
app.use("/api/books", booksRoutes);
app.use("/api/phones", phonesRoutes);
app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
	console.log(`Server runs on port ${PORT}`);
});

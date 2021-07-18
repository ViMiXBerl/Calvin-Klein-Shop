import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
// import products from "./data/products.js";

import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.use("/api/products", productRoutes);

// app.get("/api/products", (req, res) => {
// 	res.json(products);
// });
// app.get("/api/products/:vendorCode", (req, res) => {
// 	const product = products.find((p) => p._vendorСode === req.params.vendorCode);
// 	res.json(product);
// });

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);

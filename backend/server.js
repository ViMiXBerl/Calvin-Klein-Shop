const express = require("express");
const products = require("./data/products");

const app = express();

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.get("/api/products", (req, res) => {
	res.json(products);
});
app.get("/api/products/:vendorCode", (req, res) => {
	const product = products.find((p) => p._vendorСode === req.params.vendorCode);
	res.json(product);
});

app.listen(5001, console.log("Server running on port 5001"));

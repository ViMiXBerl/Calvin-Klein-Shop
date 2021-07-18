import mongoose from "mongoose";

const productSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		_vendorСode: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		sex: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		countInStock: {
			type: Number,
			required: true,
			default: 0,
		},
		case: {
			type: String,
			required: true,
		},
		bracelet: {
			type: String,
		},
		strap: {
			type: String,
		},
		closure: {
			type: String,
		},
		material: {
			type: String,
		},
		dial: {
			type: String,
		},
		movement: {
			type: String,
		},
		caseSize: {
			type: Number,
			required: true,
			default: 0,
		},
		waterResistant: {
			type: Number,
			required: true,
			default: 0,
		},
		color: {
			type: String,
			required: true,
		},
		new: {
			type: Boolean,
		},
	},
	{
		timestaps: true,
	}
);

const Product = mongoose.model("Product", productSchema);

export default Product;

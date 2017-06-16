const mongoose = require("mongoose")

const RatSchema = new mongoose.Schema({
	name: {type: String, required: true},
	age: Number,
	favorite_food: String
}, {timestamps: true})

mongoose.model("Rat", RatSchema)
const mongoose = require("mongoose")
const Rat = mongoose.model("Rat")

module.exports = {
	index: (req, res) => {
		Rat.find()
			.then(data => res.json(data))
			.catch(err => {
				console.log("Rat find error", err)
				res.status(500).json(err)
			})
	},
	create: (req, res) => {
		let new_rat = new Rat(req.body)
		new_rat.save()
			.catch(err => {
				console.log("Rat save error", err)
				res.status(500).json(err)
			})
			.then(() => res.json(true))
	}
}
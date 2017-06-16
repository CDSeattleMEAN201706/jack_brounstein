const rats = require("./../controllers/rats")

module.exports = (app) => {
	app.get("/rats", rats.index)
	app.post("/rats/create", rats.create)
}
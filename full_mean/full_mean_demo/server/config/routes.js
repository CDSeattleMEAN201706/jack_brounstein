const path = require("path")

const users = require("./../controllers/users")

module.exports = (app) => {
	app.post("/login", users.login)
	app.get("/check_status", users.check_status)
	app.get("/logout", users.logout)
	app.get("*", (req, res) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	})
}
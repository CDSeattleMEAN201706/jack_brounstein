const users = require("./../controllers/users")

module.exports = (app) => {
	app.get("/", users.index)
	app.post("/user", users.login)
	app.get("/success", users.success)
	app.get("/logout", users.logout)
}
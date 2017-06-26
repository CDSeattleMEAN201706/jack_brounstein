const express = require("express")
const path = require("path")

const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")

const PORT = 8000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, "./client/dist")))

app.use(session({
	secret: "secret",
	resave: false,
	saveUninitialized: true
}))

require("./server/config/mongoose.js")

require("./server/config/routes.js")(app)

app.count = 0 

const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})

const io = require("socket.io").listen(server)

io.on("connection", (socket) => {
	console.log("New connection", socket.id)
	socket.emit("update_count", app.count)

	socket.on("click_button", () => {
		app.count++
		io.emit("update_count", app.count)
	})


})
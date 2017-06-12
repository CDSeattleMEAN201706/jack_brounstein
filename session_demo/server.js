var express = require("express")
var path = require("path")

var app = express()
var bodyParser = require("body-parser")
var session = require("express-session")

var PORT = 8000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))

app.use(session({
	secret: "this is a really good secret key that no one will ever guess ;)",
	resave: false,
	saveUninitialized: false,
}))

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

require("./server/config/mongoose.js")

require("./server/config/routes.js")(app)

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})
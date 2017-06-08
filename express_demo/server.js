var express = require("express")
var path = require("path")

var app = express()

var PORT = 8000

app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
	res.render("index", {name: "Jack"})
})

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})
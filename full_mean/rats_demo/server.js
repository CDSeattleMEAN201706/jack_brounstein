var express = require("express")
var path = require("path")

var app = express()
var bodyParser = require("body-parser")

var PORT = 8000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "./client/dist")))

require("./server/config/mongoose.js")

require("./server/config/routes.js")(app)

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})
module.exports = {
	index: (req, res) => {
		if(!req.session.count){
			req.session.count = 0
		}

		req.session.count++

		console.log(req.session)

		res.render("index", {count: req.session.count})
	},
	login: (req, res) => {
		req.session.name = req.body.name
		res.redirect("/success")
	},
	success: (req, res) => {
		if(!req.session.name){
			res.redirect("/")
		} else {
			res.render("success", {name: req.session.name})
		}
	},
	logout: (req, res) => {
		req.session.destroy()
		res.redirect("/")
	}
}
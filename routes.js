module.exports = function(app) {

	app.get("/api/jeopardy", function(req, res) {
		res.json({
			jeopardy: {
				questions: [],
				answers: [],
				contestants: [],
				host: {
					name: "Alex Trebek"
				}
			}
		});
	});

};

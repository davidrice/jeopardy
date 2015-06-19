var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

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

app.listen(10000);

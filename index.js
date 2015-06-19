var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
require("./routes")(app);

app.listen(10000);

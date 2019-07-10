
// Require node modules
var express = require("express");

var path = require("path");

// Declare a new instance of Express using method
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// If the user requests to access the site with no parameters, the result is to get the home page

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
// });

// Need to require routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// The app needs to listen to the requests on a certain port to get responses
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
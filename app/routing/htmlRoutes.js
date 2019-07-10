
var path = require("path");

// If the user requests to access the site with the parameter survey afterwards, the result is to get the survey


// var route;
// var routeurl = "/:route";

module.exports = function(app) {
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    // console.log(route); 
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get('*',function (req, res) {
    res.redirect('/');
});

};

// app.get(routeurl, function(req, res) {
//     route = req.params.route;

// switch(route){
//     case "survey":
//     res.sendFile(path.join(__dirname, "app/public/survey.html"));
//     console.log(route);
//     break;

//     default:
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
//     console.log(route); 
// }


// });









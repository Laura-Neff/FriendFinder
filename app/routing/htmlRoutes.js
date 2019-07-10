
// If the user requests to access the site with the parameter survey afterwards, the result is to get the survey


// var route;
// var routeurl = "/:route";

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
    // console.log(route); 
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get('*',function (req, res) {
    res.redirect('/');
});


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







// The app needs to listen to the requests on a certain port to get responses
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

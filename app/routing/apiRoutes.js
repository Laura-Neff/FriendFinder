var friends= require("..cd/data/friends.js");


module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

     // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware

app.post("/survey", function(req, res) {
    
    var newFriend = req.body;

    console.log(newFriend);

    

    

        });

}


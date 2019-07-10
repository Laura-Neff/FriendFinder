var friends= require("../data/friends.js");


module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

     // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware

app.post("/api/friends", function(req, res) {

    console.log(req.body);
    
    var newFriend = req.body;

    var newFriendAnswers = newFriend.scores;
 
    var friendName = '';
    var friendPhoto = '';
    var baseDifference = 10000;


  
    for (var i = 0; i < friends.length; i++) {

        var difference = 0;
        for (var j = 0; j < newFriendAnswers.length; j++) {
            difference += Math.abs(friends[i].scores[j] - newFriendAnswers[j]);
        }

        if (difference < baseDifference) {
           
            baseDifference = difference;
            friendName = friends[i].name;
            friendPhoto = friends[i].photo;
            
         

        }
    }

    // Add new user
    friends.push(newFriend);
    

    
    
    res.json({status: 'OK', friendName: friendName, friendPhoto: friendPhoto});

      



    

        });

};


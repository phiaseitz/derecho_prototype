module.exports = function (){
    return {
        getHome: function(req, res){
            res.render('home', {});
            console.log("Going to login page")
        },

        getUser: function(req, res){
            console.log("Getting User Object");
            Users.findById(req.session.passport.user, function (err, user){
                if(err){
                    console.log(err);
                } else {
                    res.json(user);
                }
            });
        },

        getResidents: function(req, res){
            Users.find({_id: {$not: req.session.passport.user}}, function (err, users){
                if(err){
                    console.log(err);
                } else {
                    residents = users.map(function(user){
                        delete user.notifications;
                        delete user.userSettings;
                        return user;
                    });
                    res.json(residents);
                }
            })
        },

        postUser: function(req, res){
            console.log(req.body)
            Users.create(req.body, function(err){
                if(err){
                    console.log(err);
                } else {
                    res.json("Done!")
                }
            })
        }
    }
}

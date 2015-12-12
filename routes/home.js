module.exports = function (){
    return {
        getHome: function(req, res){
            console.log("Going to login page")
            res.render('home', {});
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

        getTags: function(req, res){
            Tags.find({}, function(err, tags){
                if(err){
                    console.log(err)
                } else{
                    res.json(tags);
                }
            })
        },

        updateTag: function(req, res){
            Tags.findbyId(req.body.id, function (err, tag){
            if(err){
                console.log(err)
            } else {
                tag.value++;
                tag.save(function (err){
                    if(err){
                    console.log(err)
                    } else{
                    res.json(tag);
                    }
                })
            }
            })
        },

        addTag: function(req, res){
            var tag = new Tag();

            tag.value = res.body.value;
            tag.label = res.body.label;
            tag.save(function (err){
                if(err){
                    console.log(err)
                } else{
                    res.json(tag);
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

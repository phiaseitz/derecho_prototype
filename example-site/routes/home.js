module.exports = function (){
    return {
        getHome: function(req, res){
            console.log("Going to login page")
            res.render('home', {});
        },

//         logout: function(req, res) {
//     req.logout();
//     res.redirect('./views/layouts/login.handlebars');
// }
    
    }
}


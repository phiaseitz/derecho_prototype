module.exports = function (){
    return {
        getHome: function(req, res){
            console.log("Going to login page")
            res.render('home', {});
        },
    }
}

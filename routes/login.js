module.exports = function (){
    return {
        getLogin: function(req, res){
            console.log("Going to login page")
            res.render('login', {});
        },
    }
}

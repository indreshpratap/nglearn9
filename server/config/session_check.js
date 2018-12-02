

module.exports.isLoggedIn = function(req,res,next){
    if(req.isAuthenticated()){
        next();
    }else {
        res.status(403).json({error:"Not Allowed"});
    }
}


module.exports.isAdmin = function(req,res,next){
    if(req.isAuthenticated() && req.user.role==='admin'){
        next();
    }else {
        res.status(403).json({error:"Not Allowed your are not admin"});
    }
}
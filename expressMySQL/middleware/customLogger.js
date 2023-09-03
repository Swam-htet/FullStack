
// custom logger middleware

function log(req,res,next){

    console.log("Custom Middleware - ", req.path)
    next();

}

module.exports={
    log
}
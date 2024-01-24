function ErrorHandler(err, req, res, next) {

    // render the error page
    res.status(err.status || 500).json({message: err.message});

}

module.exports = {
    ErrorHandler
}
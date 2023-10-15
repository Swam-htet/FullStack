let http_error = require("http-errors");
const createHttpError = require("http-errors");

function NotFoundHandler(req, res, next) {
    next(createHttpError(404));
}

module.exports = {
    NotFoundHandler
}
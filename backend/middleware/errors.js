const ErrorHandler = require("../helpers/errorHandler");
module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === "DEVELOPMENT"){
        console.log(err)
        res.status(err.statusCode).json({
            sucess: false,
            err: err,
            errMessage: err.errMessage,
            stack: err.stack
        });
    }
    if (process.env.NODE_ENV === "PRODUCTION"){
       let error = { ...err };
       error.message = err.message;
       res.status(error.statusCode || 500).json({
           status: false,
           message: error.message || "Internal server error"
       });
    }

}
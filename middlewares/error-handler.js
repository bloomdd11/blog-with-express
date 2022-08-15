const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    msg: err.message || 'internal server error',
    statusCode: err.statusCode || 500
  }
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware
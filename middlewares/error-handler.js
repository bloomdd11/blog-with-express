const errorHandlerMiddleware = (err, req, res, next) => {
  const customError = {
    msg: err.message || 'internal server error',
    statusCode: err.statusCode || 500
  }
  console.log(customError.msg);
  console.log(customError.statusCode);
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware
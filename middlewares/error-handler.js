const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    msg: err.message || 'internal server error',
    statusCode: err.statusCode || 500
  }

  if (err.name === 'CastError') {
    const { value: { _id: blogID } } = err
    customError.msg = `cannot find the blog with id : ${blogID}`
    customError.statusCode = 401
  }
  //return res.status(customError.statusCode).json({ err })
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware
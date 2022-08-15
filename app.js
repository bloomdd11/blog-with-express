require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

// connect DB
const connectDB = require('./db/connectDB')

// routers
const testRoute = require('./routes/testing-routes')
const blog = require('./routes/blog-routes')

// error 
const notFoundMiddleware = require('./middlewares/not-Found')
const errorHandlerMiddleware = require('./middlewares/error-handler')
const customAPIError = require('./errors/custom-api-error')

// middleware
app.use(express.json())

// routes
app.get('/', (req, res) => {
  //throw new Error('error at app')
  throw new customAPIError('custom error', 401)
  res.send('server is running')
})

app.use('/api/v1', blog)

// test-routes
//app.use('/api/test', testRoute)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = 3000 || process.env.PORT

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`))
  } catch (error) {
    console.log(error);
  }
}
start()
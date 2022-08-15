require('dotenv').config()

const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT

const connectDB = require('./db/connectDB')
const testRoute = require('./routes/testing-routes')

// routes
app.get('/', (req, res) => {
  res.send('server is running')
})

// test-routes
app.use('/api/test', testRoute)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`))
  } catch (error) {
    console.log(error);
  }
}
start()
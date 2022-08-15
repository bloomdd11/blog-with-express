require('dotenv').config()

const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT

// routes
app.get('/', (req, res) => {
  res.send('server is running')
})

app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`))
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, 'please enter blog title']
  },
  author: {
    type: String,
    default: 'anonymouse'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  subject: {
    type: String
  }
})

module.exports = mongoose.model('BlogPost', blogSchema)
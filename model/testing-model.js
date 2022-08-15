const mongoose = require('mongoose')


const testDocsSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'please enter name'],
    maxlength: [20, 'max length of name must be 20 characters']
  },
  email: {
    type: String,
    require: [true, 'please enter email']
  }
})

module.exports = mongoose.model('testDocsSchema', testDocsSchema)
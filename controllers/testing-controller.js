const testDocsSchema = require('../model/testing-model')

const testRegisterUser = async (req, res) => {
  res.send('register')
}

const testViewUser = async (req, res) => {
  res.send('view all users')
}

module.exports = {
  testRegisterUser,
  testViewUser
}
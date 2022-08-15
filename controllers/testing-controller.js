const testDocsSchema = require('../model/testing-model')

const testRegisterUser = async (req, res) => {
  const testDocs = await (testDocsSchema.create(req.body))
  res.json(testDocs)
}

const testViewUser = async (req, res) => {
  res.send('view all users')
}

module.exports = {
  testRegisterUser,
  testViewUser
}
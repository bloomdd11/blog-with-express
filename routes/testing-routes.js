const express = require('express')
const Router = express.Router()

const { testRegisterUser, testViewUser } = require('../controllers/testing-controller')

Router.route('/register').post(testRegisterUser)
Router.route('/view').get(testViewUser)

module.exports = Router
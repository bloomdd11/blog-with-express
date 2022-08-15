const express = require('express')
const Router = express.Router()

const {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  updateBlog,
  deleteBlog
} = require('../controllers/blog')

Router.route('/').get(getAllBlogs).post(createBlog)
Router.route('/:id').get(getSingleBlog).patch(updateBlog).delete(deleteBlog)

module.exports = Router
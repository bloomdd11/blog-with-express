const customAPIError = require('../errors/custom-api-error')

const getAllBlogs = async (req, res) => {
  try {
    throw new customAPIError('custom error', 404)
    return res.status(401).send('error at get all blogs route')
  } catch (error) {
    //console.log(error.message);
    //console.log(error.statusCode);
  }
}
const getSingleBlog = async (req, res) => {
  return res.send('get single blog')
}
const createBlog = async (req, res) => {
  return res.send('create blog')
}
const updateBlog = async (req, res) => {
  return res.send('update blog')
}
const deleteBlog = async (req, res) => {
  return res.send('delete blog')
}

module.exports = {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  updateBlog,
  deleteBlog
}
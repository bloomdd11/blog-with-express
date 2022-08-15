

const getAllBlogs = async (req, res) => {
  return res.send('get all blogs')
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
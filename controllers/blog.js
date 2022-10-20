const customAPIError = require('../errors/custom-api-error')
const Blog = require('../model/Blog')

const getAllBlogs = async (req, res) => {
  const blog = await Blog.find({})
  return res.json(blog)
}
const getSingleBlog = async (req, res) => {
  const { id: blogID } = req.params
  const blog = await Blog.findById({ _id: blogID })
  return res.json({ msg: blog })
}
const createBlog = async (req, res) => {
  let blog = new Blog({
    title: req.body.title,
    subject: req.body.subject
  })

  try {
    await blog.save()
    return res.json({ msg: blog })
  } catch (error) {
    throw new customAPIError(error, 404)
  }

  // const blog = await Blog.create(req.body)
  // return res.json(blog)
}
const updateBlog = async (req, res) => {
  const { id: blogID } = req.params
  let blog = await Blog.findById(blogID)
  if (!blog) throw new customAPIError(`id ${blogID} cannot be found`, 404)

  blog = await Blog.findByIdAndUpdate({ _id: blogID }, req.body, { new: true, runValidators: true })
  return res.json(blog)
}
const deleteBlog = async (req, res) => {
  const { id: blogID } = req.params
  const blog = await Blog.findByIdAndDelete({ _id: blogID })

  if (!blog) {
    throw new customAPIError(`there is no blog with id : ${blogID}`, 401)
  }
  return res.status(200).json({ msg: 'done' })
}

module.exports = {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  updateBlog,
  deleteBlog
}
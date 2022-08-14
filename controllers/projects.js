
const Project = require('../models/Project')
const asyncWrapper = require('../middleware/async')

const getAllProjects = asyncWrapper(async (req, res) => {
        const projects = await Project.find({})
        res.status(200).json({ projects })
})

const getProject = asyncWrapper(async (req, res) => {
    const { id: projectID } = req.params
    const project = await Project.findOne({ _id: projectID })
  
    res.status(200).json({ project })
  })

module.exports = {
    getAllProjects,
    getProject
}
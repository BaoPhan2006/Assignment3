const Project = require("../models/project");


exports.addProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json({
      success: true,
      message: "Project added successfully.",
      data: {
        title: project.title,
        completion: project.completion,
        description: project.description,
        id: project._id
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    const formatted = projects.map(p => ({
      title: p.title,
      completion: p.completion,
      description: p.description,
      id: p._id
    }));

    res.json({
      success: true,
      message: "Projects list retrieved successfully.",
      data: formatted
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    res.json({
      success: true,
      message: "Project retrieved successfully.",
      data: {
        title: project.title,
        completion: project.completion,
        description: project.description,
        id: project._id
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.updateProject = async (req, res) => {
  try {
    await Project.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      success: true,
      message: "Project updated successfully."
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Project deleted successfully."
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
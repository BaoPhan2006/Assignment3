const Reference = require("../models/reference");


exports.addReference = async (req, res) => {
  try {
    const reference = await Reference.create(req.body);

    res.status(201).json({
      success: true,
      message: "Reference added successfully.",
      data: {
        firstname: reference.firstname,
        lastname: reference.lastname,
        email: reference.email,
        position: reference.position,
        company: reference.company,
        id: reference._id
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.getAllReferences = async (req, res) => {
  try {
    const references = await Reference.find();

    const formatted = references.map(r => ({
      firstname: r.firstname,
      lastname: r.lastname,
      email: r.email,
      position: r.position,
      company: r.company,
      id: r._id
    }));

    res.json({
      success: true,
      message: "References list retrieved successfully.",
      data: formatted
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.getReferenceById = async (req, res) => {
  try {
    const reference = await Reference.findById(req.params.id);

    res.json({
      success: true,
      message: "Reference retrieved successfully.",
      data: {
        firstname: reference.firstname,
        lastname: reference.lastname,
        email: reference.email,
        position: reference.position,
        company: reference.company,
        id: reference._id
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.updateReference = async (req, res) => {
  try {
    await Reference.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      success: true,
      message: "Reference updated successfully."
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.deleteReference = async (req, res) => {
  try {
    await Reference.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Reference deleted successfully."
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const Service = require("../models/service");

exports.addService = async (req, res) => {
  try {
    const service = await Service.create(req.body);

    res.status(201).json({
      success: true,
      message: "Service added successfully.",
      data: {
        title: service.title,
        description: service.description,
        id: service._id
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();

    const formatted = services.map(s => ({
      title: s.title,
      description: s.description,
      id: s._id
    }));

    res.json({
      success: true,
      message: "Services list retrieved successfully.",
      data: formatted
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    res.json({
      success: true,
      message: "Service retrieved successfully.",
      data: {
        title: service.title,
        description: service.description,
        id: service._id
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    await Service.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      success: true,
      message: "Service updated successfully."
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Service deleted successfully."
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const User = require("../models/user");

exports.addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      message: "User added successfully.",
      data: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        id: user._id
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    const formatted = users.map(u => ({
      firstname: u.firstname,
      lastname: u.lastname,
      email: u.email,
      id: u._id
    }));

    res.json({
      success: true,
      message: "Users list retrieved successfully.",
      data: formatted
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.json({
      success: true,
      message: "User retrieved successfully.",
      data: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        id: user._id
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      success: true,
      message: "User updated successfully."
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "User deleted successfully."
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
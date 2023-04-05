const usersModel = require('../models/usersModel');

const addUser = async (req, res) => {
  console.log('send...');
  try {
    await usersModel.create(req.body);
    res.status(200).json({
      success: true, message: 'New user is added successfully'
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await usersModel.find();
    return res.status(200).json({ success: true, users })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

const deleteUserById = async (req, res) => {
  try {
    await usersModel.findByIdAndDelete(req.params.id)
    return res.status(200).json({ success: true, message: 'User deleted successfully' })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await usersModel.findById(req.params.id)
    return res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

const updateUserById = async (req, res) => {
  try {
    await usersModel.findByIdAndUpdate(req.params.id, req.body)
    return res.status(200).json({ success: true, message: 'Updated user successfully' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

module.exports = {
  addUser,
  getAllUsers,
  deleteUserById,
  getUserById,
  updateUserById
};
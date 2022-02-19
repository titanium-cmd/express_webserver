const usersModel = require('../models/usersModel');

const addUser = async (req, res) => {
  console.log('send...');
  try {
    await usersModel.create(req.body);
    res.status(200).json({
      success: true, message: 'New user is added successfully'
    });
  } catch (error) {
    res.status(400).json({success: false, message: error.message});    
  }
}

const getAllUsers = (req, res) => {}

const deleteUserById = (req, res) => {}

const getUserById = (req, res) => {}

const updateUserById = (req, res) => {}

module.exports = {
  addUser, 
  getAllUsers, 
  deleteUserById, 
  getUserById, 
  updateUserById
};
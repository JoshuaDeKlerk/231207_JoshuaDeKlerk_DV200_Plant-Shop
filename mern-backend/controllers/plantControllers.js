const Plant = require('../models/Plant');
const jwt = require('jsonwebtoken');

// Add Plant
const addPlant = async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;
    const userId = req.user.id; // Use req.user.id to get the user ID from the token

    console.log("User ID from token:", userId); // Log the user ID to the console

    const plant = new Plant({ name, description, price, imageUrl, user: userId });
    await plant.save();
    res.status(201).json(plant);
  } catch (error) {
    console.error("Error adding plant:", error.message); // Log the error message
    res.status(400).json({ error: error.message });
  }
};

// Edit Plant
const editPlant = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, imageUrl } = req.body;
    const plant = await Plant.findByIdAndUpdate(id, { name, description, price, imageUrl }, { new: true });
    if (!plant) return res.status(404).json({ error: 'Plant not found' });
    res.json(plant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Plant
const deletePlant = async (req, res) => {
  try {
    const { id } = req.params;
    const plant = await Plant.findByIdAndDelete(id);
    if (!plant) return res.status(404).json({ error: 'Plant not found' });
    res.json({ message: 'Plant deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Plants
const getPlants = async (req, res) => {
  try {
    const plants = await Plant.find({ user: req.user.userId });
    res.json(plants);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addPlant, editPlant, deletePlant, getPlants };

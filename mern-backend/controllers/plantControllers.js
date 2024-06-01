// controllers/plantControllers.js
const Plant = require('../models/Plant');

// Add Plant
const addPlant = async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;
    const userId = req.user.id; // Use req.user.id to get the user ID from the token

  // Log the user ID to the console

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

// Get All Plants
const getPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get User's Plants
const getUserPlants = async (req, res) => {
  try {
    const plants = await Plant.find({ user: req.user.id });
    res.json(plants);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Plant by ID
const getPlantById = async (req, res) => {
  try {
    const { id } = req.params;
    const plant = await Plant.findById(id);
    if (!plant) return res.status(404).json({ error: 'Plant not found' });
    res.json(plant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Export the functions
module.exports = { addPlant, editPlant, deletePlant, getPlants, getUserPlants, getPlantById };

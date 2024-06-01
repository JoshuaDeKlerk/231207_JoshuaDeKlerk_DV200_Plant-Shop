// routes/plantRoutes.js
const express = require('express');
const router = express.Router();
const { addPlant, editPlant, deletePlant, getPlants, getUserPlants, getPlantById } = require('../controllers/plantControllers');
const { verifyToken } = require('../middleware/authMiddleware');

// Add Plant
router.post('/add', verifyToken, addPlant);

// Edit Plant
router.put('/edit/:id', verifyToken, editPlant);

// Delete Plant
router.delete('/:id', verifyToken, deletePlant); // Ensure this is correctly defined

// Get All Plants
router.get('/', getPlants);

// Get User's Plants
router.get('/my-plants', verifyToken, getUserPlants);

// Get Plant by ID
router.get('/:id', verifyToken, getPlantById);

module.exports = router;

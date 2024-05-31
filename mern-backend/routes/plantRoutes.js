const express = require('express');
const router = express.Router();
const { addPlant, editPlant, deletePlant, getPlants } = require('../controllers/plantControllers');

// Add Plant
router.post('/add', addPlant);

// Edit Plant
router.put('/edit/:id', editPlant);

// Delete Plant
router.delete('/delete/:id', deletePlant);

// Get All Plants
router.get('/', getPlants);

module.exports = router;

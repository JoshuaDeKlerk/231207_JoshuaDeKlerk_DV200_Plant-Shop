const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// Create a new plant
router.post('/', async (req, res) => {
    try {
        const { name, description, imageUrl } = req.body;
        const newPlant = new Plant({ name, description, imageUrl });
        await newPlant.save();
        res.status(201).json(newPlant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all plants
router.get('/', async (req, res) => {
    try {
        const plants = await Plant.find();
        res.status(200).json(plants);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update a plant
router.put('/:id', async (req, res) => {
    // Implement update logic
});

// Delete a plant
router.delete('/:id', async (req, res) => {
    // Implement delete logic
});

module.exports = router;

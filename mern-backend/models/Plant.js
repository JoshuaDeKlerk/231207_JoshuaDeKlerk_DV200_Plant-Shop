const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    }

});

module.exports = mongoose.model('Plant', PlantSchema);

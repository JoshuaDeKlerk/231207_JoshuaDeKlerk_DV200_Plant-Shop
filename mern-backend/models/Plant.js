const mongoose = require('mongoose');
const { Schema } = mongoose;

const plantSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;

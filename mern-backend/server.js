const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from.env file
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
const userRoutes = require('./routes/userRoutes');
const plantRoutes = require('./routes/plantRoutes');

app.use('/api/users', userRoutes);
app.use('/api/plants', plantRoutes);


// Test Server
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server
app.listen(PORT, () => {
    console.log (`Server is running on port ${PORT}`);
});
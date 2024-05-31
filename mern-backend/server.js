const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { verifyToken } = require('./middleware/authMiddleware');

const app = express();

// Database connection 
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log('MongoDB Not Connected', err));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

// Routes
app.use('/plants', verifyToken, require('./routes/plantRoutes'));
app.use('/', require('./routes/userRoutes'));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

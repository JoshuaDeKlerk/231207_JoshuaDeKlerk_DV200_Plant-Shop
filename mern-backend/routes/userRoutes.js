// routes/userroutes.js
const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, SignUpUser, SignInUser, GetProfile, LogoutUser, DeleteAccount } = require('../controllers/userControllers');
const { verifyToken } = require('../middleware/authMiddleware');

// Middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

router.get('/', test);
router.post('/SignUp', SignUpUser);
router.post('/SignIn', SignInUser);
router.get('/Profile', GetProfile);
router.post('/Logout', LogoutUser);
router.delete('/DeleteAccount', verifyToken, DeleteAccount);

module.exports = router;

const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, SignUpUser, SignInUser, GetProfile } = require('../controllers/userControllers')

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
router.get('/Profile', GetProfile)

module.exports = router
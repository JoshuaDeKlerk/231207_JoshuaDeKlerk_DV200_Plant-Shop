// controllers/userControllers.js
const User = require('../models/User');
const Plant = require('../models/Plant');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

// Test
const test = (req, res) => {
    res.json('test is working');
};

// SignUp User
const SignUpUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name) {
            return res.json({ error: 'Name is required' });
        }
        if (!password || password.length < 6) {
            return res.json({ error: 'Password must be longer than six letters' });
        }
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ error: 'Email is already taken' });
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.json(user);
    } catch (error) {
        console.log(error);
    }
};

// SignIn User
const SignInUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ error: 'No user found' });
        }

        const match = await comparePassword(password, user.password);
        if (match) {
            jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user);
            });
        } else {
            res.json({ error: 'Passwords do not match' });
        }
    } catch (error) {
        console.log(error);
    }
};

const GetProfile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user);
        });
    } else {
        res.json(null);
    }
};

const LogoutUser = (req, res) => {
    res.cookie('token', '', { maxAge: 1 }).json('Logged out');
};

const DeleteAccount = async (req, res) => {
    try {
        const { id } = req.user;
        await Plant.deleteMany({ user: id });
        await User.findByIdAndDelete(id);
        res.cookie('token', '', { maxAge: 1 }).json('Account deleted');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    test,
    SignUpUser,
    SignInUser,
    GetProfile,
    LogoutUser,
    DeleteAccount,
};

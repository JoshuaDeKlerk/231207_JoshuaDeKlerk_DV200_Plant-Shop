const User = require('../models/User');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

// Test
const test = (req, res) => {
    res.json('test is working')
};

// SignUp User
const SignUpUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        // Check if name was entered
        if(!name) {
            return res.json({
                error: 'name is required'
            })
        };
        // Check is password good
        if(!password || password.length < 6){
            return res.json({
                error: 'Password must be longer than six letters'
            })
        };
        // Check email
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'Email is already taken'
            })
        };

        const hashedPassword = await hashPassword(password)

        // Create user in database
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword,
        })

        return res.json(user)

    } catch (error) {
        console.log(error)
    }
};

// SignIn User
const SignInUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        // Check if user exist
        const user = await User.findOne({email});
        if(!user) {
            return res.json({
                error: 'No user found'
            })
        }

        // Check if password match
        const match = await comparePassword(password, user.password)
        if(match) {
            jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(user)
            })
        }
        if(!match) {
            res.json({
                error: "Passwords do not match"
            })
        }

    } catch (error) {
        console.log(error)
    }
};

const GetProfile =(req, res) => {
    const {token} = req.cookies
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

// Export
module.exports = {
    test,
    SignUpUser,
    SignInUser,
    GetProfile
};
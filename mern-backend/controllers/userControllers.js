const User = require('../models/User')

// Test
const test = (req, res) => {
    res.json('test is working')
}

// SignUpUser
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

        const user = await User.create({
            name, email, password
        })

        return res.json(user)

    } catch (error) {
        console.log(error)
    }
}

// Export
module.exports = {
    test,
    SignUpUser
}
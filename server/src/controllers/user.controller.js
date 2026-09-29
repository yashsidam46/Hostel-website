const User = require('../models/User.model')

async function handleuserSignup(req,res) {
    const {username,email,password} = req.body;
    await User.create({
        username,
        email,
        password
    })

    return res.render("home")
}


module.exports = handleuserSignup;
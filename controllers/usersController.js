const bcrypt = require('bcryptjs');
const User = require('../models/User');


//HOME ROUTE
module.exports.home = (req, res) => {
    res.render('home')
}


//GET REGISTRATION FORM
module.exports.getRegistrationForm = (req, res) => {
    res.render('registrationForm')
}


//POST REGISTER
module.exports.postRegister = (req, res) => {
    User.findOne({ email: req.body.email }).then((foundUser) => {
        if (!foundUser) {
            //Save the user here
            //Hash the user password before saving
            //Create a user 
            bcrypt.hash(req.body.password, 12).then((hashedPassword) => {
                const user = new User({
                    username: req.body.username,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    country: req.body.country,
                    password: hashedPassword //Use the hashed password
                })
                //Save the user
                user.save().then((userCreated) => {
                    res.json({
                        status: 'success',
                        user: userCreated
                    })
                }).catch((err) => {
                    console.log('Registration error', err)
                })
            }).catch((err) => {
                console.log('Hashing password error', err)
            })
        } else {
            //send error message along to this route
            //res.redirect('/')
            res.json({ msg: 'User Exists' })
        }
    }).catch((eror) => {
        res.json({ msg: 'Something went wrong', eror })
    })
};

//LOGIN

//GET LOGIN FORM

module.exports.getLoginForm = (req, res) => {
    res.render('login')
}

//POST LOGIN
module.exports.postLogin = (req, res) => {
    //Find the user by username
    User.findOne({ username: req.body.username }).then((user) => {
        if (user) {
            //If there is a user then compare the password
            bcrypt.compare(req.body.password, user.password).then((passwordMatch) => {
                if (passwordMatch) {

                    res.render('dashboard')
                } else {
                    res.send('Wrong username/password')
                }
            }).catch((err) => {
                console.log('System error')
            })

        } else {
            res.send('No user found')
        }
    }).catch((err) => {
        res.json({ msg: 'System Error' })
    })
}
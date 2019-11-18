const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { validationResult } = require('express-validator')

//HOME ROUTE
module.exports.home = (req, res) => {
    console.log(req.session)
    res.render('home')
}


//GET REGISTRATION FORM
module.exports.getRegistrationForm = (req, res) => {
    res.render('registrationForm', {
        errorMessage: '',
        validationErrors: [],
        oldInput: {
            username: '',
            firstname: '',
            lastname: '',
            country: '',
            email: ''

        }
    })
}


//POST REGISTER
module.exports.postRegister = async (req, res) => {
    try {
        //Find if the username exist
        const foundUser = await User.findOne({ username: req.body.username });
        if (foundUser) {
            return res.render('registrationForm', {
                errorMessage: 'User already exist',
                validationErrors: [],
                oldInput: {
                    username: req.body.username,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    country: req.body.country,
                    email: req.body.email

                }
            })
        } else {
            //Create the user
            try {

                //Use express validator to check
                const errors = validationResult(req);

                //If there are errors
                if (!errors.isEmpty()) {
                    return res.render('registrationForm', {
                        validationErrors: errors.array(),
                        errorMessage: errors.array()[0].msg, //This will pull only the error for this
                        oldInput: {
                            username: req.body.username,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            country: req.body.country,
                            email: req.body.email
                        }
                    })
                }

                //Hash the user password
                try {
                    const hashedPassword = await bcrypt.hash(req.body.password, 12)

                    //Create the user
                    try {
                        await User.create({
                            username: req.body.username,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            email: req.body.email,
                            country: req.body.country,
                            password: hashedPassword
                        });

                        res.redirect('/login')
                    } catch (error) {
                        //Catching creating user errrors
                    }

                } catch (error) {
                    //Catching hashing password errors
                    console.log('hashing errors')
                }

            } catch (error) {

                //Catching validation errors
                res.json(error)
            }
        }
    } catch (error) {
        //Catching finding user error
        console.log(error)
    }


};



//GET LOGIN FORM

module.exports.getLoginForm = (req, res) => {
    console.log(req.session.user)
    res.render('login', {
        errorMessage: ''
    })
}

//POST LOGIN
module.exports.postLogin = async (req, res) => {

    try {


        //Find the user by username
        const foundUser = await User.findOne({ username: req.body.username });

        //If there is a user create a session for it
        if (!foundUser) {
            // req.session.user = foundUser;
            //Resave the session

            return res.render('login', {
                errorMessage: 'Invalid username/password'
            })

        } else {
            //If user is found
            //save the user into session

            // const isMatch = bcrypt.compare(req.body.password, foundUser.password);

            // if (isMatch) {
            //     req.session.user = foundUser
            //     //resave the user
            //     await req.session.save();
            //     res.redirect('/dashboard')
            // }


            bcrypt.compare(req.body.password, foundUser.password).then((passMatch) => {
                if (passMatch) {
                    //Add the user to session
                    req.session.user = foundUser
                    req.session.save(() => {
                        res.redirect('/dashboard')
                    })

                } else {
                    //Redirect to sigin
                    res.render('login', {
                        errorMessage: 'Invalid password/username'
                    })
                }
            })
        }
    } catch (error) {
        //catching finding user
    }
};


module.exports.dashboard = (req, res) => {
    res.render('dashboard', {
        user: req.session.user
    })
}
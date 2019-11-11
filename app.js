
require('dotenv').config()
const express = require("express");
const app = express();
const flash = require('connect-flash');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local')
const methodOverride = require('method-override')
//CUSTOM IMPORT
const User = require('./models/User');

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//============
// CONGIGURING PASSPORT
//==================

app.use(require('express-session')({
    secret: 'Am on the way',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Passing the authenticated user - req.user to every routs
app.use(function (req, res, next) {
    //Whatever we put into res.local is what available in our templates
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error') //.error holds all the error message in our routes.Anywhere i placed <%=error%> it will display all the messages inside the error variable in our  routes
    res.locals.success = req.flash('success') ///.success holds all the success message in our routes  
    next()

})

//SERVER
app.get("/", (req, res) => {
    res.send(`<h1>Welcome to HicoTek foundation</h1>`)
});
const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
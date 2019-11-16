const path = require('path')
require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require('mongoose');
//CUSTOM IMPORT
const User = require('./models/User');

//CONFIGURING VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', 'views');

//SERVING STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));


//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//============
// CONGIGURING PASSPORT
//==================


//SERVER
app.get("/", (req, res) => {
    res.render('home')
});
const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
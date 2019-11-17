const path = require('path')
require('dotenv').config()
const express = require("express");
const session = require('express-session')
const mongoose = require('mongoose');
const MongDBStore = require('connect-mongodb-session')(session);
//CUSTOM IMPORT
const userRouter = require('./routes/usersRoute');
const app = express();

//=======
//DB SETUP
//=========
const MONGO_URI = "mongodb://localhost/Hicotek-Charity";
const store = new MongDBStore({
    uri: MONGO_URI,
    collection: 'session'
});

//CONFIGURE MONGODB TO STORE SESSION INTO DB

//Create a store 

//Configure session and pass to 
app.use(
    session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: false,
        store: store
    })
);
//CONNECT DB
mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true, useNewUrlParser: true
}, () => {
    console.log(`DB has connected successfully`)
})

//CONFIGURING VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', 'views');



//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//SERVING STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//MOUNTING ROUTES
app.use('/', userRouter)


//SERVER


const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port} 🔥`);
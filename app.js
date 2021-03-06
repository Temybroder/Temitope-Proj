const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const crypto = require("crypto");
// const bodyParser = require('body-parser');
const fs = require('fs'); 
const path = require("path");
const multer = require('multer'); 

const { forwardAuthenticated } = require('./config/auth');


// Passport Config
require('./config/passport')(passport);


// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views'));

// Express body parser
// app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use( express.static("public" ) );
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));
app.use('/admin', require('./routes/admin.js'));
app.use('/admng', require('./routes/admng.js'));
app.use('/changename', require('./routes/changename.js'));
app.use('/findlawyer', require('./routes/findlawyer.js'));
app.use('/subs', require('./routes/subs.js'));
app.use('/registercompany', require('./routes/registercompany.js'));
app.use('/generate', require('./routes/generate.js'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

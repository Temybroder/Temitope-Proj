const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
  // Load User
let db = require('../config/keys');

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
var User =  require('../models/User');
var Coopform =  require('../models/Coopform');


// Home Page
router.get('/welcome', forwardAuthenticated, (req, res) => res.render('welcome'));

// About Page
router.get('/about', (req, res) => res.render('about'));

// Services Page
router.get('/services', forwardAuthenticated, (req, res) => res.render('services'));

// Contact Page
router.get('/contact', (req, res) => res.render('contact'));


// Understand-More Page
router.get('/understand', (req, res) => res.render('understand'));

// Settings Page
router.get('/settings', ensureAuthenticated, (req, res) =>
  res.render('settings', {
    user: req.user
  })
);
// Security Page
router.get('/security', ensureAuthenticated, (req, res) =>
  res.render('security', {
    user: req.user
  })
);

// Projects Page
router.get('/projects', ensureAuthenticated, (req, res) =>
  res.render('projects', {
    user: req.user
  })
);


// Page to Submit Completed Project
router.get('/subclp', ensureAuthenticated, (req, res) =>
  res.render('completedlawproj', {
    user: req.user
  })
);

// Notifications Page
router.get('/notifications', ensureAuthenticated, (req, res) =>
  res.render('notifications', {
    user: req.user
  })
);


// Project Dasboard Page
router.get('/lpjs', ensureAuthenticated, (req, res) =>
  res.render('lawproject', {
    user: req.user
  })
);






// Table Page
router.get('/security', ensureAuthenticated, (req, res) =>
  res.render('security', {
    user: req.user
  })
);



//USER and LAWYERS
// Gets All Users
router.get("/popalluse", ensureAuthenticated, (req, res, next) => {
  User.find()
  .populate({path: 'coop'})
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        users: docs.map(doc => {
          return {
            _id: doc._id,
            project: doc.coop,
            email: doc.email, 
            name: doc.name,
            Submitted: doc.date 
          };})});
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});





// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  // const { name, email, password, password2, role } = req.body;
  console.log(req.body)
  // let errors = [];

  // if (!name || !email || !password || !password2 || !role) {
  //   errors.push({ msg: 'Please enter all fields' });
  // }

  // if (password != password2) {
  //   errors.push({ msg: 'Passwords do not match' });
  // }

  // if (password.length < 6) {
  //   errors.push({ msg: 'Password must be at least 6 characters' });
  // }

  // if (errors.length > 0) {
  //   res.render('register', {
  //     errors,
  //     name,
  //     email,
  //     password,
  //     password2,
  //     role
  //   });
  // } else {
  //   User.findOne({ email: email }).then(user => {
  //     if (user) {
  //       errors.push({ msg: 'Email already exists' });
  //       res.render('register', {
  //         errors,
  //         name,
  //         email,
  //         password,
  //         password2,
  //         role
  //       });
  //     } else {
  //       const newUser = new User({
  //         name,
  //         email,
  //         password,
  //         role
  //       });

  //       bcrypt.genSalt(10, (err, salt) => {
  //         bcrypt.hash(newUser.password, salt, (err, hash) => {
  //           if (err) throw err;
  //           newUser.password = hash;
  //           newUser
  //             .save()
  //             .then(user => {
  //               req.flash(
  //                 'success_msg',
  //                 'You are now registered and can log in'
  //               );
  //               res.redirect('/users/login');
  //             })
  //             .catch(err => console.log(err));
  //         });
  //       });
  //     }
  //   });
  // }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

// Delete User
router.delete("/:id", async (req, res) => {
	try {
		await User.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "User Account doesn't exist!" })
	}
});





// router.delete("/:id", (req, res) => {
  // Puppy.findByIdAndDelete(req.params.id)
 //   .then(() => res.json("Puppy deleted =( "))
 //   .catch(err => res.status(400).json("Error: " + err))
// })



module.exports = router;

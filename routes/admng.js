const express = require('express');
const router = express.Router();
  // Load User
let db = require('../config/keys');
let User =  require('../models/User');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


// Load Assigned Complete Project Model
let Completepform =  require('../models/Completepform');
let Samp =  require('../models/Samp');


// Load Bizname Model
let Biznameform =  require('../models/Biznameform');
let Biznameupload =  require('../models/Biznameupload');


// Load Cooperative Model
let Coopform =  require('../models/Coopform');
let Coopupload =  require('../models/Coopupload');


// Load Private Limited Company Model
let Privatelimitedform =  require('../models/Privatelimitedform');
let Privatelimitedupload =  require('../models/Privatelimitedupload');


// Load Limited by Guarantee Company Model
let Limbygform =  require('../models/Limbygform');
let Limbygupload =  require('../models/Limbygupload');


// Load Changename with Guardian Newspaper Model
let Nameguardform =  require('../models/Nameguardform');
let Nameguardupload =  require('../models/Nameguardupload');


// Load Changename with Punch Newspaper Model
let Namepunchform =  require('../models/Namepunchform');
let Namepunchupload =  require('../models/Namepunchupload');


// Load Changename with The Sun Newspaper Model
let Namesunform =  require('../models/Namesunform');
let Namesunupload =  require('../models/Namesunupload');


// Load Changename with Vanguard Newspaper Model
let Namevanform =  require('../models/Namevanform');
let Namevanupload =  require('../models/Namevanupload');


// Load Changename with Thisday Newspaper Model
let Namethisdayform =  require('../models/Namethisdayform');
let Namethisdayupload =  require('../models/Namethisdayupload');


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


// ALL USERS
// Gets All Populated Users
router.get("/popallusers", (req, res, next) => {
  User.find()
  .populate('coops')
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




//COOPERATIVES
// Gets All Cooperatives
router.get("/popallcoops", (req, res, next) => {
  Coopform.find()
  .select("user name email date _id")
  .populate('extra')
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        users: docs.map(doc => {
          return {
            _id: doc._id,
            project: doc.extra,
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


// Gets All Users
router.get('/allusers', ensureAuthenticated, function (req, res) {
  User.find({}, function (err, users)
  {
  if (err){
  res.send('something went really wrong');
  next(); 
  }
  res.render('alluserstable', {users});
  }
  )}
  );
  

// Gets All Users
router.get('/jsonusers', ensureAuthenticated, function (req, res) {
  User.find({}, function (err, users)
  {
  if (err){
  res.send('something went really wrong');
  next(); 
  }
  res.json({users});
  }
  )}
  );
  

// Gets All Coopforms
//router.get('/jsoncoops', ensureAuthenticated, function (req, res) {
  //Coopform.find({}, function (err, coopforms)
  //{
  //if (err){
  //res.send('something went really wrong');
  //next(); 
  //}
  //res.json({coopforms});
  //}
  //)}
  //);


// Gets All Samples
router.get('/jsonsamps', ensureAuthenticated, function (req, res) {
  Samp.find({}, function (err, samps)
  {
  if (err){
  res.send('something went really wrong');
  next(); 
  }
  res.json({samps});
  }
  )}
  );
  




// Get Single User
router.get("/:Id", (req, res) => {
  User.findById(req.params.id)
  .then(user => res.json(user))
  .catch(err => res.status(400).json( `No User with the id of ${req.params.id}`))
})


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

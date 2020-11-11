const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Changename
router.get('/changename', ensureAuthenticated, (req, res) =>
  res.render('changename', {
    user: req.user
  })
);
 

//Page to Select Changename Requirements Submission method page, after payment

router.get('/changereq', ensureAuthenticated, (req, res) =>
  res.render('changereq', {
    user: req.user
  })
);


// GUARDIAN
//Change Name Guardian Newspaper by Form
router.get('/nameguardian', ensureAuthenticated, (req, res) =>
  res.render('nameguardian')
);

//Change Name Guardian Newspaper by Snapshot Upload
router.get('/subnamegu', ensureAuthenticated, (req, res) =>
  res.render('nameguardupload')
);


// THE PUNCH
//Change Name Punch Newspaper by Form
router.get('/namepunch', ensureAuthenticated, (req, res) =>
  res.render('namepunch')
);

//Change Name Punch Newspaper by Snapshot Upload
router.get('/subnamepu', ensureAuthenticated, (req, res) =>
  res.render('namepunchupload')
);


// THE SUN
//Change Name Sun Newspaper by Form
router.get('/namesun', ensureAuthenticated, (req, res) =>
  res.render('namethesun')
);

//Change Name Sun Newspaper by Snapshot Upload
router.get('/subnamesu', ensureAuthenticated, (req, res) =>
  res.render('namesunupload')
);



// THISDAY
//Change Name Thisday Newspaper by Form
router.get('/namethisday', ensureAuthenticated, (req, res) =>
  res.render('namethisday')
);

//Change Name Thisday Newspaper by Snapshot Upload
router.get('/subnametdu', ensureAuthenticated, (req, res) =>
  res.render('nametdupload')
);


// VANGUARD
//Change Name Vanguard Newspaper by Form
router.get('/namevanguard', ensureAuthenticated, (req, res) =>
  res.render('namevanguard')
);

//Change Name Vanguard Newspaper by Snapshot Upload
router.get('/subnamevu', ensureAuthenticated, (req, res) =>
  res.render('namevanupload')
);


//SAMPLE GET ROUTE WITH DATA TO RENDER
// router.get('/namethisday', ensureAuthenticated, (req, res) =>
 // res.render('namethisday', {
  //  user: req.user
 // })
 // );


module.exports = router;

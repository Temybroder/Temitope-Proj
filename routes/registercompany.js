const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');


// Route to show Register company page
router.get('/registercompany', ensureAuthenticated, (req, res) =>
  res.render('registercompany', {
    user: req.user
  }  )
);
 



// Route to show Register Business Name by Form page

router.get('/formbizname', ensureAuthenticated, (req, res) =>
  res.render('formbizname')
);


// Route to show Register Business Name by Upload page

router.get('/uploadbizname', ensureAuthenticated, (req, res) =>
  res.render('uploadbizname')
);


// Route to show Register Cooperative by form page

router.get('/formcooperative', (req, res) =>
  res.render('formcooperative')
);
 

// Route to show Register Cooperative by Upload page

router.get('/uploadcooperative', ensureAuthenticated, (req, res) =>
  res.render('uploadcooperative')
);


// Route to show Register Private Limited by form page

router.get('/formprivatelimited', ensureAuthenticated, (req, res) =>
  res.render('formprivatelimited')
);
 

// Route to show Register Private Limited by Upload page

router.get('/uploadprivatelimited', ensureAuthenticated, (req, res) =>
  res.render('uploadprivatelimited')
);




// Route to show Register Limited by Guarantee by form page

router.get('/formlimbyguarantee', ensureAuthenticated, (req, res) =>
  res.render('formlimbyguarantee')
);
 

// Route to show Register Limited by Guarantee by Upload page

router.get('/uploadlimbyguarantee', ensureAuthenticated, (req, res) =>
  res.render('uploadlimbyguarantee')
);


module.exports = router;
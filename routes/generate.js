const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');


// Generate Will (DEED OF GIFT)
router.get('/generatewill', ensureAuthenticated, (req, res) =>
  res.render('registercompany', {
    user: req.user
  })
);
 

//Generate Contracts
router.get('/generatecontracts', ensureAuthenticated, (req, res) =>
  res.render('privatelimited', {
    user: req.user
  })
);


module.exports = router;
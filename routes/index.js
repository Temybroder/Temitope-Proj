const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));


router.get('/localhost:5000/users/about', ensureAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>{
if (req.user.role === 'lawyer')

  res.render('lawyersdashboard', {
    user: req.user
  }); else if (req.user.role === 'user')
  {
res.render ('dashboard', { user:req.user}
 ) }
 else if (req.user.role === 'admin')
  {
res.render ('dashboard', { user:req.user}
 ) }
}
);

router.get('/admindash', ensureAuthenticated, (req, res) =>{
  if (req.user.role === 'admin')
  
    res.render('dashboard', {
      user: req.user
    });
  }
  );


module.exports = router;

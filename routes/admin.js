const express = require('express');
const router = express.Router();

  // Load User
  let db = require('../config/keys');
  let User =  require('../models/User');
  let Biznameform =  require('../models/Biznameform');
  const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

  let Coopform =  require('../models/Coopform');
const idFilter = req => member => member.id === parseInt(req.params.id);

//USER and LAWYERS
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



router.get("/coop/:id", (req, res, next) => {
	Coopform.findById(req.params.id)
	  .populate('user')
	  .exec()
	  .then(coopform => {
		if (!coopform) {
		  return res.status(404).json({
			message: "coopform not found"
		  });
		}
		res.status(200).json({
		  coopform: coopform,
		});
	  })
	  .catch(err => {
		res.status(500).json({
		  error: err
		});
	  });
  });
  

// Get Single Coopform
// router.get("/coops/:id", ensureAuthenticated, (req, res) => {
//	Coopform.findById(req.params.id)
//	  .then(coopform =>   res.json({coopform: coopform})  )
//	  .catch(err => res.status(400).json( `No Cooperative Project with the id of ${req.params.id}`))
//  })
  


// Update User

router.patch("/upuser/:id", async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id })

		if (req.body.name) {
			user.name = req.user.name
		}

		if (req.body.email) {
			user.email = req.body.email
		}

    if (req.body.password) {
			user.password = req.body.password
    }
    
    if (req.body.role) {
			user.role = req.body.role
		}

    await user.save()
    
    res.redirect('/s-admin');
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
}
);


// Delete User
router.delete("/dusr/:id", async (req, res) => {
	try {
		await User.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "User Account doesn't exist!" })
	}
});


 module.exports = router;

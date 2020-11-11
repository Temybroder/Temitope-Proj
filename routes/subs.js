const express = require('express');
const router = express.Router();
const passport = require('passport');
const { ensureAuthenticated } = require('../config/auth');
router.use(express.static(__dirname+"./public/"));


// Load Assigned Complete Project Model
let Completepform =  require('../models/Completepform');

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




// Submit Business Name registration request submitted via Form
router.patch('/updproject', (req, res) => 
{
  
}
)





// Submit Business Name registration request submitted via Form
router.post('/submitbnf', (req, res) => {

    const newBiznameform = new Biznameform({
      name : req.body.name
    });
      
        newBiznameform
          .save()
          .then(biznameform => {
            req.flash(
              'success_msg',
              'Submitted: The Availability of Your Business Name will now be confirmed'
            );
            res.redirect('/dashboard');
          })
});

const fs = require('fs'); 
const path = require('path'); 
const multer = require('multer'); 
const storage = multer.diskStorage({ 
	destination: (req, file, cb) => { 
		cb(null, 'C:/auth-anew/routes/uploads') 
	}, 
	filename: (req, file, cb) => { 
		cb(null, file.fieldname + '-' + Date.now()) 
	} 
}); 
const upload = multer({ storage: storage }); 





// Submit Business Name registration request submitted via Image Upload
router.post('/submitbnu', upload.single('image'), (req, res, next) => {

  let newBiznameupload = new Biznameupload({
    
		img: { 
			data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
			contentType: 'image/png'
		}
  })
    
      newBiznameupload
        .save()
        .then(biznameupload => {
          req.flash(
            'success_msg',
            'Submitted: The Availability of Your Business Name will now be confirmed'
          );
          res.redirect('/dashboard');
        })
     
});



// COOPERATIVE
// Submit Cooperative registration request submitted via Form
router.post('/submitcopf', (req, res) => {
  console.log(req.body)
  const newCoopform = new Coopform({
    coopname : req.body.coopname,
    dirname : req.body.dirname,
    email : req.body.email,
    address: req.body.address
  });
      newCoopform
        .save()
        .then(coopform => {
          req.flash(
            'success_msg',
            'Submitted: Cooperative is now being registered'
          );
          res.status(200).json(coopform)
        })
     
});




// Submit Cooperative registration request submitted via Image Upload
router.post('/submitcopu', upload.single('image'), (req, res) => {

const newCoopupload = new Coopupload({
 
  img: { 
    data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
    contentType: 'image/png'
  }
});
  
    newCoopupload
      .save()
      .then(coopupload => {
        req.flash(
          'success_msg',
          'Submitted: Cooperative is now being registered'
        );
      res.redirect('/dashboard');
      })
});




// PRIVATE LIMITED COMPANY
// Submit Private Limited registration request submitted via Form
router.post('/submitplf', upload.single('image'), (req, res) => {

  const newPrivatelimitedform = new Privatelimitedform({
    name : req.body.name,
    dirname : req.body.dirname,
    email : req.body.email,
    address: req.body.address,
    img: { 
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
      contentType: 'image/png'
    }
  });
    
      newPrivatelimitedform
        .save()
        .then(privatelimitedform => {
          req.flash(
            'success_msg',
            'Submitted: Private Ltd Company is now being registered'
          );
        res.redirect('/dashboard');
        })
     
});



// Submit  Private Limited registration request submitted via Image Upload
router.post('/submitplu', upload.single('image'), (req, res) => {

const newPrivatelimitedupload = new Privatelimitedupload({
 
  img: { 
    data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
    contentType: 'image/png'
  }
});
  
    newPrivatelimitedupload
      .save()
      .then(privatelimitedupload => {
        req.flash(
          'success_msg',
          'Submitted: Private Ltd Company is now being registered'
        );
      res.redirect('/dashboard');
      })
   
});


// LIMITED BY GUARANTEE
// Submit Limited by Guarantee registration request submitted via Form
router.post('/submitlimbygf', upload.single('image'), (req, res) => {

  const newLimbygform = new Limbygform({
   
    name : req.body.name,
    dirname : req.body.dirname,
    email : req.body.email,
    address: req.body.address,
    img: { 
			data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
			contentType: 'image/png'
		}

  });
    
      newLimbygform
        .save()
        .then(limbygform => {
          req.flash(
            'success_msg',
            'Submitted: Company is now being registered'
          );
        res.redirect('/dashboard');
        })
     
});



// Submit Limited by Guarantee registration request submitted via Image Upload
router.post('/submitlimbygu', upload.single('image'), (req, res) => {

const newLimbygupload = new Limbygupload({

  img: { 
    data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
    contentType: 'image/png'
  }
});
  
    newLimbygupload
      .save()
      .then(limbygupload => {
        req.flash(
          'success_msg',
          'Submitted: Company is now being registered'
        );
      res.redirect('/dashboard');
      })
   
});





// GUARDIAN
//Submit Change Name Guardian Newspaper by Form
router.post('/nameguardian', upload.single('image'), (req, res) => {

  const newNameguardform = new Nameguardform({
    formername : req.body.formername,
    newname : req.body.newname,
    address: req.body.address,
    reason : req.body.reason,
    img: { 
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
      contentType: 'image/png'
    }
  });
    
      newNameguardform
        .save()
        .then(nameguardform => {
          req.flash(
            'success_msg',
            'Submitted: Your Change of Name is being processed'
          );
          res.redirect('/changename/changename');
        })
     
});


// Submit Change Name Guardian Newspaper by Snapshot Upload
router.post('/subnamegu', upload.single('image'), (req, res) => {

  const newNameguardupload = new Nameguardupload({
   
    img: { 
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
      contentType: 'image/png'
    }
  });
    
      newNameguardupload
        .save()
        .then(nameguardupload => {
          req.flash(
            'success_msg',
            'Submitted: Your Change of Name is now being processed'
          );
          res.redirect('/dashboard');
        })
     
  });





// PUNCH NEWSPAER
// Submit Change Name Punch Newspaper by Form
router.post('/namepunch', upload.single('image'), (req, res) => {

  const newNamepunchform = new Namepunchform({
    formername : req.body.formername,
    newname : req.body.newname,
    address: req.body.address,
    reason : req.body.reason,
    img: { 
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
      contentType: 'image/png'
    }
  });
    
      newNamepunchform
        .save()
        .then(namepunchform => {
          req.flash(
            'success_msg',
            'Submitted: Your Change of Name is being processed'
          );
          res.redirect('/changename/changename');
        })
     
});


// Submit Change Name Punch Newspaper by Snapshot Upload
router.post('/subnamepu', upload.single('image'), (req, res) => {

  const newNamepunchupload = new Namepunchupload({
   
    img: { 
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
      contentType: 'image/png'
    }
  });
    
      newNamepunchupload
        .save()
        .then(namepunchupload => {
          req.flash(
            'success_msg',
            'Submitted: Your Change of Name is now being processed'
          );
         res.redirect('/dashboard');
        })
     
  });



// SUN NEWSPAER
//Submit Change Name Sun Newspaper by Form
router.post('/namesun', upload.single('image'), (req, res) => {

  const newNamesunform = new Namesunform({
    formername : req.body.formername,
    newname : req.body.newname,
    address: req.body.address,
    reason : req.body.reason,
    img: { 
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
      contentType: 'image/png'
    }
  });
    
      newNamesunform
        .save()
        .then(namesunform => {
          req.flash(
            'success_msg',
            'Submitted: Your Change of Name is being processed'
          );
         res.redirect('/dashboard');
        })
     
});


// Submit Change Name sun Newspaper by Snapshot Upload
router.post('/subnamesu', upload.single('image'), (req, res) => {

  const newNamesunupload = new Namesunupload({
   
    img: { 
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
      contentType: 'image/png'
    }
  });
    
      newNamesunupload
        .save()
        .then(namesunupload => {
          req.flash(
            'success_msg',
            'Submitted: Your Change of Name is now being processed'
          );
         res.redirect('/dashboard');
        })
     
  });



  // THISDAY LIVE NEWSPAER
// Submit Change Name ThisDay Live Newspaper by Form
router.post('/namethisday', upload.single('image'), (req, res) => {

  const newNamethisdayform = new Namethisdayform({
    formername : req.body.formername,
    newname : req.body.newname,
    address: req.body.address,
    reason : req.body.reason,
    img: { 
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
      contentType: 'image/png'
    }
  });
    
      newNamethisdayform
        .save()
        .then(namethisdayform => {
          req.flash(
            'success_msg',
            'Submitted: Your Change of Name is being processed'
          );
         res.redirect('/dashboard');
        })
     
});


// Submit Change Name Thisday Newspaper by Snapshot Upload
router.post('/subnametdu', upload.single('image'), (req, res) => {

  const newNamethisdayupload = new Namethisdayupload({
   
    img: { 
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
      contentType: 'image/png'
    }
  });
    
      newNamethisdayupload
        .save()
        .then(namethisdayupload => {
          req.flash(
            'success_msg',
            'Submitted: Your Change of Name is now being processed'
          );
          res.redirect('/changename/changename');
        })
     
  });

  
    // VANGUARD NEWSPAER
// Submit Change Name Vanguard Newspaper by Form
router.post('/namevanguard', upload.single('image'), (req, res) => {

  const newNamevanform = new Namevanform({
    formername : req.body.formername,
    newname : req.body.newname,
    address: req.body.address,
    reason : req.body.reason,
    img: { 
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
      contentType: 'image/png'
    }
  });
    
      newNamevanform
        .save()
        .then(namevanform => {
          req.flash(
            'success_msg',
            'Submitted: Your Change of Name is being processed'
          );
          res.redirect('/changename/changename');
        })
     
});


// Submit Change Name Vanguard Newspaper by Snapshot Upload
router.post('/subnamevu', upload.single('image'), (req, res) => {

  const newNamevanupload = new Namevanupload({
   
    img: { 
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
      contentType: 'image/png'
    }
  });
    
      newNamevanupload
        .save()
        .then(namevanupload => {
          req.flash(
            'success_msg',
            'Submitted: Your Change of Name is now being processed'
          );
          res.redirect('/changename/changename');
        })
     
  });


// Lawyer Submit Assigned Completed Project 
router.post('/subclprj', upload.single('image'), (req, res) => {

  const newCompletepform = new Completepform({
    title : req.body.title,
    notes : req.body.notes,
    img: { 
			data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
			contentType: 'image/png'
		}
  });
      newCompletepform
        .save()
        .then(completepform => {
          req.flash(
            'success_msg',
            'Assigned Project is Submitted'
          );
          res.redirect('/dashboard');
        })
     
});








module.exports = router;
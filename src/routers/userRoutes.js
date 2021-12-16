const express = require('express'); 
const router = express.Router();
const path = require('path');
const multer = require('multer');


const usersController = require('../controllers/usersController.js');

var storage = multer.diskStorage({
    destination: function (req, file, cb)
    {
      cb(null, path.join(__dirname,'../','../public/images/users') )  
    },
    filename:  function(req, file, cb){
       cb(null, 'avatar' + "-" + Date.now() + path.extname(file.originalname) );
    }
})

var  upload  =  multer ( { storage } );

router.get('/login',usersController.login);

router.get('/register',usersController.register);
router.post('/register', upload.single('image'), usersController.store );
    
module.exports = router;
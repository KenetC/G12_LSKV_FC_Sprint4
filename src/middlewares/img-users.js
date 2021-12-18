const path = require('path');
const multer = require('multer');

var storageUsers = multer.diskStorage({
    destination: (req,res,cb)=>{
        cb(null, path.join(__dirname,'../../public/images/users'))
    },
    filename:  function(req, file, cb){
        cb(null, 'avatar' + "-" + Date.now() + path.extname(file.originalname) );
    }
});


module.exports = storageUsers; 
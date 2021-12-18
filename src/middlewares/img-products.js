const path = require('path');
const multer = require('multer'); 

var storageProd = multer.diskStorage({
    destination: function (req, file, cb)
    {
      cb(null, path.join(__dirname,'../','../public/images/products') )  
    },
    filename:  function(req, file, cb){
       cb(null, 'img' + "-" + Date.now() + path.extname(file.originalname) );
    }
});

module.exports = storageProd; 
const multer = require('multer'); 
const path = require('path'); 

var storageProd = multer.diskStorage({
    destination: function (req, file, cb)
    {
      cb(null, path.join(__dirname,'../','../public/images/products') )  
    },
    filename:  function(req, file, cb){
       cb(null, 'imgs' + "-" + Date.now() + path.extname(file.originalname) );
    }
});

module.exports = storageProd; 
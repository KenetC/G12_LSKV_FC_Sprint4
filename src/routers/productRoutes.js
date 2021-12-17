const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');


const productController = require('../controllers/productController');

var storage = multer.diskStorage({
    destination: function (req, file, cb)
    {
      cb(null, path.join(__dirname,'../','../public/images/products') )  
    },
    filename:  function(req, file, cb){
       cb(null, 'img' + "-" + Date.now() + path.extname(file.originalname) );
    }
})

var  upload  =  multer ( { storage } );

router.get('/', productController.list);

router.get('/create',productController.create);
// router.post('/',productController.store); 

router.get('/edition',productController.edition)

router.get('/productDetail/:productId', productController.prodDetail );

// mediante res query
router.get('/filter', productController.filter);

router.get('/productCart' ,productController.prodCart1 );
router.get('/productCart2',productController.prodCart2 );
router.get('/productCart3',productController.prodCart3 );
router.get('/productCart4',productController.prodCart4 );


module.exports = router;
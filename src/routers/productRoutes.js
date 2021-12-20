const express = require('express');
const router = express.Router();
const path = require('path');
const storageSecu = require('../middlewares/imgs-products');
const storagePrin = require('../middlewares/img-products');

const multer = require('multer');

const productController = require('../controllers/productController');
var uploadSecu = multer({ storageSecu });
var uploadPrin = multer({ storagePrin });

router.get('/', productController.list);

router.get('/create',productController.create);
//router.post('/', uploadSecu.fields([{images:'images'}, {image:"image"}]) , productController.store); 
router.post('/',uploadSecu.array('images',5), productController.store);
//  router.get('/edition',productController.edition)
//ruoter.put('/edition/:id',productController.cambio)

// mediante res query
router.get('/filter', productController.filter);

router.get('/productCart' ,productController.prodCart1 );
router.get('/productCart2',productController.prodCart2 );
router.get('/productCart3',productController.prodCart3 );
router.get('/productCart4',productController.prodCart4 );

router.get('/:productId', productController.prodDetail );


router.put("/:id/edit", productController.prodEdition);
router.get("/:id/edit", productController.edition);

module.exports = router;
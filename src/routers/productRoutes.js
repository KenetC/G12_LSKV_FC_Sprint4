const express = require('express');
const router = express.Router();
const path = require('path');

const multer = require('multer');

var upload = require('../middlewares/img-products');
var uploadM = require('../middlewares/imgs-products');

const productController = require('../controllers/productController');

router.get('/', productController.list);

router.get('/create',productController.create);
//router.post('/', uploadSecu.fields([{images:'images'}, {image:"image"}]) , productController.store); 

router.post('/', upload.single('image'), productController.store);
//router.post('/', [upload.single('image'),uploadM.array('images')], productController.store);
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
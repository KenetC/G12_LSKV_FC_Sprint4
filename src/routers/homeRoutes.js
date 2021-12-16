const express = require('express'); 
const controllers=require('../controllers/homeControllers')
const router = express.Router();
const path = require('path');

router.get('/', controllers.index);


module.exports = router;
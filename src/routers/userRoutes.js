const express = require('express'); 
const router = express.Router();
const multer = require('multer');
const storage = require('../middlewares/img-users'); 

const usersController = require('../controllers/usersController.js');
const upload = multer({ storage });

router.get('/', usersController.list); 
router.delete('/:id',usersController.delete );

router.get('/login',usersController.login);

router.get('/register',usersController.register);
router.post('/register', upload.single('image'), usersController.store );



module.exports = router;
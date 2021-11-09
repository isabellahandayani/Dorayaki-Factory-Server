const { Router } = require('express');

const controller = require('../controllers/UserControllers');
const router = Router();

router.post('/register', controller.createUser);
router.post('/login', controller.findUser);

module.exports = router

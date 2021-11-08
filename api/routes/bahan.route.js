const express = require('express')
const router = express.Router()
const bahanController = require('../controllers/bahan.controller')


router.get('/', bahanController.index);
// router.get('/create', bahanController.create);
// router.get('*', bahanController.notFound);

module.exports = router

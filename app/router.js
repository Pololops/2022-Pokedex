const express = require('express');
const mainController = require('./controllers/mainController');

const router = express.Router();

router.get(`/`, mainController.home);
router.get(`/detail/:id`, mainController.detail);

router.get(`/types`, mainController.types);
router.get(`/type/:id`, mainController.oneType);

module.exports = router;
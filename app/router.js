const express = require(`express`);
const router = express.Router();

const mainController = require(`./controllers/mainController`);

router.get(`/`, mainController.home);
router.get(`/detail/:id`, mainController.detail);

router.get(`/types`, mainController.types);
router.get(`/type/:id`, mainController.oneType);

module.exports = router;
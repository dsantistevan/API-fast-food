var express = require('express');
var router = express.Router();

const apiController = require("../controllers/api.controller.js");

router.get('/', apiController.findAll);
router.get('/:id', apiController.findOne);
router.put('/', apiController.updateFactura);
router.post('/', apiController.createFactura);
router.delete('/', apiController.deleteFactura);
module.exports = router;
const { Router } = require('express');
const schema = require('../schemas/instruments.schema');
const controller = require('../controllers/instruments.controller');
const validate = require('../middlewares/validate.middleware');

const router = new Router();

router
    .route('/')
    .get(controller.getAll)
    .post(validate(schema.create), controller.create)

router
    .route('/:instrumentId')
    .delete(controller.deleteInstrument)

module.exports = router;

const { Router } = require('express');
const instrumentsRouter = require('./instruments.routes');

const router = new Router();

router.use('/instruments', instrumentsRouter);


module.exports = router;
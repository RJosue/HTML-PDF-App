const router = require('express').Router();
const publicRouter = require('./public/public-route.js');
const apiGenerarReporte = require('./api/generar-reporte.js');

router.use('/api', apiGenerarReporte);
router.use('/', publicRouter);

module.exports = router;
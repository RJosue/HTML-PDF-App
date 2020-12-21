const route = require('express').Router();
const { GenerarReporte } = require('../../dependencies/generar-reporte');

route.post('/generar-reporte', async (req, res) => {
    let reporte = await GenerarReporte.createReportFile();
    // let reporte = await GenerarReporte.createReportBuffer();
    res.send(reporte).json();
});

module.exports = route;
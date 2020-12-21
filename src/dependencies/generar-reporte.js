function GenerarReporte() {

    const fs = require('fs');
    const pdf = require('html-pdf');
    const ejs = require('ejs');
    const path = require('path');

    var Options = {
        height: '11in', // allowed units: mm, cm, in, px
        width: '8.5in', // allowed units: mm, cm, in, px
        format: 'Letter', // allowed units: A3, A4, A5, Legal, Letter, Tabloid
        orientation: 'portrait',
        timeout: 9000000,
    };

    this.createReportFile = () => {
        return new Promise(resolve => {
            try {
                var result = {
                    success: false,
                    noti: {
                        icon: 'error',
                        title: 'Ocurrio un error en el generador de reportes',
                    },
                };

                var fileName = path.join(__dirname, '../../public/reports/reporte-html-pdf.pdf');
                var pathFile = path.join(__dirname, '../../templates/html-template.ejs');
                var htmlRenderTemplate = ejs.render(fs.readFileSync(pathFile, 'utf8'));

                pdf.create(htmlRenderTemplate, Options).toFile(fileName, (err, res) => {
                    if (err) resolve(result);

                    result.success = true;
                    result.data = {
                        ruta: `/reports/`,
                        name: `reporte-html-pdf.pdf`,
                        nameReporte: `reporte-html-pdf.pdf`,
                    };

                    result.noti = {
                        icon: 'success',
                        title: 'Reporte generado con exito',
                    };

                    resolve(result);
                });
            } catch (error) {
                console.log(error);
                resolve(result);
            }
        });
    };

    this.createReportBuffer = () => {
        return new Promise(resolve => {
            try {
                var result = {
                    success: false,
                    noti: {
                        icon: 'error',
                        title: 'Ocurrio un error en el generador de reportes',
                    },
                };

                var fileName = path.join(__dirname, '../../public/reports/reporte-html-pdf.pdf');
                var pathFile = path.join(__dirname, '../../templates/html-template.ejs');
                var htmlRenderTemplate = ejs.render(fs.readFileSync(pathFile, 'utf8'));

                pdf.create(htmlRenderTemplate, Options).toBuffer((err, buffer) => {
                    if (err) resolve(result);

                    result.success = true;
                    result.data = {
                        ruta: `public/reports/`,
                        name: `reporte-html-pdf.pdf`,
                        nameReporte: `reporte-html-pdf.pdf`,
                        buffer
                    };

                    result.noti = {
                        icon: 'success',
                        title: 'Reporte generado con exito',
                    };
                    resolve(result);
                });
            } catch (error) {
                console.log(error);
                resolve(result);
            }
        });
    };
}

module.exports.GenerarReporte = new GenerarReporte();
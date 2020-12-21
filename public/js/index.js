
document.getElementById('btn-report').addEventListener('click', function () {
    fetch('/api/generar-reporte', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then(response => {
            Swal.fire(response.noti);
            descargarReportes(response.data);
        })
        .catch(error => {
            alert(error);
        });

    Swal.fire({
        title: 'Generando Reporte',
        text: 'Por favor espere... Este proceso puede tomar algo de tiempo',
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    });

});

descargarReportes = (data) => {  // Descargar Archivo
    document.getElementById("downloadReport").removeAttribute("href");
    document.getElementById("downloadReport").removeAttribute("download");
    document.getElementById("downloadReport").setAttribute("href", `${data.ruta}${data.nameReporte}`);
    document.getElementById("downloadReport").setAttribute("download", `${data.name}`);
    document.getElementById("downloadReport").click();
}
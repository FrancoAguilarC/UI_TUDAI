   
document.addEventListener("DOMContentLoaded", function () {
    var loaderContainer = document.getElementById('loaderContainer');
    var loaderProgress = document.getElementById('loaderProgress');
    var loaderPercentage = document.getElementById('loaderPercentage');
    var content = document.getElementById('content');

    // Simula el progreso de carga
    var progress = 0;
    var interval = setInterval(function () {
        progress += 1;
        loaderProgress.style.width = progress + '%';
        loaderPercentage.innerText = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);

            // Oculta el loader y muestra el contenido después de cargar la página
            setTimeout(function () {
                loaderContainer.style.display = 'none'; // Oculta el loader
                content.style.opacity = '1'; // Muestra el contenido
            }, 100); // Cambia la duración aquí (en milisegundos)
        }
    }, 50);
});


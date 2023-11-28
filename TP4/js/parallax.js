document.addEventListener("DOMContentLoaded", function () {
    // Animación de entrada al cargar la página
    /*var animatedElement = document.querySelector('.animated-element');
    animatedElement.style.opacity = '1';
    animatedElement.style.transform = 'translateY(0)';*/
    
    //efecto parallax
    var layers = document.querySelectorAll('.layer');

    function moveLayersOnScroll() {
        Array.from(layers).forEach(function (layer) {
            var depth = layer.getAttribute('data-depth');
            var translateValue = window.scrollY * depth * -1;
            layer.style.transform = 'translate3d(0%, ' + translateValue + 'px, 0)';
        });
    }

    window.addEventListener('scroll', moveLayersOnScroll);
    moveLayersOnScroll(); // Llamamos a la función una vez para que los elementos tengan la posición correcta al cargar la página
});
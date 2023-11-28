document.addEventListener("DOMContentLoaded", function () {
    var parallaxContainer = document.getElementById('parallaxContainer');
    var layers = document.querySelectorAll('.parallax-layer');


    parallaxContainer.addEventListener('mousemove', function (e) {
        var mouseX = e.clientX / window.innerWidth - 0.5;
        var mouseY = e.clientY / window.innerHeight - 0.5;

        Array.from(layers).forEach(function (layer, index) {
            var depth = layer.getAttribute('data-depth');
            var translateX = mouseX * depth * 100 + 'px';
            var translateY = mouseY * depth * 100 + 'px';

            layer.style.transform = 'translate(' + translateX + ', ' + translateY + ')';
        });
    });
});
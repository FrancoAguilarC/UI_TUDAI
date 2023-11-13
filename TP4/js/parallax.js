document.addEventListener("DOMContentLoaded", function () {
    var layers = document.querySelectorAll('.layer');

    function moveLayersOnScroll() {
        Array.from(layers).forEach(function (layer) {
            var depth = layer.getAttribute('data-depth');
            var translateValue = window.scrollY * depth * -1;
            layer.style.transform = 'translate3d(0%, ' + translateValue + 'px, 0)';
        });
    }

    window.addEventListener('scroll', moveLayersOnScroll);
});
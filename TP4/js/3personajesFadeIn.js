const contenedor = document.getElementById('contenedor');
const imagen2 = document.getElementById('imagen2');
    const imagenes = document.querySelectorAll('.imagen');

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function fadeInImages() {
      if (isInViewport(imagen2)) {
        /*contenedor.style.opacity = '1';*/
        imagenes.forEach((img, index) => {
          img.style.opacity = '1';
          img.style.transform = 'translateY(-100px)';
          /*
          var depth = imagenes.getAttribute('data-depth');
          img.style.transitionDuration = 'depth';
          img.style.transitionDelay = 'depth';*/
        });
        // Eliminar el event listener después de que las imágenes estén visibles
        window.removeEventListener('scroll', fadeInImages);
      }
    }

    window.addEventListener('scroll', fadeInImages);
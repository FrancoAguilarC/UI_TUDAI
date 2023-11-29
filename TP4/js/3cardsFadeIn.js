
    const imagen2 = document.getElementById('historia');
    const imagenes = document.querySelectorAll('.imagenHistoria');
    const texthistoria = document.querySelectorAll('.pOculto');

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
        imagenes.forEach((img, index) => {
          img.style.opacity = '1';
          img.style.transform = 'translateY(-100px)';
          
        });
       
        texthistoria.forEach((img, index) => {
            img.style.opacity = '1';
            img.style.transform = 'translateY(-100px)';
          });

          window.removeEventListener('scroll', fadeInImages);
      }
    }
    window.addEventListener('scroll', fadeInImages);
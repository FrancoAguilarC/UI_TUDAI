

    function hoverImage(image, backgroundImage) {
      contenedor.style.backgroundImage = `url('${backgroundImage}')`;

      const imagenes = document.querySelectorAll('.imagen');
      imagenes.forEach((img) => {
        if (img !== image) {
          img.style.transform = 'scale(0.8)';
          img.style.filter = 'blur(5px)';
        } else {
          img.style.transform = 'scale(1.2)';
          img.style.filter = 'blur(0)';
        }
      });
    }

    contenedor.addEventListener('mouseout', () => {
      contenedor.style.backgroundImage = "url('./images/trapezoideBlancoFinal.svg')";
      const imagenes = document.querySelectorAll('.imagen');
      imagenes.forEach((img) => {
        img.style.transform = 'scale(1)';
        img.style.filter = 'blur(0)';
      });
    });
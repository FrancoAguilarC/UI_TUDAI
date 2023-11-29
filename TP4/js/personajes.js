const contenedor = document.getElementById('contenedor');
/*
    function hoverImage(image) {
      contenedor.style.backgroundColor = '#e0e0e0'; // Cambiar a tu color deseado
*/
      function hoverImage(image, hoverImage) {
        contenedor.style.backgroundImage = hoverImage;

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
      contenedor.style.backgroundColor = '#555555';
      const imagenes = document.querySelectorAll('.imagen');
      imagenes.forEach((img) => {
        img.style.transform = 'scale(1)';
        img.style.filter = 'blur(0)';
      });
    });
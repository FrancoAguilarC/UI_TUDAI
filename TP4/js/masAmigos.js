document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.divMasAmigosColumnaIzquierda img');

    function handleScroll() {
      const scrollPosition = window.scrollY;

      images.forEach((image, index) => {
        const offsetTop = image.offsetTop;
        const nextImage = images[index + 1];

        if (nextImage) {
          const nextOffsetTop = nextImage.offsetTop;
          const isVisible = scrollPosition >= offsetTop && scrollPosition < nextOffsetTop;
          image.classList.toggle('visible', isVisible);
        } else {
          const isVisible = scrollPosition >= offsetTop;
          image.classList.toggle('visible', isVisible);
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Asegura que la visibilidad se actualice al cargar la página.
  });
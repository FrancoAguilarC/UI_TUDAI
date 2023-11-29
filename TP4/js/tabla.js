document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".imagen");
    let index = 0;

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        index = Math.floor(scrollPosition / window.innerHeight) % imagenes.length;

        imagenes.forEach((imagen, i) => {
            if (i === index) {
                imagen.classList.add("visible");
            } else {
                imagen.classList.remove("visible");
            }
        });
    });
});
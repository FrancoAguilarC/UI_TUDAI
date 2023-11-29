
document.addEventListener("scroll", () => {
    function clean() {
      document.querySelectorAll(".imgMasAmigos").forEach((s) => {
        s.classList.remove("show-img");
      });
      document.querySelectorAll(".parrafoScroll").forEach((s) => {
        s.classList.remove("show-txt");
      });
    }
  
    const scrollS6 = window.scrollY; // guarda el valor del desplazamiento vertical actual de la ventana
    if (scrollS6 < 4030) {
      clean();
      document.querySelector("#imgMasAmigos1").classList.add("show-img");
      document.querySelector("#parrafo1").classList.add("show-txt");
    } else if (scrollS6 >= 4030 && scrollS6 < 4400) {
      clean();
      document.querySelector("#imgMasAmigos2").classList.add("show-img");
      document.querySelector("#parrafo2").classList.add("show-txt");
    } else if (scrollS6 >= 4400 && scrollS6 < 5000) {
      clean();
      document.querySelector("#imgMasAmigos3").classList.add("show-img");
      document.querySelector("#parrafo3").classList.add("show-txt");
    } else if (scrollS6 >= 5000) {
      clean();
      document.querySelector("#imgMasAmigos4").classList.add("show-img");
      document.querySelector("#parrafo4").classList.add("show-txt");
    }
  });




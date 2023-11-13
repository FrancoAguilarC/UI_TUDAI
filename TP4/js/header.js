document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
      var header = document.querySelector('.stickyHeader');
      var logo = document.querySelector('.logoCentral img');
      
      if (window.scrollY > 50) {
              header.style.height = "103px";
              logo.style.width = "133px"; // Ajusta ancho del logo al hacer scroll
              logo.style.height = "68px"; // Ajusta altura del logo al hacer scroll
              logo.style.top = "24px";
              logo.style.left = "574px";
              /*header.style.background = "linear-gradient(180deg, var(--celesteDegrade) 0%, var(--celesteDegrade) 87.91%, rgba(84,153,248,0) 100% )" ;*/
              /*header.style.backgroundColor = "#555"; // Cambia el color de fondo al hacer scroll*/
          
      } else {
              header.style.height = "150px";
              logo.style.width = "590px"; // Ajusta ancho del logo al hacer scroll
              logo.style.height = "301px"; // Ajusta altura del logo al hacer scroll
              logo.style.top = "91px";
              logo.style.left = "330px";
      }
  });
});
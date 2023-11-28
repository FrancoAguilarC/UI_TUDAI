const menu = document.querySelector(".menu-toggle");

menu.addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("mostrar");
  document.querySelector(".menu-toggle").classList.toggle("active");
  


});

document.addEventListener('DOMContentLoaded', function () {
            var elementosLi = document.querySelectorAll('.nav-menu ul li.animar');
            elementosLi.forEach(function (li, index) {
                li.style.animationDelay = (0.3 * index) + 's';
            });
        });


const menu = document.querySelector(".hamburguesa");

menu.addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("mostrar");
  if(menu.className == "hamburguesa fa-solid fa-3x fa-bars"){
    menu.className = "hamburguesa fa-solid fa-3x fa-x";
  }
  else if(menu.className == "hamburguesa fa-solid fa-3x fa-x"){
    menu.className = "hamburguesa fa-solid fa-3x fa-bars";
  }
});



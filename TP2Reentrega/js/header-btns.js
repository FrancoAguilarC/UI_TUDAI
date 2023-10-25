    let menuSide = document.getElementById('menu-side');
    let btnOpen = document.getElementById('btn-open');
    let btnUser = document.getElementById('btn-user');
    let menuUser = document.getElementById('menu-user');
    let btnBuy = document.getElementById('btn-buy');
    let cart = document.getElementById('cart');
    
    //desplegar el carrito
    btnBuy.addEventListener('click', function() {
        cart.classList.toggle('open');
    });


    //desplegar el menu de usuario
    btnUser.addEventListener('click', function() {
        //menuSide.classList.toggle('menu-side-hidden');
        menuUser.classList.toggle('open');
    });


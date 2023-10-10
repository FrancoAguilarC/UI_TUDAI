'use strict'

const carouselContent  = document.querySelector('.carousel-content');
const punto = document.querySelectorAll('.punto');

//asignar click en los puntos
    //saber la posicion de ese punto
    //transform translate ejue x al cc
    //quitar la clase activo de todos los puntos
    //aniadir la clase activo al punto que hemos hecho click

punto.forEach((cadaPunto, i)=> {
    punto[i].addEventListener('click', ()=>{
        let posicion = i
        //cuando la pos es 0 el transformX es 0
        //para pos 1 transformX es -50
        //operacion = posicion * -50
        let operacion = posicion * -50

        carouselContent.style.transform = `translateX(${operacion}%)`

        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})
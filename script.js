
// ==============================
// FRASE CON EFECTO MÁQUINA DE ESCRIBIR
// ==============================

const texto = "Donde la belleza, el bienestar y el cuidado se encuentran.";

const typing = document.getElementById("typing");

let i = 0;

function escribir() {

    if (i < texto.length) {

        typing.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribir, 60);

    }

}

window.onload = escribir;


// ==============================
// ANIMACIÓN AL HACER SCROLL
// ==============================

const elementos = document.querySelectorAll(".servicio");

const mostrar = () => {

    elementos.forEach((elemento)=>{

        const posicion = elemento.getBoundingClientRect().top;

        const pantalla = window.innerHeight - 120;

        if(posicion < pantalla){

            elemento.classList.add("mostrar");

        }

    });

}

window.addEventListener("scroll",mostrar);

mostrar();

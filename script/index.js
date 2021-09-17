var barra = document.getElementById("menu-despegable");
var boton = document.getElementById("boton-despegable");

document.getElementById("boton-despegable").addEventListener('click', (event) => {
        barra.classList.toggle("responsive-bar");
        alert("esa no fue xd")
    })
    /*
    function mobilMenu() {
        barra.classList.toggle("responsive-bar");
        alert("esa no fue xd")
    }

    boton.addEventListener('click', (event) => {
        barra.classList.toggle("responsive-bar");
        alert("esa no fue xd")
    });*/
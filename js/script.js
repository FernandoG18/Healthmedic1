document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll("header nav ul li a");

    // Itera sobre cada enlace y agrega un evento de clic a cada uno
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Oculta el menú de navegación cuando se hace clic en un enlace
            document.getElementById("nav_check").checked = false;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const opinionesContainer = document.querySelector(".opiniones-container");
    const opiniones = opinionesContainer.querySelectorAll(".opinion");
    let currentIndex = 0;
    const numOpiniones = opiniones.length;
    const numOpinionesAMostrar = 1;

    function mostrarOpiniones() {
        for (let i = 0; i < numOpiniones; i++) {
            if (i >= currentIndex && i < currentIndex + numOpinionesAMostrar) {
                opiniones[i].style.display = "block";
            } else {
                opiniones[i].style.display = "none";
            }
        }
    }

    mostrarOpiniones();

    document.querySelector(".opiniones-prev").addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex -= numOpinionesAMostrar;
            if (currentIndex < 0) {
                currentIndex = 0;
            }
            mostrarOpiniones();
        }
    });

    document.querySelector(".opiniones-next").addEventListener("click", function() {
        if (currentIndex + numOpinionesAMostrar < numOpiniones) {
            currentIndex += numOpinionesAMostrar;
            mostrarOpiniones();
        }
    });
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí puedes agregar la lógica para verificar la contraseña
    // Por ahora, simplemente mostramos el mensaje de contraseña incorrecta
    var passwordError = document.getElementById("password-error");
    passwordError.style.display = "block";

    // Ocultar el mensaje después de 3 segundos
    setTimeout(function() {
        passwordError.style.display = "none";
    }, 2000);
});
function initMap() {
    // Coordenadas del lugar
    var location = {lat: -12.064557, lng: -75.206506};
    // Crear un mapa en el elemento con el ID 'map'
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15, // Nivel de zoom
        center: location // Centrar el mapa en las coordenadas dadas
    });
    // Crear un marcador en las coordenadas dadas
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

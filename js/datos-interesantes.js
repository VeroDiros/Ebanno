const btnJSON = document.getElementById("btnJSON");
const contenedorDJSON = document.getElementById("datosInteresantesJSON");


const datosJSON = './js/datos-interesantes.json';
btnJSON.addEventListener('click', () => {
    llamardatosJSON();
})

const llamardatosJSON = () => {
    fetch(datosJSON)
        .then(respuesta => respuesta.json())
        .then(informacion => informacion.forEach(dato => {
            contenedorDJSON.innerHTML +=
                `
    <h2>${dato.nombre}</h2>
    <img id="imagenesDatos" src="${dato.img}" alt="${dato.nombre}">
    <p id="parrafoDatos">${dato.contenido}</p>
    `
        }))

}

const footer = document.getElementsByClassName("contenedorFooter");
footer.classList.add("footer-text");

footer.innerHTML = `<a href= "./contacto.html"> ¡Contáctanos! <a>`;
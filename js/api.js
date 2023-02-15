const botonApi = document.getElementById("buttonApi");

const contenedorAPI= document.getElementById("contenedorAPI");

const url = 'https://fakestoreapi.com/products';
botonApi.addEventListener('click', ()=>{
    llamarAPi();
})

const llamarAPi = () =>{
    fetch (url)
    .then(respuesta=> respuesta.json())
    .then(informacion => informacion.forEach (producto => {
        contenedorAPI.innerHTML +=
        `
    <h2>${producto.title}</h2>
    <img src="${producto.image}" alt="${producto.title}">
    <p>${producto.description}</p>
    `   
}))
contenedorAPI.classList.add("grid");
}

/////////////
const botonJSON = document.getElementById("buttonJSON");
const contenedorJSON= document.getElementById("contenedorJSON");


const docJSON = './js/productos.json';
botonJSON.addEventListener('click', ()=>{
    llamarJSON();
})

const llamarJSON = () =>{
    fetch (docJSON)
    .then(respuesta=> respuesta.json())
    .then(informacion => informacion.forEach (producto => {
        contenedorJSON.innerHTML +=
        `
    <h2>${producto.nombre}</h2>
    <img src="${producto.img}" alt="${producto.nombre}">
    <p>${producto.precio}</p>
    <p>${producto.decripcion}</p>
    `   
}))

}
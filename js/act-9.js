/////////////////////////////////////////////    ACTIVIDAD 9      /////////////////////////////
// Esta actividad se puede visualizar en cocinas-integrales.html
let nuevoElemento = document.createElement('div');
nuevoElemento.innerHTML = '<h1 class= "texto1"> Actividad 1 Tarea 9</h1>';
let divZapato = document.getElementById("divZapatos");
let sectionE = document.getElementById('tarea9');
sectionE.appendChild(nuevoElemento);
sectionE.appendChild(divZapato);


// Cambio el contenido del H1
nuevoElemento.textContent = 'Hola';

//Creo una lista HTML
let nuevaLista = document.createElement('ul');
nuevaLista.innerHTML =
    `
    <li> Mesa </li>
    <li> Silla </li>
    <li> Closet </li>
    `;

sectionE.appendChild(nuevaLista);

let = zapatos = [
    { marca: 'NIKE', stock: 8, precios: 150.30 },
    { marca: 'PUMA', stock: 7, precios: 80.5 },
    { marca: 'ADIDAS', stock: 6, precios: 70.41 },
    { marca: 'CONVERSE', stock: 8, precios: 120.8 }
]
// Todos los productos

let contenido = zapatos.forEach(zapato => {
    let ulZapatos = document.createElement('ul');
    ulZapatos.innerHTML =
        `
<li id="idMarca"> Marca: ${zapato.marca} </li> 
<li id="idStock" > Stock: ${zapato.stock}</li>
<li id="idPrecios"> Precio: ${zapato.precios}</li>
`;
    divZapato.appendChild(ulZapatos);
    console.log(ulZapatos);
});

//Intento de estilo rojo
let keyLista = document.getElementById('idMarca');
keyLista.style.color = "#FF0000";

//Botones
let botones = document.createElement('div');
botones.innerHTML =
    `
<button id= "btnMostrar" > Mostrar elementos </button>
<button id= "btnOcultar" > Ocultar elementos </button>
`;
sectionE.appendChild(botones);

//Asignacion de una variable a cada boton
let botonM = document.getElementById("btnMostrar");
let botonO = document.getElementById("btnOcultar");


//Funcionalidad botones

botonO.addEventListener('click', () => {
    eventoOcultar();
});

const eventoOcultar = () => {
    divZapatos.remove();
}

botonM.addEventListener('click', () => {
    eventoMostrar();
});

const eventoMostrar = () => {
    sectionE.appendChild(divZapato);
}

//n5



let createButton = document.createElement('div');
createButton.innerHTML =
    `
<button id= "botonLS" > Guardar datos </button> 
`;

let sectionLS = document.getElementById('contenidoSaludo');
sectionLS.appendChild(createButton);


let botonLS = document.getElementById("botonLS");

botonLS.addEventListener('click', () => {
    funcionBotonLS();
})

let funcionBotonLS = () => {
    var inputValue = document.getElementById("Nombre").value;
    console.log(inputValue);
    localStorage.setItem("idNombre", inputValue);
    console.log(inputValue);

    let createButtonr = document.createElement('div');
    createButtonr.innerHTML =
        `
<button id= "botonReiniciar" > Reiniciar </button> 
`;

    sectionLS.appendChild(createButtonr);
    let botonReiniciar = document.getElementById("botonReiniciar");


    botonReiniciar.addEventListener('click', () => {
        funcionReiniciar();
    })

    let funcionReiniciar = () => {
        texto.innerHTML = '';
        localStorage.clear();
        console.log(localStorage);
        sectionLS.appendChild(createButton);

    }
    var valueFromStorage = localStorage.getItem("idNombre");
    let texto = document.getElementById("contenidoSaludo");
    texto.innerHTML = 'Bienvenido nuevamente ' + valueFromStorage;
}






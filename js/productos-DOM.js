const contadorCarrito = document.getElementById("contadorCarrito");
const contenidoCarrito = document.getElementById("contenidoCarrito");


const mueblesr = [
    { id: 1, tipo: 'Comedor', stock: 8, precio: 1500.50, tipoMdera: 'Pino', img: '../assets/img/comedor.jpg', cantidad: 1},
    { id: 2, tipo: 'Estantería', stock: 5, precio: 1200.60, tipoMdera: 'Cedro', img: '../assets/img/estanteria.jpg', cantidad: 1 },
    { id: 3, tipo: 'Silla', stock: 10, precio: 500.00, tipoMdera: 'Roble', img: '../assets/img/silla.jpg', cantidad: 1 },
    { id: 4, tipo: 'Closet', stock: 9, precio: 150.50, tipoMdera: 'Caoba', img: '../assets/img/closet.png', cantidad: 1 },
    { id: 5, tipo: 'Buró', stock: 7, precio: 1800.80, tipoMdera: 'Pino', img: '../assets/img/buro.jpg', cantidad: 1 },
    { id: 6, tipo: 'Tocador', stock: 2, precio: 2000.90, tipoMdera: 'Arce', img: '../assets/img/tocador.jpg', cantidad: 1 }
]

//Carrito

const carrito = [];
localStorage.setItem('miCarrito', JSON.stringify(carrito)); //pendiente
var array = localStorage.getItem('miCarrito');
// Se parsea para poder ser usado en js con JSON.parse :)
array = JSON.parse(array);
console.log("localStore" + array);


//funcion agregar al carrito
const agregarCarrito = (id, carrito) => {
    const productoElegido = mueblesr.find(item => item.id === id);
    carrito.push(productoElegido);
    console.log("Se agrego exitosamente al carrito", carrito);
}


//Productos en el DOM

const contenedorProductos = document.getElementById("contenedorProductos");

mueblesr.forEach(mueble => {
    const div = document.createElement("div");
    div.innerHTML +=
        `   
        <div class="item">
                <figure>
                    <img src="${mueble.img}" class="card-img-top" alt="${mueble.tipo}">
                </figure>
                <div class="info-producto">
                    <h5 class="card-title">${mueble.tipo}</h5>
                    <p class="card-text">$${mueble.precio}</p>
                    <button id="agregarCarrito${mueble.id}"> Añadir al carrito </button>
                    
                </div>
            </div>
    `
    contenedorProductos.appendChild(div);


    const btnAgregarCarrito = document.getElementById(`agregarCarrito${mueble.id}`);
    btnAgregarCarrito.addEventListener("click", () => {
        agregarCarrito(mueble.id, array);
        agregarContadorCarrito();
        actualizarCarrito();
        //eliminardelCarrito(mueble.id, array)
    })
});//poner clase al boton

contenedorProductos.classList.add("contenedor-items");

//Eliminar
/*const eliminardelCarrito = (id)=>{
    const productoElegido = mueblesr.find(item => item.id === id);
    const filteredLibraries = array.filter((item) => item !== 'react')
    console.log("Se agrego elimimo al carrito", array);
}*/


//AGREGAR AL PRODUCTO CADA VE QUE SE SUME UN PRODUCTO


const agregarContadorCarrito = () => {
    if (array.length !== 0) {
        contadorCarrito.classList.add("contadorCarrito");
        contadorCarrito.textContent = array.length;
    }
}

//Funcion visualizar carrito
const actualizarCarrito = () => {
    contenidoCarrito.innerHTML = "";
    array.forEach(mueble => {
        const tr = document.createElement("tr");
        tr.classList.add("contenidoCarrito");
        tr.innerHTML =
            `
        <td>
        <img src="${mueble.img}" class="image-carrito card-img-top" alt="${mueble.tipo}">
        </td>
        <td class="positioRelative">${mueble.tipo}</td>
        <td class="positioRelative"> Cantidad: ${mueble.cantidad}</td>
        <td class="positioRelative">Precio: $${mueble.precio}</td>
        <span id ="eliminar${mueble.id}" class="delete-product" > <img class= "iconoBasura" src="./assets/img/icono-basura.png" alt="eliminarCarrito${mueble.id}"></span>
        `

        contenidoCarrito.appendChild(tr);

    })
}

//ELIMINAR

const eliminarProducto = () => {
    const encontrarId = array.find((element) => element.id === id);

    array = array.filter((carritoId) => {
        return carritoId !== encontrarId;
    });
    actualizarCarrito();
    console.log("Se elimino")
}







//--------------------------------------ORDENAR ---------------------------------------------------------------

const ordenarAlfabeticamente = () => {
    mueblesr.sort((a, b) => {
        if (a.tipo.toLocaleLowerCase() > b.tipo.toLocaleLowerCase()) {
            return 1
        }
        if (a.tipo.toLocaleLowerCase() < b.tipo.toLocaleLowerCase()) {
            return -1;
        }
        {
            return 0;
        }
    });
    console.log(mueblesr);

    contenedorProductos.innerHTML = "";
    mueblesr.forEach(mueble => {
        const divAlfa = document.createElement("div");
        divAlfa.innerHTML +=
            `   
            <div class="item">
            <figure>
                <img src="${mueble.img}" class="card-img-top" alt="${mueble.tipo}">
            </figure>
            <div class="info-producto">
                <h5 class="card-title">${mueble.tipo}</h5>
                <p class="card-text">$${mueble.precio}</p>
                <button id="agregarCarrito${mueble.id}"> Añadir al carrito </button>
                
            </div>
        </div>
            `

        contenedorProductos.appendChild(divAlfa);


        const btnAgregarCarrito = document.getElementById(`agregarCarrito${mueble.id}`);
        btnAgregarCarrito.addEventListener("click", () => {
            agregarCarrito(mueble.id, array);
            agregarContadorCarrito();
            actualizarCarrito();
            //eliminardelCarrito(mueble.id, array);
        })
    });//poner clase al boton

}

let DropdownAlfa = document.getElementById("alfa");
DropdownAlfa.addEventListener('click', () => {
    ordenarAlfabeticamente();
})

///
const ordenarMayorP = () => {
    mueblesr.sort((a, b) => {
        if (a.precio < b.precio) {
            return 1
        }
        if (a.precio > b.precio) {
            return -1;
        }
        {
            return 0;
        }
    });
    console.log(mueblesr);
    contenedorProductos.innerHTML = "";
    mueblesr.forEach(mueble => {
        const divmayorP = document.createElement("div");
        divmayorP.innerHTML +=
            `   
            <div class="item">
            <figure>
                <img src="${mueble.img}" class="card-img-top" alt="${mueble.tipo}">
            </figure>
            <div class="info-producto">
                <h5 class="card-title">${mueble.tipo}</h5>
                <p class="card-text">$${mueble.precio}</p>
                <button id="agregarCarrito${mueble.id}"> Añadir al carrito </button>
                
            </div>
        </div>
            `

        contenedorProductos.appendChild(divmayorP);


        const btnAgregarCarrito = document.getElementById(`agregarCarrito${mueble.id}`);
        btnAgregarCarrito.addEventListener("click", () => {
            agregarCarrito(mueble.id, array);
            agregarContadorCarrito();
            actualizarCarrito();
            //eliminardelCarrito(mueble.id, array)
            //
            miStorage = window.localStorage;
            console.log(miStorage);
        })

    });
}

let DropdownMayorP = document.getElementById("mayorP");
DropdownMayorP.addEventListener('click', () => {
    ordenarMayorP();
});

//

const ordenarMenorP = () => {
    mueblesr.sort((a, b) => {
        if (a.precio > b.precio) {
            return 1
        }
        if (a.precio < b.precio) {
            return -1;
        }
        {
            return 0;
        }
    });
    console.log(mueblesr);

    contenedorProductos.innerHTML = "";
    mueblesr.forEach(mueble => {
        const divmenorP = document.createElement("div");
        divmenorP.innerHTML +=
            `   
            <div class="item">
            <figure>
                <img src="${mueble.img}" class="card-img-top" alt="${mueble.tipo}">
            </figure>
            <div class="info-producto">
                <h5 class="card-title">${mueble.tipo}</h5>
                <p class="card-text">$${mueble.precio}</p>
                <button id="agregarCarrito${mueble.id}"> Añadir al carrito </button>
                
            </div>
        </div>
            `

        contenedorProductos.appendChild(divmenorP);


        const btnAgregarCarrito = document.getElementById(`agregarCarrito${mueble.id}`);
        btnAgregarCarrito.addEventListener("click", () => {
            agregarCarrito(mueble.id, array);
            agregarContadorCarrito();
            actualizarCarrito();
            //eliminardelCarrito(mueble.id, array)
        });

    });

}

let DropdownMenorP = document.getElementById("menorP");
DropdownMenorP.addEventListener('click', () => {
    ordenarMenorP();
})

//
miStorage = window.localStorage;
console.log(miStorage);

///
const botonJSON = document.getElementById("buttonMasProductos");


const docJSON = './js/productos.json';
botonJSON.addEventListener('click', () => {
    llamarJSON();
})

const llamarJSON = () => {
    fetch(docJSON)
        .then(respuesta => respuesta.json())
        .then(informacion => informacion.forEach(producto => {
            contenedorProductos.innerHTML +=
                `
        <div class="item">
        <figure>
            <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
        </figure>
        <div class="info-producto"> 
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}</p>
            <button id="agregarCarrito${producto.id}"> Añadir al carrito </button>
            
        </div>
    </div>
    `
        }))

}
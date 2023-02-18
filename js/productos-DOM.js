const contadorCarrito = document.getElementById("contadorCarrito");
const contenidoCarrito = document.getElementById("contenidoCarrito");
const precioTotalC = document.getElementById("precioTotalC");
const contador = document.createElement("p");
const btnComprar = document.getElementById("btnComprar");

const mueblesr = [
    { id: 1, tipo: 'Comedor', stock: 8, precio: 1500.50, tipoMdera: 'Pino', img: '../assets/img/comedor.jpg', cantidad: 1 },
    { id: 2, tipo: 'Estantería', stock: 5, precio: 1200.60, tipoMdera: 'Cedro', img: '../assets/img/estanteria.jpg', cantidad: 1 },
    { id: 3, tipo: 'Silla', stock: 10, precio: 500.00, tipoMdera: 'Roble', img: '../assets/img/silla.jpg', cantidad: 1 },
    { id: 4, tipo: 'Closet', stock: 9, precio: 150.50, tipoMdera: 'Caoba', img: '../assets/img/closet.png', cantidad: 1 },
    { id: 5, tipo: 'Buró', stock: 7, precio: 1800.80, tipoMdera: 'Pino', img: '../assets/img/buro.jpg', cantidad: 1 },
    { id: 6, tipo: 'Tocador', stock: 2, precio: 2000.90, tipoMdera: 'Arce', img: '../assets/img/tocador.jpg', cantidad: 1 }
]

//Carrito

const carrito = [];
localStorage.setItem('miCarrito', JSON.stringify(carrito)); //pendiente
/*var array = localStorage.getItem('miCarrito');
// Se parsea para poder ser usado en js con JSON.parse :)
array = JSON.parse(array);
console.log("localStore" + array);*/


//funcion agregar al carrito
const agregarCarrito = (id, carrito) => {
    const existeProducto = carrito.some(item => item.id === id);
    const productoElegido = mueblesr.find(item => item.id === id);
    if (existeProducto) {
        let precioInicial = productoElegido.precio;
        productoElegido.cantidad++;
        productoElegido.precio = productoElegido.cantidad * precioInicial;
    } else {
        carrito.push(productoElegido);
        console.log("se agrego al carrito", carrito);
    }
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
                    <p class="card-text">Precio: $${mueble.precio}</p>
                    <button id="agregarCarrito${mueble.id}"> Añadir al carrito </button>
                    
                </div>
            </div>
    `
    contenedorProductos.appendChild(div);


    const btnAgregarCarrito = document.getElementById(`agregarCarrito${mueble.id}`);
    btnAgregarCarrito.addEventListener("click", () => {
        agregarCarrito(mueble.id, carrito);
        agregarContadorCarrito();
        actualizarCarrito();
        //eliminardelCarrito(mueble.id, array)
    })
});//poner clase al boton

contenedorProductos.classList.add("contenedor-items");

//AGREGAR AL PRODUCTO CADA VE QUE SE SUME UN PRODUCTO


const agregarContadorCarrito = () => {
    if (carrito.length !== 0) {
        contador.classList.add("contadorCarrito");
        contador.textContent = carrito.length;
        contadorCarrito.appendChild(contador);
    } else {
        contadorCarrito.textContent = "";
        contadorCarrito.classList.remove("contadorCarrito");
    }
}


//Funcion visualizar carrito
const actualizarCarrito = () => {
    contenidoCarrito.innerHTML = "";
    carrito.forEach(mueble => {
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
        <td  id ="eliminar${mueble.id}" class="delete-product" > <img  class= "iconoBasura" src="./assets/img/icono-basura.png" alt="eliminarCarrito${mueble.id}"></td>
        `

        contenidoCarrito.appendChild(tr);

        const botonEliminar = document.getElementById(`eliminar${mueble.id}`);
        botonEliminar.addEventListener('click', () => {
            eliminarProducto(mueble.id);
        })

    })
    const totalCarrito = carrito.reduce((acumulador, productos) => acumulador + productos.precio, 0);
    precioTotalC.innerText = `Precio Total: $${totalCarrito}`;
}

//ELIMINAR

const eliminarProducto = (productoAEliminar) => {
    const productoEliminado = carrito.find(mueble => mueble.id === productoAEliminar);
    const index = carrito.indexOf(productoEliminado);
    carrito.splice(index, 1);
    agregarContadorCarrito();
    actualizarCarrito();
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
                <p class="card-text">Precio: $${mueble.precio}</p>
                <button id="agregarCarrito${mueble.id}"> Añadir al carrito </button>
                
            </div>
        </div>
            `

        contenedorProductos.appendChild(divAlfa);


        const btnAgregarCarrito = document.getElementById(`agregarCarrito${mueble.id}`);
        btnAgregarCarrito.addEventListener("click", () => {
            agregarCarrito(mueble.id, carrito);
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
                <p class="card-text">Precio: $${mueble.precio}</p>
                <button id="agregarCarrito${mueble.id}"> Añadir al carrito </button>
                
            </div>
        </div>
            `

        contenedorProductos.appendChild(divmayorP);


        const btnAgregarCarrito = document.getElementById(`agregarCarrito${mueble.id}`);
        btnAgregarCarrito.addEventListener("click", () => {
            agregarCarrito(mueble.id, carrito);
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
                <p class="card-text">Precio: $${mueble.precio}</p>
                <button id="agregarCarrito${mueble.id}"> Añadir al carrito </button>
                
            </div>
        </div>
            `

        contenedorProductos.appendChild(divmenorP);


        const btnAgregarCarrito = document.getElementById(`agregarCarrito${mueble.id}`);
        btnAgregarCarrito.addEventListener("click", () => {
            agregarCarrito(mueble.id, carrito);
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

//SweetAlert
btnComprar.addEventListener('click', () => {
    Swal.fire(
        '¡Felicidades!',
        'Haz realizado tu compra',
        'success'
    )
    carrito.innerText = "";
    contenidoCarrito.innerText = "";
    contadorCarrito.innerText = "";
    precioTotalC.innerText = `Precio Total: $0`;
})
//
miStorage = window.localStorage;
console.log(miStorage);

///
/*const botonJSON = document.getElementById("buttonMasProductos");


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
            <p class="card-text">Precio: $${producto.precio}</p>
            <button id="agregarCarrito${producto.id}"> Añadir al carrito </button>
            
        </div>
    </div>
    `
        }))

}*/



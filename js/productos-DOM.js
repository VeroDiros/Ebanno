const contadorCarrito = document.getElementById("contadorCarrito");
const contenidoCarrito =  document.getElementById("contenidoCarrito");


const mueblesr= [
    {id: 1, tipo: 'Comedor', stock: 8, precio: 1500.50, tipoMdera: 'Pino', img: './assets'},
    {id: 2,tipo: 'Ropero', stock: 5, precio: 1200.60, tipoMdera: 'Cedro', img: 'assets/'},
    {id: 3,tipo: 'Silla', stock: 10, precio: 500.00, tipoMdera: 'Roble', img: 'assets/'},
    {id: 4,tipo: 'Closet', stock: 9, precio: 150.50, tipoMdera: 'Caoba', img: 'assets/'},
    {id: 5,tipo: 'Buró', stock: 7, precio: 1800.80, tipoMdera: 'Pino', img: 'assets/'},
    {id: 6,tipo: 'Tocador', stock: 2, precio: 2000.90, tipoMdera: 'Arce', img: 'assets/'}
]

//Carrito

const carrito = [];
localStorage.setItem('miCarrito', JSON.stringify(carrito)); //pendiente
var array = localStorage.getItem('miCarrito');
    // Se parsea para poder ser usado en js con JSON.parse :)
array = JSON.parse(array);
console.log("localStore"+ array);


//funcion agregar al carrito
const agregarCarrito = (id, carrito) =>{
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
                    <img src="assets/img/closet.png" class="card-img-top" alt="...">
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
    btnAgregarCarrito.addEventListener("click", ()=> {
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
    if(array.length !== 0) {
        contadorCarrito.classList.add("contadorCarrito");
        contadorCarrito.textContent = array.length;
    }
}

//Funcion visualizar carrito
const actualizarCarrito = ()=>{
    contenidoCarrito.innerHTML = "";
    array.forEach(mueble => {
        const div = document.createElement("div");
        div.classList.add("contenidoCarrito");
        div.innerHTML =
        `
        <p class="positioRelative">${mueble.tipo}</p>
        <p class="positioRelative">Precio: $${mueble.precio}</p>
        <p class="positioRelative"> Madera: ${mueble.tipoMdera}</p>
        <span class ="delete-product" > <img class= "iconoBasura" src="./assets/img/icono-basura.png" alt="eliminarCarrito"></span>
        `

        contenidoCarrito.appendChild(div);

        let eliminar = contenidoCarrito.querySelector(".delete-product");
        eliminar.addEventListener('click', ()=>{
            eliminarProducto(mueble.id);
        })

        /*let eliminar = document.createElement("span");
        eliminar.innerHTML= 
        `
        <img class= "iconoBasura" src="./assets/img/icono-basura.png" alt="eliminarCarrito">
        `
        eliminar.className = "delete-product";
        eliminar.classList.add("contenidoCarrito");
        contenidoCarrito.append(eliminar);
        eliminar.addEventListener("click", eliminarProducto);*/


    })
}

//ELIMINAR

const eliminarProducto = () =>{
    const encontrarId = array.find((element) => element.id === id);

    array = array.filter((carritoId)=> {
        return carritoId !== encontrarId;
    });
    actualizarCarrito();
    console.log("Se elimino")
}







//--------------------------------------ORDENAR ---------------------------------------------------------------

const ordenarAlfabeticamente = ()=>{
    mueblesr.sort((a, b) => {
        if (a.tipo.toLocaleLowerCase() > b.tipo.toLocaleLowerCase()){
            return 1
        }
        if (a.tipo.toLocaleLowerCase() < b.tipo.toLocaleLowerCase()){
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
                            <img src="assets/img/closet.png" class="card-img-top" alt="...">
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
            btnAgregarCarrito.addEventListener("click", ()=> {
                agregarCarrito(mueble.id, array);
                agregarContadorCarrito();
                actualizarCarrito();
                //eliminardelCarrito(mueble.id, array);
            })
        });//poner clase al boton

}

let DropdownAlfa = document.getElementById("alfa");
    DropdownAlfa.addEventListener('click', ()=>{
        ordenarAlfabeticamente();
})

///
const ordenarMayorP = ()=>{
    mueblesr.sort((a, b) => {
        if (a.precio < b.precio){
            return 1
        }
        if (a.precio > b.precio){
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
                            <img src="assets/img/closet.png" class="card-img-top" alt="...">
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
            btnAgregarCarrito.addEventListener("click", ()=> {
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
DropdownMayorP.addEventListener('click', ()=>{
    ordenarMayorP();
});

//

const ordenarMenorP = ()=>{
    mueblesr.sort((a, b) => {
        if (a.precio > b.precio){
            return 1
        }
        if (a.precio < b.precio){
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
                            <img src="assets/img/closet.png" class="card-img-top" alt="...">
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
            btnAgregarCarrito.addEventListener("click", ()=> {
                agregarCarrito(mueble.id, array);
                agregarContadorCarrito();
                actualizarCarrito();
                //eliminardelCarrito(mueble.id, array)
            });
        
        });
    
    }

let DropdownMenorP = document.getElementById("menorP");
DropdownMenorP.addEventListener('click', ()=>{
    ordenarMenorP();
})

//
miStorage = window.localStorage;
console.log(miStorage);

///
const botonJSON = document.getElementById("buttonMasProductos");


const docJSON = './js/productos.json';
botonJSON.addEventListener('click', ()=>{
    llamarJSON();
})

const llamarJSON = () =>{
    fetch (docJSON)
    .then(respuesta=> respuesta.json())
    .then(informacion => informacion.forEach (producto => {
        contenedorProductos.innerHTML +=
        `
        <div class="item">
        <figure>
            <img src="assets/img/closet.png" class="card-img-top" alt="...">
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
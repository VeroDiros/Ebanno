const contadorCarrito = document.getElementById("contadorCarrito");
const contenidoCarrito =  document.getElementById("contenidoCarrito");


const mueblesr= [
    {id: 1, tipo: 'comedor', stock: 8, precio: 1500.50, tipoMdera: 'pino', img: './assets'},
    {id: 2,tipo: 'ropero', stock: 5, precio: 1200.60, tipoMdera: 'cedro', img: 'assets/'},
    {id: 3,tipo: 'silla', stock: 10, precio: 500.00, tipoMdera: 'roble', img: 'assets/'},
    {id: 4,tipo: 'closet', stock: 9, precio: 150.50, tipoMdera: 'caoba', img: 'assets/'},
    {id: 5,tipo: 'buro', stock: 7, precio: 1800.80, tipoMdera: 'pino', img: 'assets/'},
    {id: 6,tipo: 'tocador', stock: 2, precio: 2000.90, tipoMdera: 'arce', img: 'assets/'}
]

//Carrito

const carrito = [];

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
                    <p class="card-text">${mueble.precio}</p>
                    <button onclick="eliminardelCarrito()" id="agregarCarrito${mueble.id}"> Añadir al carrito </button>
                    
                </div>
            </div>
    `
    contenedorProductos.appendChild(div);

    const btnAgregarCarrito = document.getElementById(`agregarCarrito${mueble.id}`);
    btnAgregarCarrito.addEventListener("click", ()=> {
        agregarCarrito(mueble.id, carrito);
        agregarContadorCarrito();
        actualizarCarrito();
        eliminardelCarrito(mueble.id, carrito)
    })
});//poner clase al boton

contenedorProductos.classList.add("contenedor-items");

//Eliminar
const eliminardelCarrito = (id)=>{
    const productoElegido = mueblesr.find(item => item.id === id);
    const filteredLibraries = carrito.filter((item) => item !== 'react')
    console.log("Se agrego elimimo al carrito", carrito);
}


//AGREGAR AL PRODUCTO CADA VE QUE SE SUME UN PRODUCTO


const agregarContadorCarrito = () => {
    if(carrito.length !== 0) {
        contadorCarrito.classList.add("contadorCarrito");
        contadorCarrito.textContent = carrito.length;
    }
}

//Funcion visualizar carrito
const actualizarCarrito = ()=>{
    contenidoCarrito.innerHTML = "";
    carrito.forEach(mueble => {
        const div = document.createElement("div");
        div.classList.add("contenidoCarrito");
        div.innerHTML =
        `
        <p class="positioRelative">${mueble.tipo}</p>
        <p class="positioRelative">Precio: $${mueble.precio}</p>
        <p class="positioRelative"> Madera: ${mueble.tipoMdera}</p>
        `

        contenidoCarrito.appendChild(div);

        let eliminar = document.createElement("span");
        eliminar.innerHTML= 
        `
        <img class= "iconoBasura" src="./assets/img/icono-basura.png" alt="eliminarCarrito">
        `
        eliminar.className = "delete-product";
        eliminar.classList.add("contenidoCarrito");
        contenidoCarrito.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    })
}

const eliminarProducto = () =>{
    const encontrarId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId)=> {
        return carritoId !== encontrarId;
    });
    actualizarCarrito();

}

///ORDENAR

function getSelectValue(){
    document.getElementById("myDropdown").onchange = function() {
        var seleccion=document.getElementById("myDropdown").value;
     
        if(seleccion=="Alfabeticamente"){
        ordenar();
        }
        else if(seleccion=="dos"){
        }
        else if(seleccion="tres"){
        }
        else{
        }
        return false
     };
}
